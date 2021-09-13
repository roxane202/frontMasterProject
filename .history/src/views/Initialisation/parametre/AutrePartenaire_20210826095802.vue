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
                    <h3>Autre partenaire</h3>
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
            :items="getterAutrePartenaire"
            sort-by="code"
            class="elevation-1"
          >
            <template v-slot:[&#x60;item.actions&#x60;]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>

          <!--DIALOGUE D'AJOUT--->
          <v-dialog max-width="600" v-model="dialog">
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>Formulaire d'enregistrement</v-toolbar>
                <v-card-text>
                  <br />
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
                    <label class="form-label semibold" for="libelle">Libelle</label>
                    <input
                      type="text"
                      :class="{ 'hasErroInpu': $v.formData.libelle.$error }"
                      v-model="formData.libelle"
                      name="libelle"
                      class="form-control"
                      id="libelle"
                      placeholder="Libelle"
                    />
                    <div
                      style="color: red;"
                      class
                      v-if="$v.formData.libelle.$error"
                    >Veillez entrer le libelle</div>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fermer</v-btn>
                  <v-btn
                    :disabled="getterLoadingAutrePartenaire"
                    :loading="getterLoadingAutrePartenaire"
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
      <v-dialog v-model="getterLoadingAutrePartenaire" persistent width="250" height="200">
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

      <!--DIALOGUE MODIFICATION--->

      <v-dialog max-width="600" v-model="dialogEdite">
        <template v-slot:default="dialogEdite">
          <v-card>
            <v-toolbar color="primary" dark>Modification</v-toolbar>
            <v-card-text>
              <br />
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
                <label class="form-label semibold" for="libelle">Libelle</label>
                <input
                  type="text"
                  v-model="edite.libelle"
                  name="libelle"
                  class="form-control"
                  id="libelle"
                  placeholder="Libelle"
                />
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialogEdite.value = false">Fermer</v-btn>
              <v-btn
                :disabled="getterLoadingAutrePartenaire"
                :loading="getterLoadingAutrePartenaire"
                class="white--text"
                color="purple darken-2"
                @click="modification(edite)"
              >Modifier</v-btn>
            </v-card-actions>
          </v-card>
        </template>
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
      formData: {
        code: "",
        libelle: ""
      },
      edite: "",

      dialogEdite: false,
      dialogDelete: false,
      headers: [
        { text: "Code", value: "code" },
        { text: "Libelle", value: "libelle" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      desserts: [],
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
      "getterAutrePartenaire",
      "getterLoadingAutrePartenaire",
      "getterErrorAutrePartenaire"
    ]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  validations: {
    formData: {
      code: { required, min: minLength(2) },
      libelle: { required }
    }
  },
  methods: {
    ...mapActions("Application", [
      "ajouterAutrePartenaire",
      "supprimerAutrePartenaire",
      "modificationAutrePartenaire"
    ]),
    gotoModale() {
      this.dialog = true;
    },
    enregistrement() {
      this.$v.formData.$touch();
      if (this.$v.formData.$error) {
        return;
      }

      this.ajouterAutrePartenaire(this.formData);
      if (this.getterErrorAutrePartenaire == false) {
        this.$v.formData.$reset();
        this.formData = {
          code: "",
          libelle: ""
        };
      }
    },

    modification(item) {
      this.modificationAutrePartenaire(item);
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

    deleteItemConfirm(item) {
      this.dialogDelete = false;
      this.supprimerAutrePartenaire(item.id);
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
