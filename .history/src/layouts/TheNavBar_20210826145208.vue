<template>
  <div>
    <nav class="side-menu side-menu-compact">
      <ul class="side-menu-list">
        <li class="brown" :class="{opened: active_el == 0 }">
          <a href="#" @click.prevent="afficheMenu(0)">
            <i class="font-icon font-icon-home"></i>
            <span class="lbl">ACCUEIL</span>
          </a>
        </li>
        <li class="green" :class="{opened: active_el == 5 }">
          <a href="#" @click.prevent="afficheMenu(5)">
            <i class="font-icon font-icon-cogwheel"></i>
            <span class="lbl">INITIALISATION DU PROJET</span>
          </a>
        </li>
        <li class="gold" :class="{opened: active_el == 1 }">
          <a href="#" @click.prevent="afficheMenu(1)">
            <i class="font-icon font-icon-event"></i>
            <span class="lbl">PLANIFICATION DU PROJET</span>
          </a>
        </li>
        <li class="blue" :class="{opened: active_el == 4 }">
          <a href="#" @click.prevent="afficheMenu(4)">
            <i class="font-icon font-icon-doc"></i>
            <span class="lbl">EXECUTION DU PROJET</span>
          </a>
        </li>
        <li class="purple" :class="{opened: active_el == 2 }">
          <a href="#" @click.prevent="afficheMenu(2)">
            <i class="font-icon font-icon-zigzag"></i>
            <span class="lbl">SUIVI ET MAITRISE</span>
          </a>
        </li>
        <li class="orange-red" :class="{opened: active_el == 3 }">
          <a href="#" @click.prevent="afficheMenu(3)">
            <i class="font-icon font-icon-help"></i>
            <span class="lbl">CLOTURE DU PROJET</span>
          </a>
        </li>
        <li class="grey" :class="{opened: active_el == 6 }">
          <a href="#" @click.prevent="afficheMenu(6)">
            <i class="font-icon font-icon-widget"></i>
            <span class="lbl">PLAN D'ACTIONS</span>
          </a>
        </li>
        <li class="blue-dirty">
          <a href="#">
            <i class="font-icon font-icon-users-group"></i>
            <span class="lbl">GESTION DES ACCESS</span>
          </a>
        </li>
        <li class="coral">
          <a href="#">
            <i class="font-icon font-icon-chart"></i>
            <span class="lbl">RAPPORTS ET ETAT</span>
          </a>
        </li>
      </ul>
    </nav>
    <!--.side-menu-->

    <NavAccueil v-if="active_el == 0"></NavAccueil>
    <TheNavPlanificationProjet v-if="active_el == 1"></TheNavPlanificationProjet>
    <TheNavSuivieMaitrise v-if="active_el == 2"></TheNavSuivieMaitrise>
    <TheNavClotureProject v-if="active_el == 3"></TheNavClotureProject>
    <TheNavExecutionProject v-if="active_el == 4"></TheNavExecutionProject>
    <TheNavInitialisationProject v-if="active_el == 5"></TheNavInitialisationProject>
    <TheNavPlanAction v-if="active_el == 6"></TheNavPlanAction>
  </div>
</template>
<script>
import TheNavClotureProject from "./TheNavClotureProject";
import TheNavExecutionProject from "./TheNavExecutionProject";
import TheNavInitialisationProject from "./TheNavInitialisationProject";
import TheNavPlanAction from "./TheNavPlanAction";
import TheNavPlanificationProjet from "./TheNavPlanificationProjet";

import TheNavSuivieMaitrise from "./TheNavSuivieMaitrise";
import NavAccueil from "./NavAccueil";

import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    TheNavSuivieMaitrise,
    NavAccueil,
    TheNavClotureProject,
    TheNavExecutionProject,
    TheNavInitialisationProject,
    TheNavPlanAction,
    TheNavPlanificationProjet
  },
  name: "TheNavBar",
  data() {
    return {};
  },
  created() {
    this.getTypeResource();
    this.getFonctionLocale();
    this.getPosition();
    this.getResource();
    this.getPoidsIndicateur();
    this.getAutrePartenaire();
    this.getNatureIndicateur();
    this.getBeneficiaire();
    this.getTypeMarche();
    this.getMethodePassation();
    this.getFournisseur();
    this.getDevise();
    this.getPartiePrenante();
    this.getProjet();
    this.getProjetPartiePrenante();
    this.getUser();
  },

  computed: {
    ...mapState("parametrageMenu", {
      active_el: state => state.active_el
    })
  },
  methods: {
    ...mapMutations("parametrageMenu", ["activate"]),
    ...mapActions("Application", [
      "getProjet",
      "getPartiePrenante",
      "getTypeResource",
      "getResource",
      "getPoidsIndicateur",
      "getAutrePartenaire",
      "getNatureIndicateur",
      "getBeneficiaire",
      "getTypeMarche",
      "getMethodePassation",
      "getFournisseur",
      "getDevise",
      "getFonctionLocale",
      "getPosition",
      "getProjetPartiePrenante",
      "getUser"
    ]),
    afficheMenu(value) {
      this.activate(value);
    }
  }
};
</script>

<style scoped>
</style>
