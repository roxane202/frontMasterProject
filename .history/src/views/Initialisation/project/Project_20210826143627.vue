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
                    <h3>Projet</h3>
                  </div>
                  <div class="tbl-cell tbl-cell-action">
                    <v-btn color="primary" @click="gotoModale()" elevation="5" medium>
                      <v-icon color="red"></v-icon>Nouveau
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <v-data-table
            :headers="headers"
            :items="getterProjet"
            sort-by="code"
            class="elevation-1"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            item-key="code"
            show-expand
          >
            <template v-slot:[item.budget]="{ item }">
              <div>{{formatageSomme(item.budget)}}</div>
            </template>
            <template v-slot:[item.devise_id]="{ item }">
              <div>{{deviseProjet(item.devise_id)}}</div>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <br />
                <div class="row">
                  <div class="col-md-6">
                    <h5>Parties prenantes du projet {{ item.code }}</h5>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <select
                        id="partie"
                        class="form-control"
                        v-model="projetPP.partie_prenante_id"
                      >
                        <option value>Selectionner Partie prenante</option>
                        <option
                          :value="projetPartie.id"
                          v-for="projetPartie in partiePrenanteNoExisteToProjet(item.id)"
                          :key="'DFR'+projetPartie.id"
                        >{{projetPartie.designation}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <v-btn
                      color="red"
                      elevation="2"
                      small
                      @click="enregistreProjetPartiePrenante(item.id)"
                    >Ajouter</v-btn>
                  </div>
                </div>
                <table id="table-edit" class="table table-hover">
                  <tr>
                    <td style=" background-color: #f7f7f7">Code</td>
                    <td style=" background-color: #f7f7f7">Désignation</td>
                    <td style=" background-color: #f7f7f7">Rôle</td>
                    <td style=" background-color: #f7f7f7">Interne</td>
                    <td style=" background-color: #f7f7f7">Télephone</td>
                    <td style=" background-color: #f7f7f7">Email</td>
                    <td style=" background-color: #f7f7f7">Adresse</td>
                    <td style=" background-color: #f7f7f7">Action</td>
                  </tr>

                  <tbody>
                    <tr v-for="partie in listePartiePrenanteProjet(item.id)" :key="partie.id">
                      <td>{{partie.code}}</td>
                      <td>{{partie.designation}}</td>
                      <td>{{partie.role}}</td>
                      <td>{{partie.status}}</td>
                      <td>{{partie.telephone}}</td>
                      <td>{{partie.email}}</td>
                      <td>{{partie.adresse}}</td>
                      <td>
                        <v-icon small @click="deleteItemProjetPartie(partie)">mdi-delete</v-icon>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style="text-align:center" v-if="!listePartiePrenanteProjet(item.id).length">
                  <h4>Aucun partie prenante</h4>
                </div>
              </td>
            </template>

            <template v-slot:[&#x60;item.actions&#x60;]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>

          <!--DIALOGUE D'AJOUT--->
          <v-dialog max-width="800" v-model="dialog" persistent>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>Formulaire d'enregistrement</v-toolbar>
                <v-card-text>
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label semibold" for="code">Code</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.code.$error }"
                          v-model="formData.code"
                          name="code"
                          class="form-control"
                          id="code"
                          placeholder="Code"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.code.$error"
                        >Veillez entrer le code</div>
                      </div>

                      <div class="form-group">
                        <label class="form-label semibold" for="date_debut">Date début</label>
                        <input
                          type="date"
                          :class="{ 'hasErroInpu': $v.formData.date_debut.$error }"
                          v-model="formData.date_debut"
                          name="date_debut"
                          class="form-control"
                          id="date_debut"
                          placeholder="Date début"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.date_debut.$error"
                        >Veillez entrer la date début</div>
                      </div>

                      <div class="form-group">
                        <label class="form-label semibold" for="chef_projet">Chef de projet</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.chef_projet.$error }"
                          v-model="formData.chef_projet"
                          name="chef_projet"
                          class="form-control"
                          id="date_debut"
                          placeholder="Chef de projet"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.chef_projet.$error"
                        >Veillez entrer chef de projet</div>
                      </div>

                      <div class="form-group">
                        <label class="form-label semibold" for="devise">Devise</label>
                        <select id="devise" class="form-control" v-model="formData.devise_id">
                          <option></option>
                          <option
                            :value="item.id"
                            v-for="item in getterDevise"
                            :key="item.id"
                          >{{item.libelle}}</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label semibold" for="code">Désignation</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.designation.$error }"
                          v-model="formData.designation"
                          name="designation"
                          class="form-control"
                          id="designation"
                          placeholder="designation"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.designation.$error"
                        >Veillez entrer la désignation</div>
                      </div>

                      <div class="form-group">
                        <label class="form-label semibold" for="date_fin">Date fin</label>
                        <input
                          type="date"
                          :min="formData.date_debut"
                          :class="{ 'hasErroInpu': $v.formData.date_fin.$error }"
                          v-model="formData.date_fin"
                          name="date_fin"
                          class="form-control"
                          id="date_fin"
                          placeholder="Date fin"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.date_fin.$error"
                        >Veillez entrer la date fin</div>
                      </div>
                      <div class="form-group">
                        <label class="form-label semibold" for="chef_projet">Commanditaire</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.commanditaire.$error }"
                          v-model="formData.commanditaire"
                          name="commanditaire"
                          class="form-control"
                          id="commanditaire"
                          placeholder="commanditaire"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.commanditaire.$error"
                        >Veillez entrer Commanditaire</div>
                      </div>

                      <div class="form-group">
                        <label
                          class="form-label semibold"
                          for="chef_projet"
                        >Budget projet {{deviseProjet(formData.devise_id)}}</label>

                        <money
                          v-model="formData.budget"
                          name="budget"
                          class="form-control"
                          id="budget"
                          placeholder="budget"
                          :class="{ 'hasErroInpu': $v.formData.budget.$error }"
                        ></money>
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.budget.$error"
                        >Veillez entrer budget</div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fermer</v-btn>
                  <v-btn
                    :disabled="getterLoadingProjet"
                    :loading="getterLoadingProjet"
                    class="white--text"
                    color="purple darken-2"
                    @click="enregistrement()"
                  >Enregistrer</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>

      <!--DIALOG LOADING--->
      <v-dialog v-model="getterLoadingProjet" persistent width="250" height="200">
        <v-card color="#2e3599" dark class="text-center">
          <v-card-text class="white--text">
            Requête en cours de traitement
            <br />
            <v-progress-circular indeterminate color="white" class="mb-0" size="50"></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!---DIALOGUE DE SUPPRESION-->

      <v-dialog v-model="dialogDelete" max-width="290">
        <v-card>
          <v-card-title class="headline">Suppression !!</v-card-title>

          <v-card-text>Voulez vous réellement effectuer cette action ?</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green" text @click="dialogDelete = false">Annuler</v-btn>

            <v-btn color="red" text @click="deleteItemConfirm(edite)">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDeleteProjetPartie" max-width="290">
        <v-card>
          <v-card-title class="headline">Suppression !!</v-card-title>

          <v-card-text>Voulez vous réellement effectuer cette action ?</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green" text @click="dialogDeleteProjetPartie = false">Annuler</v-btn>

            <v-btn color="red" text @click="deleteItemConfirmProjetPartiePrenante(edite)">OK</v-btn>
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

                  <div class="form-group">
                    <label class="form-label semibold" for="date_debut">Date debut</label>
                    <input
                      type="date"
                      v-model="edite.date_debut"
                      name="date_debut"
                      class="form-control"
                      id="date_debut"
                      placeholder="Date debut"
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-label semibold" for="chef_projet">Chef de projet</label>
                    <input
                      type="text"
                      v-model="edite.chef_projet"
                      name="chef_projet"
                      class="form-control"
                      id="date_debut"
                      placeholder="Chef de projet"
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-label semibold" for="devise">Devise</label>
                    <select id="devise" class="form-control" v-model="edite.devise_id">
                      <option></option>
                      <option
                        :value="item.id"
                        v-for="item in getterDevise"
                        :key="item.id"
                      >{{item.libelle}}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label semibold" for="code">Désignation</label>
                    <input
                      type="text"
                      v-model="edite.designation"
                      name="designation"
                      class="form-control"
                      id="designation"
                      placeholder="designation"
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-label semibold" for="date_fin">Date fin</label>
                    <input
                      type="date"
                      :min="edite.date_debut"
                      v-model="edite.date_fin"
                      name="date_fin"
                      class="form-control"
                      id="date_fin"
                      placeholder="Date fin"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label semibold" for="chef_projet">Commanditaire</label>
                    <input
                      type="text"
                      v-model="edite.commanditaire"
                      name="commanditaire"
                      class="form-control"
                      id="commanditaire"
                      placeholder="commanditaire"
                    />
                  </div>

                  <div class="form-group">
                    <label
                      class="form-label semibold"
                      for="chef_projet"
                    >Budget projet {{deviseProjet(edite.devise_id)}}</label>

                    <money
                      v-model="edite.budget"
                      name="budget"
                      class="form-control"
                      id="budget"
                      placeholder="budget"
                    ></money>
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
              >Modifier</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!--Dialog pour projet partenaire-->
      <v-dialog v-model="getterLoadingProjetPartiePrenantes" persistent width="250" height="200">
        <v-card color="#2e3599" dark class="text-center">
          <v-card-text class="white--text">
            Requête en cours de traitement
            <br />
            <v-progress-circular indeterminate color="white" class="mb-0" size="50"></v-progress-circular>
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
        date_debut: "",
        designation: "",
        date_fin: "",
        chef_projet: "",
        commanditaire: "",
        budget: "",
        devise_id: ""
      },
      edite: "",

      dialogEdite: false,
      dialogDelete: false,
      dialogDeleteProjetPartie: false,
      headers: [
        { text: "Code", value: "code" },
        { text: "Désignation", value: "designation" },
        { text: "Date debut", value: "date_debut" },
        { text: "Date fin", value: "date_fin" },
        { text: "Chef projet", value: "chef_projet" },
        { text: "Commanditaire", value: "commanditaire" },
        { text: "Budget", value: "budget" },
        { text: "Cout réel", value: "cout_reel" },
        { text: "Cout restant", value: "cout_restant" },
        { text: "Devise", value: "devise_id", sortable: false },
        { text: "Actions", value: "actions", sortable: false }
      ],
      desserts: [],
      projetPP: {
        projet_id: "",
        partie_prenante_id: ""
      },
      editedIndex: -1,
      editedItem: {
        code: "",
        libelle: ""
      },
      defaultItem: {
        code: "",
        libelle: ""
      }
    };
  },
  created() {},
  computed: {
    ...mapGetters("Application", [
      "getterPartiePrenanteProjet",
      "getterProjet",
      "getterLoadingProjet",
      "getterErrorProjet",
      "getterDevise",
      "getterLoadingProjetPartiePrenantes",
      "getterProjetPartiePrenantes",
      "getterErrorProjetPartiePrenantes"
    ]),
    deviseProjet() {
      return id => {
        if (id == null) return null;

        let objet = this.getterDevise.find(item => item.id == id);
        if (objet == undefined) return null;

        return objet.code;
      };
    },
    listePartiePrenanteProjet() {
      return id => {
        if (id == null) return [];
        let objetProjetPartiePrenante = this.getterProjetPartiePrenantes.filter(
          item => item.projet_id == id
        );

        let vm = this;
        let collection = [];
        objetProjetPartiePrenante.forEach(function(value) {
          let objet = vm.getterPartiePrenanteProjet.find(
            ob => ob.id == value.partie_prenante_id
          );
          if (objet != undefined) {
            let ob = {
              ...objet,
              id_projet_partie_prenante: value.id
            };
            collection.push(ob);
          }
        });

        return collection;
      };
    },
    partiePrenanteNoExisteToProjet() {
      return projet => {
        console.log(projet);
        if (projet == null) return [];
        let vm = this;
        let collection = [];
        this.getterPartiePrenanteProjet.forEach(function(value) {
          console.log(value);
          let objet = vm.getterProjetPartiePrenantes.find(item => {
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
    formatageSomme() {
      return value => {
        if (!value) return 0 + " F CFA";
        let montant = parseFloat(value);
        var p = montant.toFixed(2).split(".");
        return (
          p[0]
            .split("")
            .reverse()
            .reduce((acc, montant, i) => {
              return montant == "-"
                ? acc
                : montant + (i && !(i % 3) ? "." : "") + acc;
            }, "") + " F CFA"
        );
      };
    }
  },
  validations: {
    formData: {
      code: { required, min: minLength(2) },
      designation: { required, min: minLength(2) },
      date_debut: { required },
      date_fin: { required },
      chef_projet: { required },
      commanditaire: { required },
      budget: { required },
      devise_id: { required }
    }
  },
  methods: {
    ...mapActions("Application", [
      "ajouterProjet",
      "supprimerProjet",
      "modificationProjet",
      "ajouterProjetPartiePrenante",
      "supprimerProjetPartiePrenante",
      "modificationProjetPartiePrenante"
    ]),
    gotoModale() {
      this.dialog = true;
    },
    enregistrement() {
      this.$v.formData.$touch();
      if (this.$v.formData.$error) {
        return;
      }

      this.ajouterProjet(this.formData);
      if (this.getterErrorProjet == false) {
        this.$v.formData.$reset();
        this.formData = {
          code: "",
          sigle: "",
          designation: "",
          telephone: ""
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
      if (this.projetPP.partie_prenante_id == "") return null;
      this.projetPP.projet_id = projet;

      this.ajouterProjetPartiePrenante(this.projetPP);
      if (this.getterErrorProjetPartiePrenantes == false) {
        this.projetPP = {
          projet_id: "",
          partie_prenante_id: ""
        };
      }
    }
  },
  watch: {}
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
