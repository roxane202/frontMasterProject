import apiGuest from "../../../request/apiProjet";

/**
 *
 * ACTION PROJET
 */
export function getProjet({ commit }) {
  commit("SET_LOADING_PROJET", true);
  apiGuest
    .get("/projet")
    .then((response) => {
      commit("GET_PROJET", response.data);
      commit("SET_LOADING_PROJET", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET", false);
    });
}

export function ajouterProjet({ commit }, formData) {
  commit("SET_LOADING_PROJET", true);
  apiGuest
    .post("/projet", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_PROJET", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });
        commit("SET_LOADING_PROJET", false);
        commit("SET_ERROR_PROJET", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET", false);
      commit("SET_ERROR_PROJET", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          ù2title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerProjet({ commit }, id) {
  commit("SET_LOADING_PROJET", true);
  commit("SUPPRIMER_PROJET", id);
  apiGuest
    .delete("/projet/" + id)
    .then(() => {
      commit("SET_LOADING_PROJET", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationProjet({ commit }, formData) {
  commit("SET_LOADING_PROJET", true);
  apiGuest
    .put("/projet", formData)
    .then((response) => {
      commit("MODIFIER_PROJET", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_PROJET", false);
      commit("SET_ERROR_PROJET", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET", false);
      commit("SET_ERROR_PROJET", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION PARTIE PRENANTE DU PROJET
 */

export function getPartiePrenante({ commit }) {
  commit("SET_LOADING_PARTIE_PRENANTE_PROJET", true);
  apiGuest
    .get("/partie_prenante")
    .then((response) => {
      commit("GET_PARTIE_PRENANTE_PROJET", response.data);
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
    });
}

export function ajouterPartiePrenante({ commit }, formData) {
  commit("SET_LOADING_PARTIE_PRENANTE_PROJET", true);

  apiGuest
    .post("/partie_prenante", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_PARTIE_PRENANTE_PROJET", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
        commit("SET_ERROR_PARTIE_PRENANTE_PROJET", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
      commit("SET_ERROR_PARTIE_PRENANTE_PROJET", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerPartiePrenante({ commit }, id) {
  commit("SET_LOADING_PARTIE_PRENANTE_PROJET", true);
  commit("SUPPRIMER_PARTIE_PRENANTE_PROJET", id);
  apiGuest
    .delete("/partie_prenante/" + id)
    .then(() => {
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationPartiePrenanteProjet({ commit }, formData) {
  commit("SET_LOADING_PARTIE_PRENANTE_PROJET", true);
  apiGuest
    .put("/partie_prenante", formData)
    .then((response) => {
      commit("MODIFIER_PARTIE_PRENANTE_PROJET", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
      commit("SET_ERROR_PARTIE_PRENANTE_PROJET", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PARTIE_PRENANTE_PROJET", false);
      commit("SET_ERROR_PARTIE_PRENANTE_PROJET", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * Action type resource
 */

export function getTypeResource({ commit }) {
  commit("SET_LOADING_TYPE_RESOURCE", true);
  apiGuest
    .get("/type_ressource")
    .then((response) => {
      commit("GET_TYPE_RESOURCE", response.data);
      commit("SET_LOADING_TYPE_RESOURCE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_RESOURCE", false);
    });
}

export function ajouterTypeResource({ commit }, formData) {
  commit("SET_LOADING_TYPE_RESOURCE", true);

  apiGuest
    .post("/type_ressource", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_RESOURCE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_TYPE_RESOURCE", false);
        commit("SET_ERROR_TYPE_RESOURCE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_RESOURCE", false);
      commit("SET_ERROR_TYPE_RESOURCE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerTypeResource({ commit }, id) {
  commit("SET_LOADING_TYPE_RESOURCE", true);
  commit("SUPPRIMER_TYPE_RESOURCE", id);
  apiGuest
    .delete("/type_ressource/" + id)
    .then(() => {
      commit("SET_LOADING_TYPE_RESOURCE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_RESOURCE", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationTypeResource({ commit }, formData) {
  commit("SET_LOADING_TYPE_RESOURCE", true);
  apiGuest
    .put("/type_ressource", formData)
    .then((response) => {
      commit("MODIFIER_TYPE_RESOURCE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_TYPE_RESOURCE", false);
      commit("SET_ERROR_TYPE_RESOURCE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_RESOURCE", false);
      commit("SET_ERROR_TYPE_RESOURCE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION RESSOURCE
 */

export function getResource({ commit }) {
  commit("SET_LOADING_RESOURCE", true);
  apiGuest
    .get("/ressource")
    .then((response) => {
      commit("GET_RESOURCE", response.data);
      commit("SET_LOADING_RESOURCE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);
    });
}

export function ajouterResource({ commit }, formData) {
  commit("SET_LOADING_RESOURCE", true);

  apiGuest
    .post("/ressource", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_RESOURCE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_RESOURCE", false);
        commit("SET_ERROR_RESOURCE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);
      commit("SET_ERROR_RESOURCE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerResource({ commit }, id) {
  commit("SET_LOADING_RESOURCE", true);
  commit("SUPPRIMER_RESOURCE", id);
  apiGuest.delete("/ressource/" + id).then(() => {
    this.$app.$notify({
      title: "success ",
      text: "Suppression effectuer !",
      type: "success",
    });
  });

  commit("SET_LOADING_POIDS_INDICATEUR", true);
  commit("SUPPRIMER_POIDS_INDICATEUR", id);
  apiGuest
    .delete("/poids_indicateur/" + id)
    .then(() => {
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationResource({ commit }, formData) {
  commit("SET_LOADING_RESOURCE", true);
  apiGuest
    .put("/ressource", formData)
    .then((response) => {
      commit("MODIFIER_RESOURCE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_RESOURCE", false);
      commit("SET_ERROR_RESOURCE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);
      commit("SET_ERROR_RESOURCE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION POIDS INDICATEUR
 */

export function getPoidsIndicateur({ commit }) {
  commit("SET_LOADING_POIDS_INDICATEUR", true);
  apiGuest
    .get("/poids_indicateur")
    .then((response) => {
      commit("GET_POIDS_INDICATEUR", response.data);
      commit("SET_LOADING_POIDS_INDICATEUR", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POIDS_INDICATEUR", false);
    });
}

export function ajouterPoidsIndicateurs({ commit }, formData) {
  commit("SET_LOADING_POIDS_INDICATEUR", true);

  apiGuest
    .post("/poids_indicateur", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_POIDS_INDICATEUR", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_POIDS_INDICATEUR", false);
        commit("SET_ERROR_POIDS_INDICATEUR", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      commit("SET_ERROR_POIDS_INDICATEUR", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerPoidsIndicateur({ commit }, id) {
  commit("SET_LOADING_POIDS_INDICATEUR", true);
  commit("SUPPRIMER_POIDS_INDICATEUR", id);
  apiGuest
    .delete("/poids_indicateur/" + id)
    .then(() => {
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationPoidsIndicateur({ commit }, formData) {
  commit("SET_LOADING_POIDS_INDICATEUR", true);
  apiGuest
    .put("/poids_indicateur", formData)
    .then((response) => {
      commit("MODIFIER_POIDS_INDICATEUR", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      commit("SET_ERROR_POIDS_INDICATEUR", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POIDS_INDICATEUR", false);
      commit("SET_ERROR_POIDS_INDICATEUR", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION AUTRE PARTENAIRE
 */

export function getAutrePartenaire({ commit }) {
  commit("SET_LOADING_AUTRE_PARTENAIRE", true);
  apiGuest
    .get("/autre_partenaire")
    .then((response) => {
      commit("GET_AUTRE_PARTENAIRE", response.data);
      commit("SET_LOADING_AUTRE_PARTENAIRE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_AUTRE_PARTENAIRE", false);
    });
}

export function ajouterAutrePartenaire({ commit }, formData) {
  commit("SET_LOADING_AUTRE_PARTENAIRE", true);

  apiGuest
    .post("/autre_partenaire", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_AUTRE_PARTENAIRE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_AUTRE_PARTENAIRE", false);
        commit("SET_ERROR_AUTRE_PARTENAIRE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_AUTRE_PARTENAIRE", false);
      commit("SET_ERROR_AUTRE_PARTENAIRE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerAutrePartenaire({ commit }, id) {
  commit("SUPPRIMER_AUTRE_PARTENAIRE", true);
  commit("SUPPRIMER_AUTRE_PARTENAIRE", id);
  apiGuest
    .delete("/autre_partenaire/" + id)
    .then(() => {
      commit("SUPPRIMER_AUTRE_PARTENAIRE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SUPPRIMER_AUTRE_PARTENAIRE", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationAutrePartenaire({ commit }, formData) {
  commit("SET_LOADING_AUTRE_PARTENAIRE", true);
  apiGuest
    .put("/autre_partenaire", formData)
    .then((response) => {
      commit("MODIFIER_AUTRE_PARTENAIRE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_AUTRE_PARTENAIRE", false);
      commit("SET_ERROR_AUTRE_PARTENAIRE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_AUTRE_PARTENAIRE", false);
      commit("SET_ERROR_AUTRE_PARTENAIRE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION NATURE D'INDICATEUR
 */

export function getNatureIndicateur({ commit }) {
  commit("SET_LOADING_NATURE_INDICATEUR", true);
  apiGuest
    .get("/nature_indicateur")
    .then((response) => {
      commit("GET_NATURE_INDICATEUR", response.data);
      commit("SET_LOADING_NATURE_INDICATEUR", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_NATURE_INDICATEUR", false);
    });
}

export function ajouterNatureIndicateur({ commit }, formData) {
  commit("SET_LOADING_NATURE_INDICATEUR", true);

  apiGuest
    .post("/nature_indicateur", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_NATURE_INDICATEUR", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_NATURE_INDICATEUR", false);
        commit("SET_ERROR_NATURE_INDICATEUR", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_NATURE_INDICATEUR", false);
      commit("SET_ERROR_NATURE_INDICATEUR", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerNatureIndicateur({ commit }, id) {
  commit("SET_LOADING_NATURE_INDICATEUR", true);
  commit("SUPPRIMER_NATURE_INDICATEUR", id);
  apiGuest
    .delete("/nature_indicateur/" + id)
    .then(() => {
      commit("SET_LOADING_NATURE_INDICATEUR", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_NATURE_INDICATEUR", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationNatureIndicateur({ commit }, formData) {
  commit("SET_LOADING_NATURE_INDICATEUR", true);
  apiGuest
    .put("/nature_indicateur", formData)
    .then((response) => {
      commit("MODIFIER_NATURE_INDICATEUR", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_NATURE_INDICATEUR", false);
      commit("SET_ERROR_NATURE_INDICATEUR", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_NATURE_INDICATEUR", false);
      commit("SET_ERROR_NATURE_INDICATEUR", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION BENEFICIAIRE
 */

export function getBeneficiaire({ commit }) {
  commit("SET_LOADING_BENEFICIAIRE", true);
  apiGuest
    .get("/beneficiaire")
    .then((response) => {
      commit("GET_BENEFICIAIRE", response.data);
      commit("SET_LOADING_BENEFICIAIRE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_BENEFICIAIRE", false);
    });
}

export function ajouterBeneficiaire({ commit }, formData) {
  commit("SET_LOADING_BENEFICIAIRE", true);

  apiGuest
    .post("/beneficiaire", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_BENEFICIAIRE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_BENEFICIAIRE", false);
        commit("SET_ERROR_BENEFICIAIRE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_BENEFICIAIRE", false);
      commit("SET_ERROR_BENEFICIAIRE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerBeneficiaire({ commit }, id) {
  commit("SET_LOADING_BENEFICIAIRE", true);
  commit("SUPPRIMER_BENEFICIAIRE", id);
  apiGuest
    .delete("/beneficiaire/" + id)
    .then(() => {
      commit("SET_LOADING_BENEFICIAIRE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_BENEFICIAIRE", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationBeneficiaire({ commit }, formData) {
  commit("SET_LOADING_BENEFICIAIRE", true);
  apiGuest
    .put("/beneficiaire", formData)
    .then((response) => {
      commit("MODIFIER_BENEFICIAIRE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_BENEFICIAIRE", false);
      commit("SET_ERROR_BENEFICIAIRE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_BENEFICIAIRE", false);
      commit("SET_ERROR_BENEFICIAIRE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION TYPE MARCHE
 */

export function getTypeMarche({ commit }) {
  commit("SET_LOADING_TYPE_MARCHE", true);
  apiGuest
    .get("/type_marche")
    .then((response) => {
      commit("GET_TYPE_MARCHE", response.data);
      commit("SET_LOADING_TYPE_MARCHE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_MARCHE", false);
    });
}

export function ajouterTypeMarche({ commit }, formData) {
  commit("SET_LOADING_TYPE_MARCHE", true);

  apiGuest
    .post("/type_marche", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_MARCHE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_TYPE_MARCHE", false);
        commit("SET_ERROR_TYPE_MARCHE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_MARCHE", false);
      commit("SET_ERROR_TYPE_MARCHE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerTypeMarche({ commit }, id) {
  commit("SET_LOADING_TYPE_MARCHE", true);
  commit("SUPPRIMER_TYPE_MARCHE", id);
  apiGuest
    .delete("/type_marche/" + id)
    .then(() => {
      commit("SET_LOADING_TYPE_MARCHE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_MARCHE", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationTypeMarche({ commit }, formData) {
  commit("SET_LOADING_TYPE_MARCHE", true);
  apiGuest
    .put("/type_marche", formData)
    .then((response) => {
      commit("MODIFIER_TYPE_MARCHE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_TYPE_MARCHE", false);
      commit("SET_ERROR_TYPE_MARCHE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_TYPE_MARCHE", false);
      commit("SET_ERROR_TYPE_MARCHE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * Action Mode de passation
 */

export function getMethodePassation({ commit }) {
  commit("SET_LOADING_METHODE_PASSATION_MARCHE", true);
  apiGuest
    .get("/mode_passation")
    .then((response) => {
      commit("GET_METHODE_PASSATION_MARCHE", response.data);
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
    });
}

export function ajouterMethodePassation({ commit }, formData) {
  commit("SET_LOADING_METHODE_PASSATION_MARCHE", true);

  apiGuest
    .post("/mode_passation", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_METHODE_PASSATION_MARCHE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
        commit("SET_ERROR_METHODE_PASSATION_MARCHE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
      commit("SET_ERROR_METHODE_PASSATION_MARCHE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerMethodePassation({ commit }, id) {
  commit("SET_LOADING_METHODE_PASSATION_MARCHE", true);
  commit("SUPPRIMER_METHODE_PASSATION_MARCHE", id);
  apiGuest
    .delete("/mode_passation/" + id)
    .then(() => {
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationMethodePassation({ commit }, formData) {
  commit("SET_LOADING_METHODE_PASSATION_MARCHE", true);
  apiGuest
    .put("/mode_passation", formData)
    .then((response) => {
      commit("MODIFIER_METHODE_PASSATION_MARCHE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_METHODE_PASSATION_MARCHE", false);
      commit("SET_ERROR_METHODE_PASSATION_MARCHE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION FOURNISSEUR
 */

export function getFournisseur({ commit }) {
  commit("SET_LOADING_FOURNISSEUR", true);
  apiGuest
    .get("/fournisseur")
    .then((response) => {
      commit("GET_FOURNISSEUR", response.data);
      commit("SET_LOADING_FOURNISSEUR", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FOURNISSEUR", false);
    });
}

export function ajouterFournisseur({ commit }, formData) {
  commit("SET_LOADING_FOURNISSEUR", true);

  apiGuest
    .post("/fournisseur", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_FOURNISSEUR", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_FOURNISSEUR", false);
        commit("SET_ERROR_FOURNISSEUR", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FOURNISSEUR", false);
      commit("SET_ERROR_FOURNISSEUR", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerFournisseur({ commit }, id) {
  commit("SET_LOADING_FOURNISSEUR", true);
  commit("SUPPRIMER_FOURNISSEUR", id);
  apiGuest
    .delete("/fournisseur/" + id)
    .then(() => {
      commit("SET_LOADING_FOURNISSEUR", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FOURNISSEUR", false);
      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationFournisseur({ commit }, formData) {
  commit("SET_LOADING_FOURNISSEUR", true);
  apiGuest
    .put("/fournisseur", formData)
    .then((response) => {
      commit("MODIFIER_FOURNISSEUR", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_FOURNISSEUR", false);
      commit("SET_ERROR_FOURNISSEUR", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FOURNISSEUR", false);
      commit("SET_ERROR_FOURNISSEUR", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION DEVISE
 */

export function getDevise({ commit }) {
  commit("SET_LOADING_DEVISE", true);
  apiGuest
    .get("/devise")
    .then((response) => {
      commit("GET_DEVISE", response.data);
      commit("SET_LOADING_DEVISE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_DEVISE", false);
    });
}

export function ajouterDevise({ commit }, formData) {
  commit("SET_LOADING_DEVISE", true);

  apiGuest
    .post("/devise", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_DEVISE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_DEVISE", false);
        commit("SET_ERROR_DEVISE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_DEVISE", false);
      commit("SET_ERROR_DEVISE", true);

      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      }

      if (error.response.status === 500) {
        this.$app.$notify({
          title: "error",
          text:
            "Une erreur c'est produite lors de l'enregistrement veillez verifie",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerDevise({ commit }, id) {
  commit("SET_LOADING_DEVISE", true);
  commit("SUPPRIMER_DEVISE", id);
  apiGuest
    .delete("/devise/" + id)
    .then(() => {
      commit("SET_LOADING_DEVISE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_DEVISE", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationDevise({ commit }, formData) {
  commit("SET_LOADING_DEVISE", true);
  apiGuest
    .put("/devise", formData)
    .then((response) => {
      commit("MODIFIER_DEVISE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_DEVISE", false);
      commit("SET_ERROR_DEVISE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_DEVISE", false);
      commit("SET_ERROR_DEVISE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * Action fonction locale
 */

export function getFonctionLocale({ commit }) {
  commit("SET_LOADING_FONCTION_LOCALE", true);
  apiGuest
    .get("/fonction_locale")
    .then((response) => {
      commit("GET_FONCTION_LOCALE", response.data);
      commit("SET_LOADING_FONCTION_LOCALE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FONCTION_LOCALE", false);
    });
}

export function ajouterFonctionLocale({ commit }, formData) {
  commit("SET_LOADING_FONCTION_LOCALE", true);

  apiGuest
    .post("/fonction_locale", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_FONCTION_LOCALE", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_FONCTION_LOCALE", false);
        commit("SET_ERROR_FONCTION_LOCALE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FONCTION_LOCALE", false);
      commit("SET_ERROR_FONCTION_LOCALE", true);

      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      }

      if (error.response.status === 500) {
        this.$app.$notify({
          title: "error",
          text:
            "Une erreur c'est produite lors de l'enregistrement veillez verifie",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerFonctionLocale({ commit }, id) {
  commit("SET_LOADING_FONCTION_LOCALE", true);
  commit("SUPPRIMER_FONCTION_LOCALE", id);
  apiGuest
    .delete("/fonction_locale/" + id)
    .then(() => {
      commit("SET_LOADING_FONCTION_LOCALE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FONCTION_LOCALE", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationFonctionLocale({ commit }, formData) {
  commit("SET_LOADING_FONCTION_LOCALE", true);
  apiGuest
    .put("/fonction_locale", formData)
    .then((response) => {
      commit("MODIFIER_FONCTION_LOCALE", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_FONCTION_LOCALE", false);
      commit("SET_ERROR_FONCTION_LOCALE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_FONCTION_LOCALE", false);
      commit("SET_ERROR_FONCTION_LOCALE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION POSITION
 */

export function getPosition({ commit }) {
  commit("SET_LOADING_POSITION", true);
  apiGuest
    .get("/position")
    .then((response) => {
      commit("GET_POSITION", response.data);
      commit("SET_LOADING_POSITION", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POSITION", false);
    });
}

export function ajouterPosition({ commit }, formData) {
  commit("SET_LOADING_POSITION", true);

  apiGuest
    .post("/position", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_POSITION", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_POSITION", false);
        commit("SET_ERROR_POSITION", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POSITION", false);
      commit("SET_ERROR_POSITION", true);

      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      }

      if (error.response.status === 500) {
        this.$app.$notify({
          title: "error",
          text:
            "Une erreur c'est produite lors de l'enregistrement veillez verifie",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerPosition({ commit }, id) {
  commit("SET_LOADING_POSITION", true);
  commit("SUPPRIMER_POSITION", id);
  apiGuest
    .delete("/position/" + id)
    .then(() => {
      commit("SET_LOADING_POSITION", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POSITION", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationPosition({ commit }, formData) {
  commit("SET_LOADING_POSITION", true);
  apiGuest
    .put("/position", formData)
    .then((response) => {
      commit("MODIFIER_POSITION", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_POSITION", false);
      commit("SET_ERROR_POSITION", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_POSITION", false);
      commit("SET_ERROR_POSITION", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * ACTION PROJET PARTIE PRENANTE
 */

export function getProjetPartiePrenante({ commit }) {
  commit("SET_LOADING_PROJET_PARTIE_PRENANTES", true);
  apiGuest
    .get("/projet_partie_prenantes")
    .then((response) => {
      commit("GET_PROJET_PARTIE_PRENANTES", response.data);
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
    });
}

export function ajouterProjetPartiePrenante({ commit }, formData) {
  commit("SET_LOADING_PROJET_PARTIE_PRENANTES", true);

  apiGuest
    .post("/projet_partie_prenantes", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_PROJET_PARTIE_PRENANTES", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
        commit("SET_ERROR_PROJET_PARTIE_PRENANTES", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
      commit("SET_ERROR_PROJET_PARTIE_PRENANTES", true);

      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      }

      if (error.response.status === 500) {
        this.$app.$notify({
          title: "error",
          text:
            "Une erreur c'est produite lors de l'enregistrement veillez verifie",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerProjetPartiePrenante({ commit }, id) {
  commit("SET_LOADING_PROJET_PARTIE_PRENANTES", true);
  commit("SUPPRIMER_PROJET_PARTIE_PRENANTES", id);
  apiGuest
    .delete("/projet_partie_prenantes/" + id)
    .then(() => {
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationProjetPartiePrenante({ commit }, formData) {
  commit("SET_LOADING_PROJET_PARTIE_PRENANTES", true);
  apiGuest
    .put("/projet_partie_prenantes", formData)
    .then((response) => {
      commit("MODIFIER_PROJET_PARTIE_PRENANTES", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
      commit("SET_ERROR_PROJET_PARTIE_PRENANTES", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_PROJET_PARTIE_PRENANTES", false);
      commit("SET_ERROR_PROJET_PARTIE_PRENANTES", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

/**
 * USER ACTION
 */

export function getUser({ commit }) {
  commit("SET_LOADING_RESOURCE", true);
  apiGuest
    .get("/users")
    .then((response) => {
      commit("GET_USER", response.data);
      commit("SET_LOADING_RESOURCE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);
    });
}

export function ajouterUser({ commit }, formData) {
  commit("SET_LOADING_RESOURCE", true);

  apiGuest
    .post("/users", formData)
    .then((response) => {
      if (response.status == 201) {
        commit("AJOUTER_USER", response.data);

        this.$app.$notify({
          title: "success ",
          text: "Enregistrement effectué !",
          type: "success",
        });

        commit("SET_LOADING_RESOURCE", false);
        commit("SET_ERROR_RESOURCE", false);
      }
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);
      commit("SET_ERROR_RESOURCE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}

export function supprimerUser({ commit }, id) {
  commit("SET_LOADING_RESOURCE", true);
  commit("SUPPRIMER_USER", id);
  apiGuest
    .delete("/users/" + id)
    .then(() => {
      commit("SET_LOADING_RESOURCE", false);
      this.$app.$notify({
        title: "success",
        text: "Suppression effectuer !",
        type: "success",
      });
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);

      this.$app.$notify({
        title: "error",
        text: "Une erreur c'est produite lors de la suppression ",
        type: "warning",
      });
    });
}

export function modificationUser({ commit }, formData) {
  commit("SET_LOADING_RESOURCE", true);
  apiGuest
    .put("/users", formData)
    .then((response) => {
      commit("MODIFIER_USER", response.data);
      this.$app.$notify({
        title: "success ",
        text: "Enregistrement effectué !",
        type: "success",
      });
      commit("SET_LOADING_RESOURCE", false);
      commit("SET_ERROR_RESOURCE", false);
    })
    .catch((error) => {
      console.log(error);
      commit("SET_LOADING_RESOURCE", false);
      commit("SET_ERROR_RESOURCE", true);
      if (error.response == undefined) {
        this.$app.$notify({
          title: "error",
          text: "Veuillez verifier votre connexion et réessayer ",
          type: "warning",
        });
      } else {
        this.$app.$notify({
          title: "error",
          text: error.response.data.message,
          type: "warning",
        });
      }
    });
}
