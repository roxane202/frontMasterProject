<template>
<v-app>
    <notifications/>
    <v-main>
        <div class="page-content">
	    <div class="container-fluid">
            <header class="page-content-header">
			<div class="container-fluid">
				<div class="tbl">
					<div class="tbl-row">
						<div class="tbl-cell">
							<h3>Fournisseurs</h3>
						</div>
						<div class="tbl-cell tbl-cell-action">
							<v-btn color="primary" @click="gotoModale()" elevation="5" medium > <v-icon color="red"></v-icon> Nouveau</v-btn>
						</div>
					</div>
				</div>
			</div>
		</header>


 <v-data-table
    :headers="headers"
    :items="getterFournisseurs"
    sort-by="code"
    class="elevation-1"
  >
    <template v-slot:[`item.actions`]="{ item }">
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
  </v-data-table>



<!--DIALOGUE D'AJOUT--->
  <v-dialog 
        max-width="600"
         v-model="dialog"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Formulaire d'enregistrement</v-toolbar>
            <v-card-text>
                <br>
                    <div class="form-group">
                <label class="form-label semibold" for="code">Code</label>
                                <input type="text" :class="{ 'hasErroInpu': $v.formData.code.$error }" v-model="formData.code" name="code" class="form-control" id="code" placeholder="Code">
                <div style="color: red;" class="" v-if="$v.formData.code.$error">
                                    Veillez entrer le code
                                </div>
                    </div>

                    <div class="form-group">
                            <label class="form-label semibold" for="sigle">Sigle</label>
                                <input type="text" :class="{ 'hasErroInpu': $v.formData.sigle.$error }" v-model="formData.sigle" name="sigle" class="form-control" id="sigle" placeholder="sigle">
                                <div style="color: red;" class="" v-if="$v.formData.sigle.$error">
                                    Veillez entrer le sigle
                                </div>
                        </div>

                             <div class="form-group">
                <label class="form-label semibold" for="code">Désignation</label>
                                <input type="text" :class="{ 'hasErroInpu': $v.formData.designation.$error }" v-model="formData.designation" name="designation" class="form-control" id="designation" placeholder="designation">
                <div style="color: red;" class="" v-if="$v.formData.designation.$error">
                                    Veillez entrer la désignation
                                </div>
                    </div>

                    <div class="form-group">
                            <label class="form-label semibold" for="libelle">Telephone</label>
                                <input type="text"  v-model="formData.telephone" name="telephone" class="form-control" id="telephone" placeholder="telephone">
                                
                        </div>
            	
							
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Fermer</v-btn>
              <v-btn
                :disabled="getterLoadingFournisseurs"
                :loading="getterLoadingFournisseurs"
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
              v-model="getterLoadingFournisseurs"
              persistent
              width="250"
              height="200"
            >
              <v-card
                color="#2e3599"
                dark
                class="text-center"
              >
                <v-card-text  class="white--text">
                  Requête en cours de traitement<br>
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

        <v-dialog
              v-model="dialogDelete"
              max-width="290"
            >
              <v-card >
                <v-card-title class="headline">
                Suppression !!
                </v-card-title>

                <v-card-text>
                  Voulez vous réellement effectuer cette action ?
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="green"
                    text
                    @click="dialogDelete = false"
                  >
                    Annuler
                  </v-btn>

                  <v-btn
                    color="red"
                    text
                    @click="deleteItemConfirm(edite)"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
        </v-dialog>


<!--DIALOGUE MODIFICATION--->


  <v-dialog
        max-width="600"
         v-model="dialogEdite"
      >
        <template v-slot:default="dialogEdite">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Modification</v-toolbar>
            <v-card-text>
                <br>
                        <div class="form-group">
                          <label class="form-label semibold" for="code">Code</label>
                          <input type="text"  v-model="edite.code" name="code" class="form-control" id="code" placeholder="Code">
                        </div>

                        <div class="form-group">
                                <label class="form-label semibold" for="sigle">Sigle</label>
                                <input type="text"  v-model="edite.sigle" name="sigle" class="form-control" id="sigle" placeholder="Sigle">
                                    
                        </div>

                         <div class="form-group">
                          <label class="form-label semibold" for="code">Désignation</label>
                          <input type="text"  v-model="edite.designation" name="code" class="form-control" id="designation" placeholder="Désignation">
                        </div>

                        <div class="form-group">
                                <label class="form-label semibold" for="telephone">Télephone</label>
                                <input type="text"  v-model="edite.telephone" name="telephone" class="form-control" id="telephone" placeholder="Télephone">
                                    
                        </div>
                        
							
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialogEdite.value = false"
              >Fermer</v-btn>
          <v-btn
            :disabled="getterLoadingFournisseurs"
            :loading="getterLoadingFournisseurs"
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
import { mapGetters, mapActions} from 'vuex'
    import { required, minLength } from "vuelidate/lib/validators";
    export default {
        name: "Devises",
        data() {
            return {
               dialog:false,
               test:true,
               formData:{
                   code:"",
                   sigle:"",
                   designation:"",
                   telephone:"",
               },
               edite:"",



     dialogEdite: false,
      dialogDelete: false,
      headers: [
        { text: 'Code', value: 'code' },
        { text: 'Sigle', value: 'sigle' },
         { text: 'Désignation', value: 'designation' },
         { text: 'Télephone', value: 'telephone' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        code: '',
        libelle: "",
      },
      defaultItem: {
       code: '',
        libelle: "",
      },



            }
        },
        created(){
 
        },
        computed:{
            ...mapGetters('Application', ['getterFournisseurs', 'getterLoadingFournisseurs',"getterErrorFournisseurs"]),
              formTitle () {
             return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
           },
        },
        validations: {
            formData: {
                   code:{ required, min: minLength(2)},
                   sigle:{ required, min: minLength(2)},
                   designation:{ required, min: minLength(2)},
                   telephone:"",
            }
        },
        methods:{
             ...mapActions('Application', ['ajouterFournisseur',"supprimerFournisseur","modificationFournisseur"]),
            gotoModale(){
               this.dialog=true 
            }
            ,
            enregistrement () {

                this.$v.formData.$touch();
                if(this.$v.formData.$error) {

                    return
                }
                
                
                this.ajouterFournisseur(this.formData)
                if(this.getterErrorFournisseurs==false){
                    this.$v.formData.$reset();
                  this.formData={
                          code:"",
                          sigle:"",
                          designation:"",
                          telephone:"",
                     }
                }
               

            },
              

modification(item){
this.modificationFournisseur(item)
},
      editItem (item) {
       this.edite=item
        this.dialogEdite = true
      },

      deleteItem (item) {
      this.edite=item
      console.log(this.edite)
      this.dialogDelete=true
      },

      deleteItemConfirm (item) {
         this.dialogDelete=false
        this.supprimerFournisseur(item.id)
      },

    

      
        },
        watch: {
      
     },
    }
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
    .hasErroInpu{
        border: 1px red solid;
    }
    .hasError label {
        color: red;
    }
</style>
