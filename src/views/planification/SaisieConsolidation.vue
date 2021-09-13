<template>
  <v-app>
    <notifications />
    <v-main>
      <div class="page-content">
        <div class="container-fluid">
          <header class="page-content-header">
            <div class="container-fluid">
              <div class="tbl">
                <div class="tbl-row">
                  <div class="tbl-cell">
                    <h3>
                      Saisie et consolidation des exigences des Parties
                      Prenantes
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <v-data-table
            :headers="headers"
            :items="getterPartiePrenanteProjet"
            sort-by="code"
            class="elevation-1"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            item-key="code"
            show-expand
          >
            <!-- expanded items -->
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <h5>Exigences partie prenante {{ item.code }}</h5>
                  </div>
                  <div class="tbl-cell tbl-cell-action">
                    <v-btn
                      color="primary"
                      @click="gotoModale()"
                      elevation="5"
                      medium
                    >
                      <v-icon color="red"></v-icon> Ajouter</v-btn
                    >
                  </div>
                </div>

                <table id="table-edit" class="table table-hover">
                  <tr>
                    <td style="background-color: #f7f7f7">Code</td>
                    <td style="background-color: #f7f7f7">Exigence</td>
                    <td style="background-color: #f7f7f7">Action</td>
                  </tr>

                  <tbody>
                    <tr v-for="item in listeExigence(item.id)" :key="item.id">
                      <td>{{ item.code }}</td>
                      <td>{{ item.libelle }}</td>
                      <td>
                        <v-icon small @click="deleteItemProjetPartie(partie)">
                          mdi-delete
                        </v-icon>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style="text-align: center"
                  v-if="!listeExigence(item.id).length"
                >
                  <h4>Aucune exigence</h4>
                </div>
              </td>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>

          <!--DIALOGUE D'AJOUT--->
          <v-dialog max-width="900" v-model="dialog" persistent>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark
                  >Formulaire d'enregistrement</v-toolbar
                >
                <v-card-text>
                  <br />
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label class="form-label semibold" for="code"
                          >Code</label
                        >
                        <input
                          type="text"
                          :class="{ hasErroInpu: $v.formData.code.$error }"
                          v-model="formData.code"
                          name="code"
                          class="form-control"
                          id="code"
                          placeholder="Code"
                        />
                        <div
                          style="color: red"
                          class=""
                          v-if="$v.formData.code.$error"
                        >
                          Veillez entrer le code
                        </div>
                      </div>
                    </div>

                    <div class="col-md-8">
                      <div class="form-group">
                        <label class="form-label semibold" for="exigence"
                          >Exigence</label
                        >
                        <input
                          type="text"
                          :class="{
                            hasErroInpu: $v.formData.libelle.$error,
                          }"
                          v-model="formData.libelle"
                          name="libelle"
                          class="form-control"
                          id="libelle"
                          placeholder="libelle"
                        />
                        <div
                          style="color: red"
                          class=""
                          v-if="$v.formData.libelle.$error"
                        >
                          Veillez entrer l'exigence
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fermer</v-btn>
                  <v-btn
                    :disabled="getterloadingExigence"
                    :loading="getterloadingExigence"
                    class="white--text"
                    color="purple darken-2"
                    @click="enregistrement()"
                  >
                    Enregistrer
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>

      <!--DIALOG LOADING--->
      <v-dialog
        v-model="getterloadingExigence"
        persistent
        width="250"
        height="200"
      >
        <v-card color="#2e3599" dark class="text-center">
          <v-card-text class="white--text">
            Requête en cours de traitement<br />
            <v-progress-circular
              indeterminate
              color="white"
              class="mb-0"
              size="50"
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!---DIALOGUE DE SUPPRESION-->

      <v-dialog v-model="dialogDelete" max-width="290">
        <v-card>
          <v-card-title class="headline"> Suppression !! </v-card-title>

          <v-card-text>
            Voulez vous réellement effectuer cette action ?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green" text @click="dialogDelete = false">
              Annuler
            </v-btn>

            <v-btn color="red" text @click="deleteItemConfirm(edite)">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDeleteProjetPartie" max-width="290">
        <v-card>
          <v-card-title class="headline"> Suppression !! </v-card-title>

          <v-card-text>
            Voulez vous réellement effectuer cette action ?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green" text @click="dialogDeleteProjetPartie = false">
              Annuler
            </v-btn>

            <v-btn
              color="red"
              text
              @click="deleteItemConfirmProjetPartiePrenante(edite)"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--DIALOGUE MODIFICATION--->

      <v-dialog max-width="600" v-model="dialogEdite" persistent>
        <template v-slot:default="dialogEdite">
          <v-card>
            <v-toolbar color="primary" dark>Modification</v-toolbar>
            <v-card-text>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label semibold" for="code">Code</label>
                    <input
                      type="text"
                      v-model="edite.code"
                      name="code"
                      class="form-control"
                      id="code"
                      placeholder="Code"
                    />
                  </div>

                  <div class="col-md-8">
                    <div class="form-group">
                      <label class="form-label semibold" for="code"
                        >Libellé</label
                      >
                      <input
                        type="text"
                        v-model="edite.exigence"
                        name="exigence"
                        class="form-control"
                        id="exigence"
                        placeholder="exigence"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialogEdite.value = false">Fermer</v-btn>
              <v-btn
                :disabled="getterLoadingProjet"
                :loading="getterLoadingProjet"
                class="white--text"
                color="purple darken-2"
                @click="modification(edite)"
              >
                Modifier
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!--Dialog pour projet partenaire-->
      <v-dialog
        v-model="getterLoadingProjetPartiePrenantes"
        persistent
        width="250"
        height="200"
      >
        <v-card color="#2e3599" dark class="text-center">
          <v-card-text class="white--text">
            Requête en cours de traitement<br />
            <v-progress-circular
              indeterminate
              color="white"
              class="mb-0"
              size="50"
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Devises",
  data() {
    return {
      dialog: false,
      test: true,
      singleExpand: false,
      expanded: [],
      formData: {
        code: "",
        libelle: "",
        partie_prenante_id: "1",
      },
      edite: "",

      dialogEdite: false,
      dialogDelete: false,
      dialogDeleteProjetPartie: false,
      headers: [
        { text: "Code", value: "code" },
        { text: "Désignation", value: "designation" },
        { text: "Status", value: "status" },
        { text: "Rôle", value: "role" },
        { text: "Télephone", value: "telephone" },
        { text: "Email", value: "email" },
        { text: "Adresse", value: "adresse" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      exigencePP: {
        exigence_pps_id: "",
        partie_prenante_id: "",
      },
      editedIndex: -1,
      editedItem: {
        code: "",
        libelle: "",
      },
      defaultItem: {
        code: "",
        libelle: "",
      },
    };
  },
  created() {},
  computed: {
    ...mapGetters("Application", [
      "getterPartiePrenanteProjet",
      "getterPartiePrenantesExigence",
      "getterErrorExigence",
      "getterloadingExigence",
      "getterExigence",
      "getterLoadingProjetPartiePrenantes",
      "getterProjetPartiePrenantes",
      "getterErrorProjetPartiePrenantes",
    ]),

    listeExigence() {
      return (id) => {
        if (id == null) return [];
        let objetExigence = this.getterExigence.filter(
          (item) => item.exigence_pps_id == id
        );

        let vm = this;
        let collection = [];
        objetExigence.forEach(function (value) {
          let objet = vm.getterExigence.find(
            (ob) => ob.id == value.exigence_pps_id
          );
          if (objet != undefined) {
            let ob = {
              ...objet,
              id_exigence: value.id,
            };
            collection.push(ob);
          }
        });

        return collection;
      };
    },
    partiePrenanteNoExisteToProjet() {
      return (projet) => {
        console.log(projet);
        if (projet == null) return [];
        let vm = this;
        let collection = [];
        this.getterPartiePrenanteProjet.forEach(function (value) {
          console.log(value);
          let objet = vm.getterProjetPartiePrenantes.find((item) => {
            if (
              item.partie_prenante_id == value.id &&
              item.projet_id == projet
            ) {
              return item;
            }
          });
          console.log(objet);

          if (objet == undefined) {
            collection.push(value);
          }
        });
        return collection;
      };
    },
  },
  validations: {
    formData: {
      code: { required, min: minLength(2) },
      libelle: { required, min: minLength(2) },
    },
  },
  methods: {
    ...mapActions("Application", [
      "ajouterExigence",
      "supprimerExigence",
      "modificationExigence",
      "ajouterProjetPartiePrenante",
      "supprimerProjetPartiePrenante",
      "modificationProjetPartiePrenante",
    ]),
    gotoModale() {
      this.dialog = true;
    },
    enregistrement() {
      this.$v.formData.$touch();
      if (this.$v.formData.$error) {
        return;
      }

      this.ajouterExigence(this.formData);
      if (this.getterErrorExigence == false) {
        this.$v.formData.$reset();
        this.formData = {
          code: "",
          libelle: "",
        };
      }
    },

    modification(item) {
      this.modificationProjet(item);
    },
    editItem(item) {
      this.edite = item;
      this.dialogEdite = true;
    },

    deleteItem(item) {
      this.edite = item;
      console.log(this.edite);
      this.dialogDelete = true;
    },

    deleteItemProjetPartie(item) {
      this.edite = item;
      console.log(this.edite);
      this.dialogDeleteProjetPartie = true;
    },

    deleteItemConfirm(item) {
      this.dialogDelete = false;
      this.supprimerProjet(item.id);
    },

    deleteItemConfirmProjetPartiePrenante(item) {
      this.dialogDeleteProjetPartie = false;
      this.supprimerProjetPartiePrenante(item.id_projet_partie_prenante);
    },

    enregistreProjetPartiePrenante(projet) {
      if (this.exigencePP.partie_prenante_id == "") return null;
      this.exigencePP.projet_id = projet;

      this.ajouterProjetPartiePrenante(this.exigencePP);
      if (this.getterErrorProjetPartiePrenantes == false) {
        this.exigencePP = {
          exigence_pps_id: "",
          partie_prenante_id: "",
        };
      }
    },
  },
  watch: {},
};
</script>

<style scoped>
.input {
  background-color: #f7f7f7;
  border: 1px solid #c7c7c7;
  padding: 0.3rem 0.5rem;
  border-radius: 2px;
}
.hasError .input {
  border: red;
}
.hasErroInpu {
  border: 1px red solid;
}
.hasError label {
  color: red;
}
</style>
