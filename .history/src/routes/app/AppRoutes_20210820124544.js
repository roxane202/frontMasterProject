import Home from '../../views/home/Home'
import AutrePartenaire from "../../views/Initialisation/parametre/AutrePartenaire"
import Beneficiaires from "../../views/Initialisation/parametre/Beneficiaires"
import Devises from "../../views/Initialisation/parametre/Devises"
import Fournisseur from "../../views/Initialisation/parametre/Fournisseur"
import MethodePassationMarche from "../../views/Initialisation/parametre/MethodePassationMarche"
import NatureIndicateur from "../../views/Initialisation/parametre/NatureIndicateur"
import PoidIndicateur from "../../views/Initialisation/parametre/PoidIndicateur"
import Resources from "../../views/Initialisation/parametre/Resources"
import TypeMarche from "../../views/Initialisation/parametre/TypeMarche"
import TypeResource from "../../views/Initialisation/parametre/TypeResource"

import FonctionLocale from "../../views/Initialisation/parametre/FonctionLocale"
import Position from "../../views/Initialisation/parametre/Position"

import PartiePrenante from "../../views/Initialisation/partie_prenante/PartiePrenante"
import Project from "../../views/Initialisation/project/Project"
//import NotFound from "../../views/NotFound"
import store from '../../store/index'

function guardMyroute(to, from, next)
{
  var isAuthenticated= false;
//this is just an example. You will have to find a better or
// centralised way to handle you localstorage data handling
  if(store.state.Utilisateurs.isLoggedIn)
    isAuthenticated = true;
  else
    isAuthenticated= false;
  if(isAuthenticated)
  {
    next(); // allow to enter route
  }
  else
  {
    next('/connexion'); // go to '/login';
  }
}

const AuthRoutes = [
 /* {
     path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {layout: "no-sidebar"} 
    },*/
    {
        path: '/accueil',
        name:"Home",
        beforeEnter : guardMyroute,
        component: Home
     },

     {
      path: '/autre_partenaire',
      name:"AutrePartenaire",
      beforeEnter : guardMyroute,
      component: AutrePartenaire
     },

      {
        path: '/beneficiaire',
        name:"Beneficiaires",
        beforeEnter : guardMyroute,
        component: Beneficiaires
      },


    {
      path: '/devise',
      name:"Devises",
      beforeEnter : guardMyroute,
      component: Devises
    },

    {
      path: '/methode_passation_marche',
      name:"MethodePassationMarche",
      beforeEnter : guardMyroute,
      component: MethodePassationMarche
    },
    {
      path: '/fournisseur',
      name:"Fournisseur",
      beforeEnter : guardMyroute,
      component: Fournisseur
    },
    {
      path: '/nature_indicateur',
      name:"NatureIndicateur",
      beforeEnter : guardMyroute,
      component: NatureIndicateur
    },
    {
      path: '/poids_indicateur',
      name:"PoidIndicateur",
      beforeEnter : guardMyroute,
      component: PoidIndicateur
    },
    {
      path: '/resources',
      name:"Resources",
      beforeEnter : guardMyroute,
      component: Resources
     },
     ,
    {
      path: '/type_marche',
      name:"TypeMarche",
      beforeEnter : guardMyroute,
      component: TypeMarche
     },

     {
      path: '/type_resource',
      name:"TypeResource",
      beforeEnter : guardMyroute,
      component: TypeResource
     },

     {
      path: '/partie_prenante',
      name:"PartiePrenante",
      beforeEnter : guardMyroute,
      component: PartiePrenante
     },

     {
      path: '/projet',
      name:"Project",
      beforeEnter : guardMyroute,
      component: Project
     },
     ,

     {
      path: '/fonction_locale',
      name:"FonctionLocale",
      beforeEnter : guardMyroute,
      component: FonctionLocale
     },
     
     {
      path: '/position',
      name:"Position",
      beforeEnter : guardMyroute,
      component: Position
     },
        
]

export default AuthRoutes;
