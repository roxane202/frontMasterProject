<template>
  <div>
    <nav class="side-menu-addl">
      <header class="side-menu-addl-title">
        <div class="caption">Initialisation du projet</div>
        <i class="font-icon font-icon-burger"></i>
      </header>
      <ul class="side-menu-addl-list">
        <li class="header" style="background: orange;">
          <a
            href="#"
            :class="{option_choisie: menu_active == 10 }"
            @click.prevent="activedOptionMenu(10,'Project')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Création du projet</span>
            </span>
          </a>
        </li>
        <li class="divider"></li>
        <li class="header" style="background: orange;">
          <a
            href="#"
            :class="{option_choisie: menu_active == 11 }"
            @click.prevent="activedOptionMenu(11,'PartiePrenante')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Parties prenantes du projet</span>
            </span>
          </a>
        </li>
        <li class="divider"></li>
        <li class="header" style="background: orange;">
          <a href="#">
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Paramétrage</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 12 }"
            @click.prevent="activedOptionMenu(12,'TypeResource')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Type de résources</span>
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 22 }"
            @click.prevent="activedOptionMenu(22,'FonctionLocale')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Fonction locale</span>
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 13 }"
            @click.prevent="activedOptionMenu(13,'Resources')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Résources</span>
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 14 }"
            @click.prevent="activedOptionMenu(14,'PoidIndicateur')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Poids des indicateurs</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 15 }"
            @click.prevent="activedOptionMenu(15,'AutrePartenaire')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Autre Partenaire</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 16 }"
            @click.prevent="activedOptionMenu(16,'NatureIndicateur')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Natures d'indicateur</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 17 }"
            @click.prevent="activedOptionMenu(17,'Beneficiaires')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Béneficiaires</span>
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 18 }"
            @click.prevent="activedOptionMenu(18,'TypeMarche')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Type Marché</span>
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 19 }"
            @click.prevent="activedOptionMenu(19,'MethodePassationMarche')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Méthode de passation de marché</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 20 }"
            @click.prevent="activedOptionMenu(20,'Fournisseur')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Fournisseurs</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 21 }"
            @click.prevent="activedOptionMenu(21,'Devises')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Devise</span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            :class="{option_choisie: menu_active == 23 }"
            @click.prevent="activedOptionMenu(23,'Position')"
          >
            <span class="tbl-row">
              <span class="tbl-cell tbl-cell-caption">Position</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
    <!--.side-menu-addl-->
  </div>
</template>
<script>
export default {
  props: {},
  name: "TheNavBar",
  data() {
    return {
      menu_active: ""
    };
  },
  components: {},
  computed: {},
  methods: {
    activedOptionMenu(value, route_name) {
      this.menu_active = value;
      this.$router.push({
        name: route_name
      });
    }
  }
};
</script>

<style scoped>
.option_choisie {
  background: #2e3599 !important;
  color: #fff !important;
}
</style>
