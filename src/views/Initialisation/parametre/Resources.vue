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
                    <h3>Resources</h3>
                  </div>
                  <div class="tbl-cell tbl-cell-action">
                    <v-btn
                      color="primary"
                      @click="gotoModale()"
                      elevation="5"
                      medium
                    >
                      <v-icon color="red"></v-icon> Nouveau</v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section class="tabs-section">
            <div class="tabs-section-nav">
              <div class="tbl">
                <ul class="nav" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      href="#tabs-2-tab-1"
                      role="tab"
                      data-toggle="tab"
                      aria-selected="true"
                    >
                      <span class="nav-link-in">
                        Resource Humaine {{ getterUsertest }}
                        <span class="label label-pill label-success"></span>
                      </span>
                    </a>
                  </li>
                  <li
                    class="nav-item"
                    v-for="item in listeResourceDiffRH"
                    :key="item.id"
                  >
                    <a
                      class="nav-link"
                      :href="'#' + item.id"
                      role="tab"
                      data-toggle="tab"
                      aria-selected="false"
                    >
                      <span class="nav-link-in">
                        {{ item.libelle }}
                        <span class="label label-pill label-success">
                          {{ listeResource(item.id).length }}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="tab-content">
              <div
                role="tabpanel"
                class="tab-pane fade in active show"
                id="tabs-2-tab-1"
              >
                <table
                  id="table-sm"
                  class="table table-bordered table-hover table-sm"
                >
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Code</th>
                      <th>Nom et prénom</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Fonction</th>
                      <th>Coût</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in getterUsers" :key="user.id">
                      <td>
                        <div class="card-user-photo">
                          <img
                            :src="imageUser(user.photo)"
                            style="width: 30px"
                          />
                        </div>
                      </td>
                      <td>{{ user.code }}</td>
                      <td>{{ user.libelle }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.telephone }}</td>
                      <td>{{ fonctionLocale(user.fonction) }}</td>
                      <td>{{ formatageSomme(user.cout) }}</td>
                      <td>
                        <v-icon small class="mr-2" @click="editItem(user)">
                          mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(user)">
                          mdi-delete
                        </v-icon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                role="tabpanel"
                class="tab-pane fade"
                v-for="item in listeResourceDiffRH"
                :id="item.id"
                :key="'TY' + item.id"
              >
                <table
                  id="table-sm"
                  class="table table-bordered table-hover table-sm"
                >
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Désignation</th>
                      <th>Coût</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="resource in listeResource(item.id)"
                      :key="resource.id"
                    >
                      <td>{{ resource.code }}</td>
                      <td>{{ resource.libelle_ressource }}</td>
                      <td>{{ formatageSomme(resource.cout) }}</td>
                      <td>
                        <v-icon small class="mr-2" @click="editItem(resource)">
                          mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(resource)">
                          mdi-delete
                        </v-icon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!--.tab-content-->
          </section>

          <!--DIALOGUE D'AJOUT--->
          <v-dialog max-width="600" v-model="dialog" persistent>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark
                  >Formulaire d'enregistrement</v-toolbar
                >
                <v-card-text>
                  <br />
                  <div class="form-group">
                    <label class="form-label semibold" for="type"
                      >Type de resource</label
                    >
                    <select
                      id="type"
                      :class="{
                        hasErroInpu: $v.formData.type_resource_id.$error,
                      }"
                      class="form-control"
                      v-model="formData.type_resource_id"
                    >
                      <option value="">Selectionner le type de resource</option>
                      <option
                        :value="projetPartie.id"
                        v-for="projetPartie in getterTypeResource"
                        :key="'DFR' + projetPartie.id"
                      >
                        {{ projetPartie.libelle }}
                      </option>
                    </select>
                    <div
                      style="color: red"
                      class=""
                      v-if="$v.formData.type_resource_id.$error"
                    >
                      Veillez entrer le type de resource
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label semibold" for="code">Code</label>
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

                  <div class="form-group">
                    <label class="form-label semibold" for="libelle"
                      >Nom et prenom ou désignation</label
                    >
                    <input
                      type="text"
                      :class="{
                        hasErroInpu: $v.formData.libelle_ressource.$error,
                      }"
                      v-model="formData.libelle_ressource"
                      name="libelle_ressource"
                      class="form-control"
                      id="libelle"
                      placeholder="Libelle"
                    />
                    <div
                      style="color: red"
                      class=""
                      v-if="$v.formData.libelle_ressource.$error"
                    >
                      Veillez entrer le nom ou désignation
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label semibold" for="libelle"
                      >Autre Libelle</label
                    >
                    <input
                      type="text"
                      :class="{
                        hasErroInpu: $v.formData.autre_libelle.$error,
                      }"
                      v-model="formData.autre_libelle"
                      name="autre_libelle"
                      class="form-control"
                      id="autre_libelle"
                      placeholder="Autre libelle"
                    />
                    <div
                      style="color: red"
                      class=""
                      v-if="$v.formData.autre_libelle.$error"
                    >
                      Veillez entrer le nom ou désignation
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label semibold" for="libelle"
                      >Fonction</label
                    >
                    <input
                      type="text"
                      :class="{
                        hasErroInpu: $v.formData.fonction.$error,
                      }"
                      v-model="formData.fonction"
                      name="fonction"
                      class="form-control"
                      id="fonction"
                      placeholder="Fonction"
                    />
                    <div
                      style="color: red"
                      class=""
                      v-if="$v.formData.libelle_ressource.$error"
                    >
                      Veillez entrer le nom ou désignation
                    </div>
                  </div>

                  <div
                    class="row"
                    v-if="verifieTypeResource(formData.type_resource_id)"
                  >
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label semibold" for="email"
                          >Email</label
                        >
                        <input
                          type="text"
                          v-model="email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label semibold" for="telephone"
                          >Télephone</label
                        >
                        <input
                          type="text"
                          v-model="telephone"
                          name="telephone"
                          class="form-control"
                          id="telephone"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-label semibold" for="fonction"
                          >Fonction locale</label
                        >
                        <select
                          id="fonction"
                          class="form-control"
                          v-model="formData.fonction"
                        >
                          <option value="">
                            Selectionner la fonction locale
                          </option>
                          <option
                            :value="projetPartie.id"
                            v-for="projetPartie in getterFonctionLocale"
                            :key="'D' + projetPartie.id"
                          >
                            {{ projetPartie.libelle }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label semibold" for="chef_projet"
                      >Coût
                    </label>
                    <money
                      v-model="formData.cout"
                      name="budget"
                      class="form-control"
                      id="budget"
                      placeholder="Côut"
                    ></money>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fermer</v-btn>
                  <v-btn
                    :disabled="getterLoadingResource"
                    :loading="getterLoadingResource"
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
        v-model="getterLoadingResource"
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

      <!--DIALOGUE MODIFICATION--->

      <v-dialog max-width="600" v-model="dialogEdite" persistent>
        <template v-slot:default="dialogEdite">
          <v-card>
            <v-toolbar color="primary" dark>Modification</v-toolbar>

            <v-card-text>
              <br />
              <div class="form-group">
                <label class="form-label semibold" for="type"
                  >Type de resource</label
                >
                <select
                  id="type"
                  class="form-control"
                  v-model="edite.type_resource_id"
                >
                  <option value="">Selectionner le type de resource</option>
                  <option
                    :value="projetPartie.id"
                    v-for="projetPartie in getterTypeResource"
                    :key="'DF2R' + projetPartie.id"
                  >
                    {{ projetPartie.libelle }}
                  </option>
                </select>
              </div>

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
                <label class="form-label semibold" for="libelle"
                  >Nom et prenom ou désignation</label
                >
                <input
                  type="text"
                  v-model="edite.libelle"
                  name="libelle"
                  class="form-control"
                  id="libelle"
                  placeholder="Libelle"
                />
              </div>
              <div
                class="row"
                v-if="verifieTypeResource(edite.type_resource_id)"
              >
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label semibold" for="email">Email</label>
                    <input
                      type="text"
                      v-model="edite.email"
                      name="email"
                      class="form-control"
                      id="email"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label semibold" for="telephone"
                      >Télephone</label
                    >
                    <input
                      type="text"
                      v-model="edite.telephone"
                      name="telephone"
                      class="form-control"
                      id="telephone"
                      placeholder="Telephone"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-label semibold" for="fonction"
                      >Fonction locale</label
                    >
                    <select
                      id="fonction"
                      class="form-control"
                      v-model="edite.fonction"
                    >
                      <option value="">Selectionner la fonction locale</option>
                      <option
                        :value="projetPartie.id"
                        v-for="projetPartie in getterFonctionLocale"
                        :key="'D' + projetPartie.id"
                      >
                        {{ projetPartie.libelle }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label semibold" for="chef_projet"
                  >Coût
                </label>
                <money
                  v-model="edite.cout"
                  name="budget"
                  class="form-control"
                  id="budget"
                  placeholder="Côut"
                ></money>
              </div>
            </v-card-text>

            <v-card-actions class="justify-end">
              <v-btn text @click="dialogEdite.value = false">Fermer</v-btn>
              <v-btn
                :disabled="getterLoadingResource"
                :loading="getterLoadingResource"
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
      url_base: "",
      dialog: false,
      test: true,
      formData: {
        code: "",
        libelle_ressource: "",
        type_resource_id: "",
        autre_libelle: "",
        fonction: "",
        cout: "",
      },
      edite: "",

      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      dialogEdite: false,
      dialogDelete: false,
      headers: [
        { text: "Code", value: "code" },
        { text: "libelle_ressource", value: "libelle_ressource" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        code: "",
        libelle_ressource: "",
      },
      defaultItem: {
        code: "",
        libelle_ressource: "",
      },
    };
  },
  created() {
    this.url_base = process.env.VUE_APP_URL_BASE;
    this.getlisteuser();
  },
  computed: {
    ...mapGetters("Application", [
      "getterTypeResource",
      "getterLoadingResource",
      "getterResource",
      "getterErrorResource",
      "getterFonctionLocale",
      "getterListeUsers",
      "getterUsertest",
      // "getterUsers",
      // "getterLoadingUsers",
      //"getterErrorUsers",
    ]),

    ...mapGetters("Utilisateurs", [
      "getterUsers",
      "getterLoadingUsers",
      "getterErrorUsers",
    ]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    listeResourceDiffRH() {
      return this.getterTypeResource.filter((item) => item.code != "RH");
    },

    verifieTypeResource() {
      return (type_resource_id) => {
        if (type_resource_id == "") return false;
        let objet = this.getterTypeResource.find(
          (item) => item.id == type_resource_id
        );
        if (objet.code != "RH") return false;
        return true;
      };
    },
    fonctionLocale() {
      return (id) => {
        if (id == null) return null;

        let objet = this.getterFonctionLocale.find((item) => item.id == id);
        if (objet == undefined) return null;

        return objet.libelle_ressource;
      };
    },
    imageUser() {
      return (image) => {
        if (!image) return "default.png";
        return this.url_base + "/images/" + image;
      };
    },
    listeResource() {
      return (id) => {
        if (id == null) return [];
        let objet = this.getterResource.filter(
          (item) => item.type_resource_id == id
        );

        return objet;
      };
    },
    formatageSomme() {
      return (value) => {
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
    },
  },
  validations: {
    formData: {
      code: { required, min: minLength(2) },
      libelle_ressource: { required },
      type_resource_id: { required },
      autre_libelle: "",
      fonction: "",
      cout: "",
    },
  },
  methods: {
    ...mapActions("Application", [
      "ajouterResource",
      "supprimerResource",
      "modificationResource",
      "ajouterUser",
      "supprimerUser",
      "modificationUser",
      "getlisteuser",
    ]),
    gotoModale() {
      this.dialog = true;
    },
    enregistrement() {
      this.$v.formData.$touch();
      if (this.$v.formData.$error) {
        return;
      }

      if (this.verifieTypeResource(this.formData.type_resource_id)) {
        let objet = {
          ...this.formData,
          telephone: this.telephone,
          email: this.email,
        };
        this.ajouterUser(objet);
      } else {
        this.ajouterResource(this.formData);
      }

      if (this.getterErrorResource == false) {
        this.$v.formData.$reset();
        this.formData = {
          code: "",
          libelle_ressource: "",
          type_resource_id: "",
          autre_libelle: "",
          fonction: "",
          cout: "",
        };
      }
    },

    modification(item) {
      if (this.verifieTypeResource(this.edite.type_resource_id)) {
        this.modificationUser(item);
      } else {
        this.modificationResource(item);
      }
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

      if (this.verifieTypeResource(item.type_resource_id)) {
        this.supprimerUser(item.id);
      } else {
        this.supprimerResource(item.id);
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
