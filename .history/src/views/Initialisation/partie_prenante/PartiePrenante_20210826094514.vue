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
                    <h3>Parties Prenantes</h3>
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

          <v-card
            class="mx-auto"
            outlined
            v-for="item in getterPartiePrenanteProjet"
            :key="item.id"
            size="10"
          >
            <v-card-text>
              <table id="table-edit" class="table table-hover">
                <tr>
                  <td style=" background-color: #f7f7f7">Code</td>
                  <td style=" background-color: #f7f7f7">Désignation</td>
                  <td style=" background-color: #f7f7f7">Rôle</td>
                  <td style=" background-color: #f7f7f7">Interne</td>
                  <td style=" background-color: #f7f7f7">Télephone</td>
                  <td style=" background-color: #f7f7f7">Email</td>
                  <td style=" background-color: #f7f7f7">Adresse</td>
                </tr>

                <tbody>
                  <tr>
                    <td>{{item.code}}</td>
                    <td>{{item.designation}}</td>
                    <td>{{item.role}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.telephone}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.adresse}}</td>
                  </tr>
                </tbody>
              </table>

              <table id="table-edit" class="table table-hover">
                <tr>
                  <td style=" background-color: #f7f7f7;">Niveau de pouvoir</td>
                  <td style=" background-color: #f7f7f7">Niveau d'intérêt</td>
                  <td style=" background-color: #f7f7f7">Puissance pouvoir/ Intéret</td>
                  <td style=" background-color: #f7f7f7">Attitude</td>
                  <td style=" background-color: #f7f7f7">Pour/Contre</td>
                  <td style=" background-color: #f7f7f7">Position Actuelle</td>
                  <td style=" background-color: #f7f7f7">Position Future</td>
                </tr>

                <tbody>
                  <tr>
                    <td>{{item.pouvoir}}</td>
                    <td>{{item.interet}}</td>
                    <td>{{item.puissance}}</td>
                    <td style="background-color:#2e3599;color:#fff !important">{{item.attitude}}</td>
                    <td>{{item.pour_contre}}</td>
                    <td>{{positionPartiePrenante(item.position_actuelle_id)}}</td>
                    <td>{{positionPartiePrenante(item.position_future_id)}}</td>
                  </tr>
                </tbody>
              </table>
            </v-card-text>
            <v-card-actions>
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </v-card-actions>
          </v-card>

          <!-- <v-data-table
    :headers="headers"
    :items="getterPartiePrenanteProjet"
    sort-by="code"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
          </v-data-table>-->

          <!--DIALOGUE D'AJOUT--->
          <v-dialog max-width="900" v-model="dialog" persistent>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>Formulaire d'enregistrement</v-toolbar>
                <v-card-text>
                  <br />
                  <div class="row">
                    <div class="col-md-4">
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
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label class="form-label semibold" for="designation">Désignation</label>
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
                        >Veillez entrer le rôle</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label class="form-label semibold" for="role">Rôle</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.role.$error }"
                          v-model="formData.role"
                          name="role"
                          class="form-control"
                          id="role"
                          placeholder="Rôle"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.role.$error"
                        >Veillez entrer le rôle</div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="IE">Interne ou Externe</label>
                        <select id="IE" class="form-control" v-model="formData.status">
                          <option></option>
                          <option value="Interne">Interne</option>
                          <option value="Externe">Externe</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="telephone">Télephone</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.telephone.$error }"
                          v-model="formData.telephone"
                          name="telephone"
                          class="form-control"
                          id="telephone"
                          placeholder="telephone"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.telephone.$error"
                        >Veillez entrer le telephone</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="email">Email</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.email.$error }"
                          v-model="formData.email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="email"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.email.$error"
                        >Veillez entrer le email</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="email">Adresse</label>
                        <input
                          type="text"
                          :class="{ 'hasErroInpu': $v.formData.adresse.$error }"
                          v-model="formData.adresse"
                          name="adresse"
                          class="form-control"
                          id="adresse"
                          placeholder="adresse"
                        />
                        <div
                          style="color: red;"
                          class
                          v-if="$v.formData.adresse.$error"
                        >Veillez entrer l'adresse</div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="role">Niveau de pouvoir</label>
                        <v-rating></v-rating>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="role">Niveau d'intérêt</label>
                        <v-rating></v-rating>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="puissance">Pussance pouvoir/intérêt</label>
                        <input
                          type="text"
                          style="background-color:#2e3599;color:#fff !important"
                          disabled
                          v-model="formData.puissance"
                          name="puissance"
                          class="form-control"
                          id="puissance"
                          placeholder="puissance"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label class="form-label semibold" for="puissance">Attitude</label>
                        <input
                          type="text"
                          style="background-color:#2e3599;color:#fff !important"
                          disabled
                          v-model="formData.attitude"
                          name="puissance"
                          class="form-control"
                          id="puissance"
                          placeholder
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label class="form-label semibold" for="Pour/Contre">Pour/Contre</label>
                        <select
                          id="Pour/Contre"
                          class="form-control"
                          v-model="formData.pour_contre"
                        >
                          <option></option>
                          <option value="Pour">Pour</option>
                          <option value="Contre">Contre</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label class="form-label semibold" for="Pour/Contre">Position actuelle</label>
                        <select
                          id="Pour/Contre"
                          class="form-control"
                          v-model="formData.position_actuelle_id"
                        >
                          <option></option>
                          <option
                            :value="item.id"
                            v-for="item in getterPosition"
                            :key="item.id"
                          >{{item.libelle}}</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label class="form-label semibold" for="Pour/Contre">Position future</label>
                        <select
                          id="Pour/Contre"
                          class="form-control"
                          v-model="formData.position_future_id"
                        >
                          <option></option>
                          <option
                            :value="item.id"
                            v-for="item in getterPosition"
                            :key="'PS'+item.id"
                          >{{item.libelle}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fermer</v-btn>
                  <v-btn
                    :disabled="getterLoadingPartiePrenanteProjet"
                    :loading="getterLoadingPartiePrenanteProjet"
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
      <v-dialog v-model="getterLoadingPartiePrenanteProjet" persistent width="250" height="200">
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

      <v-dialog max-width="900" v-model="dialogEdite" persistent>
        <template v-slot:default="dialogEdite">
          <v-card>
            <v-toolbar color="primary" dark>Modification</v-toolbar>
            <v-card-text>
              <br />
              <div class="row">
                <div class="col-md-4">
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
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label semibold" for="designation">Désignation</label>
                    <input
                      type="text"
                      v-model="edite.designation"
                      name="designation"
                      class="form-control"
                      id="designation"
                      placeholder="designation"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label semibold" for="role">Rôle</label>
                    <input
                      type="text"
                      v-model="edite.role"
                      name="role"
                      class="form-control"
                      id="role"
                      placeholder="Role"
                    />
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="IE">Interne ou Externe</label>
                    <select id="IE" class="form-control" v-model="edite.status">
                      <option></option>
                      <option value="Interne">Interne</option>
                      <option value="Externe">Externe</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="telephone">Télephone</label>
                    <input
                      type="text"
                      v-model="edite.telephone"
                      name="telephone"
                      class="form-control"
                      id="telephone"
                      placeholder="telephone"
                    />
                  </div>
                </div>
                <div class="col-md-3">
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
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="email">Adresse</label>
                    <input
                      type="text"
                      v-model="edite.adresse"
                      name="adresse"
                      class="form-control"
                      id="adresse"
                      placeholder="adresse"
                    />
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="role">Niveau de pouvoir</label>
                    <v-rating></v-rating>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="role">Niveau d'intérêt</label>
                    <v-rating></v-rating>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="puissance">Pussance pouvoir/intérêt</label>
                    <input
                      type="text"
                      style="background-color:#2e3599;color:#fff !important"
                      disabled
                      v-model="edite.puissance"
                      name="puissance"
                      class="form-control"
                      id="puissance"
                      placeholder="puissance"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="form-label semibold" for="puissance">Attitude</label>
                    <input
                      type="text"
                      style="background-color:#2e3599;color:#fff !important"
                      disabled
                      v-model="edite.attitude"
                      name="puissance"
                      class="form-control"
                      id="puissance"
                      placeholder
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label semibold" for="Pour/Contre">Pour/Contre</label>
                    <select id="Pour/Contre" class="form-control" v-model="edite.pour_contre">
                      <option></option>
                      <option value="Pour">Pour</option>
                      <option value="Contre">Contre</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label semibold" for="Pour/Contre">Position actuelle</label>
                    <select
                      id="Pour/Contre"
                      class="form-control"
                      v-model="edite.position_actuelle_id"
                    >
                      <option></option>
                      <option
                        :value="item.id"
                        v-for="item in getterPosition"
                        :key="item.id"
                      >{{item.libelle}}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label semibold" for="Pour/Contre">Position future</label>
                    <select
                      id="Pour/Contre"
                      class="form-control"
                      v-model="edite.position_future_id"
                    >
                      <option></option>
                      <option
                        :value="item.id"
                        v-for="item in getterPosition"
                        :key="'PS'+item.id"
                      >{{item.libelle}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialogEdite.value = false">Fermer</v-btn>
              <v-btn
                :disabled="getterLoadingPartiePrenanteProjet"
                :loading="getterLoadingPartiePrenanteProjet"
                class="white--text"
                color="purple darken-2"
                @click="modification(edite)"
              >Modifier</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      {{calculePussancePouvoireInteret}}
      {{determineAttitude}}
      {{edite_calculePussancePouvoireInteret}}
      {{edite_determineAttitude}}
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
      rating: 0,
      formData: {
        code: "",
        designation: "",
        role: "",
        attitude: "",
        telephone: "",
        email: "",
        adresse: "",
        pouvoir: 0,
        interet: 0,
        puissance: 0,
        pour_contre: "",
        position_actuelle_id: "",
        position_future_id: "",
        status: "",
        code_attitude: ""
      },
      edite: "",
      items: ["Interne", "Externe"],
      items2: ["Pour", "Contre"],

      dialogEdite: false,
      dialogDelete: false,
      headers: [
        { text: "Code", value: "code" },
        { text: "Désignation", value: "designation" },
        { text: "Status", value: "status" },
        { text: "Rôle", value: "role" },

        { text: "Télephone", value: "telephone" },
        { text: "Email", value: "email" },
        { text: "Adresse", value: "adresse" },
        { text: "Pouvoir", value: "pouvoir" },
        { text: "Intérêt", value: "interet" },
        { text: "Puissance", value: "puissance" },
        { text: "Attitude", value: "attitude" },
        { text: "Pour/Contre", value: "pour_contre" },

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
    //edite_
    ...mapGetters("Application", [
      "getterPosition",
      "getterPartiePrenanteProjet",
      "getterLoadingPartiePrenanteProjet",
      "getterErrorPartiePrenanteProjet"
    ]),
    calculePussancePouvoireInteret() {
      let vm = this;
      vm.formData.puissance = vm.formData.pouvoir * vm.formData.interet;
      return null;
    },
    edite_calculePussancePouvoireInteret() {
      let vm = this;
      if (vm.edite) {
        console.log(vm.edite.puissance);
        vm.edite.puissance =
          parseFloat(vm.edite.pouvoir) * parseFloat(vm.edite.interet);
      }

      return null;
    },
    positionPartiePrenante() {
      return id => {
        if (id == null) return null;
        console.log(id);
        let objet = this.getterPosition.find(item => item.id == id);

        if (objet == undefined) return null;

        return objet.libelle;
      };
    },
    determineAttitude() {
      let vm = this;

      //Surveiller
      if (vm.formData.pouvoir == 2 && vm.formData.interet == 1) {
        vm.formData.attitude = "Surveiller";
        vm.formData.code_attitude = 1;
      }

      if (vm.formData.pouvoir == 2 && vm.formData.interet == 2) {
        vm.formData.attitude = "Surveiller";
        vm.formData.code_attitude = 1;
      }

      if (vm.formData.pouvoir == 1 && vm.formData.interet == 2) {
        vm.formData.attitude = "Surveiller";
        vm.formData.code_attitude = 1;
      }

      if (vm.formData.pouvoir == 1 && vm.formData.interet == 1) {
        vm.formData.attitude = "Surveiller";
        vm.formData.code_attitude = 1;
      }

      //Gerer avec Attention

      if (vm.formData.pouvoir == 4 && vm.formData.interet == 4) {
        vm.formData.attitude = "Gerer avec Attention";
        vm.formData.code_attitude = 2;
      }

      if (vm.formData.pouvoir == 4 && vm.formData.interet == 3) {
        vm.formData.attitude = "Gerer avec Attention";
        vm.formData.code_attitude = 2;
      }

      if (vm.formData.pouvoir == 3 && vm.formData.interet == 3) {
        vm.formData.attitude = "Gerer avec Attention";
        vm.formData.code_attitude = 2;
      }

      if (vm.formData.pouvoir == 3 && vm.formData.interet == 4) {
        vm.formData.attitude = "Gerer avec Attention";
        vm.formData.code_attitude = 2;
      }

      //Maintenir satisfait

      if (vm.formData.pouvoir == 4 && vm.formData.interet == 1) {
        vm.formData.attitude = "Maintenir satisfait";
        vm.formData.code_attitude = 3;
      }

      if (vm.formData.pouvoir == 3 && vm.formData.interet == 1) {
        vm.formData.attitude = "Maintenir satisfait";
        vm.formData.code_attitude = 3;
      }

      if (vm.formData.pouvoir == 4 && vm.formData.interet == 2) {
        vm.formData.attitude = "Maintenir satisfait";
        vm.formData.code_attitude = 3;
      }

      if (vm.formData.pouvoir == 3 && vm.formData.interet == 2) {
        vm.formData.attitude = "Maintenir satisfait";
        vm.formData.code_attitude = 3;
      }

      //maintenir informer

      if (vm.formData.pouvoir == 1 && vm.formData.interet == 3) {
        vm.formData.attitude = "Maintenir informer";
        vm.formData.code_attitude = 4;
      }

      if (vm.formData.pouvoir == 1 && vm.formData.interet == 4) {
        vm.formData.attitude = "Maintenir informer";
        vm.formData.code_attitude = 4;
      }

      if (vm.formData.pouvoir == 2 && vm.formData.interet == 3) {
        vm.formData.attitude = "Maintenir informer";
        vm.formData.code_attitude = 4;
      }

      if (vm.formData.pouvoir == 2 && vm.formData.interet == 4) {
        vm.formData.attitude = "Maintenir informer";
        vm.formData.code_attitude = 4;
      }

      return null;
    },

    edite_determineAttitude() {
      let vm = this;

      //Surveiller
      if (vm.edite.pouvoir == 2 && vm.edite.interet == 1) {
        vm.edite.attitude = "Surveiller";
        vm.edite.code_attitude = 1;
      }

      if (vm.edite.pouvoir == 2 && vm.edite.interet == 2) {
        vm.edite.attitude = "Surveiller";
        vm.edite.code_attitude = 1;
      }

      if (vm.edite.pouvoir == 1 && vm.edite.interet == 2) {
        vm.edite.attitude = "Surveiller";
        vm.edite.code_attitude = 1;
      }

      if (vm.edite.pouvoir == 1 && vm.edite.interet == 1) {
        vm.edite.attitude = "Surveiller";
        vm.edite.code_attitude = 1;
      }

      //Gerer avec Attention

      if (vm.edite.pouvoir == 4 && vm.edite.interet == 4) {
        vm.edite.attitude = "Gerer avec Attention";
        vm.edite.code_attitude = 2;
      }

      if (vm.edite.pouvoir == 4 && vm.edite.interet == 3) {
        vm.edite.attitude = "Gerer avec Attention";
        vm.edite.code_attitude = 2;
      }

      if (vm.edite.pouvoir == 3 && vm.edite.interet == 3) {
        vm.edite.attitude = "Gerer avec Attention";
        vm.edite.code_attitude = 2;
      }

      if (vm.edite.pouvoir == 3 && vm.edite.interet == 4) {
        vm.edite.attitude = "Gerer avec Attention";
        vm.edite.code_attitude = 2;
      }

      //Maintenir satisfait

      if (vm.edite.pouvoir == 4 && vm.edite.interet == 1) {
        vm.edite.attitude = "Maintenir satisfait";
        vm.edite.code_attitude = 3;
      }

      if (vm.edite.pouvoir == 3 && vm.edite.interet == 1) {
        vm.edite.attitude = "Maintenir satisfait";
        vm.edite.code_attitude = 3;
      }

      if (vm.edite.pouvoir == 4 && vm.edite.interet == 2) {
        vm.edite.attitude = "Maintenir satisfait";
        vm.edite.code_attitude = 3;
      }

      if (vm.edite.pouvoir == 3 && vm.edite.interet == 2) {
        vm.edite.attitude = "Maintenir satisfait";
        vm.edite.code_attitude = 3;
      }

      //maintenir informer

      if (vm.edite.pouvoir == 1 && vm.edite.interet == 3) {
        vm.edite.attitude = "Maintenir informer";
        vm.edite.code_attitude = 4;
      }

      if (vm.edite.pouvoir == 1 && vm.edite.interet == 4) {
        vm.edite.attitude = "Maintenir informer";
        vm.edite.code_attitude = 4;
      }

      if (vm.edite.pouvoir == 2 && vm.edite.interet == 3) {
        vm.edite.attitude = "Maintenir informer";
        vm.edite.code_attitude = 4;
      }

      if (vm.edite.pouvoir == 2 && vm.edite.interet == 4) {
        vm.edite.attitude = "Maintenir informer";
        vm.edite.code_attitude = 4;
      }

      return null;
    }
  },
  validations: {
    formData: {
      code: { required, min: minLength(2) },
      designation: { required },
      role: { required },
      attitude: { required },
      telephone: { required },
      email: { required },
      adresse: { required },
      pouvoir: { required },
      interet: { required },
      puissance: { required },
      pour_contre: { required },
      position_actuelle_id: "",
      position_future_id: "",
      status: "",
      code_attitude: ""
    }
  },
  methods: {
    ...mapActions("Application", [
      "ajouterPartiePrenante",
      "supprimerPartiePrenante",
      "modificationPartiePrenanteProjet"
    ]),
    gotoModale() {
      this.dialog = true;
    },
    enregistrement() {
      this.$v.formData.$touch();
      if (this.$v.formData.$error) {
        return;
      }

      this.ajouterPartiePrenante(this.formData);

      if (this.getterErrorPartiePrenanteProjet == false) {
        this.$v.formData.$reset();
        this.formData = {
          code: "",
          designation: "",
          role: "",
          attitude: "",
          telephone: "",
          email: "",
          adresse: "",
          pouvoir: 0,
          interet: 0,
          puissance: 0,
          pour_contre: "",
          position_actuelle_id: "",
          position_future_id: "",
          status: "",
          code_attitude: ""
        };
      }
    },

    modification(item) {
      this.modificationPartiePrenanteProjet(item);
    },
    editItem(item) {
      console.log();
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
      this.supprimerPartiePrenante(item.id);
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
