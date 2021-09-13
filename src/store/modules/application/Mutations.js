/**
 * Mutation de projet
 */

 export const GET_PROJET = (state, tableau_document) => {
    state.projet = tableau_document
}

export const AJOUTER_PROJET = (state, elementAjouter) => {
    state.projet.unshift(elementAjouter)
}

export const SUPPRIMER_PROJET  = (state, id) => {
    state.projet = state.projet.filter(prest => prest.id != id)
}

export const MODIFIER_PROJET  = (state, elementModif) => {
    state.projet = state.projet.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_PROJET = (state, tableau_document) => {
    state.loadingProjet = tableau_document
}


export const SET_ERROR_PROJET = (state, tableau_document) => {
    state.errorProjet = tableau_document
}

/**
 * Mutation partie prenante
 */

 export const GET_PARTIE_PRENANTE_PROJET = (state, tableau_document) => {
    state.partie_prenante_projets = tableau_document
}

export const AJOUTER_PARTIE_PRENANTE_PROJET = (state, elementAjouter) => {
    state.partie_prenante_projets.unshift(elementAjouter)
}

export const SUPPRIMER_PARTIE_PRENANTE_PROJET  = (state, id) => {
    state.partie_prenante_projets = state.partie_prenante_projets.filter(prest => prest.id != id)
}

export const MODIFIER_PARTIE_PRENANTE_PROJET  = (state, elementModif) => {
    state.partie_prenante_projets = state.partie_prenante_projets.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_PARTIE_PRENANTE_PROJET = (state, tableau_document) => {
    state.loadingPartiePrenanteProjet = tableau_document
}

export const SET_ERROR_PARTIE_PRENANTE_PROJET = (state, tableau_document) => {
    state.errorPartiePrenanteProjet = tableau_document
}


/**
 * Mutation type resource
 */



 export const GET_TYPE_RESOURCE = (state, tableau_document) => {
    state.type_ressource = tableau_document
}

export const AJOUTER_TYPE_RESOURCE = (state, elementAjouter) => {
    state.type_ressource.unshift(elementAjouter)
}

export const SUPPRIMER_TYPE_RESOURCE  = (state, id) => {
    state.type_ressource = state.type_ressource.filter(prest => prest.id != id)
}

export const MODIFIER_TYPE_RESOURCE  = (state, elementModif) => {
    state.type_ressource = state.type_ressource.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_TYPE_RESOURCE = (state, tableau_document) => {
    state.loadingTypeResource = tableau_document
}


export const SET_ERROR_TYPE_RESOURCE = (state, tableau_document) => {
    state.errorTypeResource = tableau_document
}

/**
 * Mutation resource
 */

 export const GET_RESOURCE = (state, tableau_document) => {
    state.ressource = tableau_document
}

export const AJOUTER_RESOURCE = (state, elementAjouter) => {
    state.ressource.unshift(elementAjouter)
}

export const SUPPRIMER_RESOURCE  = (state, id) => {
    state.ressource = state.ressource.filter(prest => prest.id != id)
}

export const MODIFIER_RESOURCE  = (state, elementModif) => {
    state.ressource = state.ressource.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_RESOURCE = (state, tableau_document) => {
    state.loadingResource = tableau_document
}


export const SET_ERROR_RESOURCE = (state, tableau_document) => {
    state.errorResource = tableau_document
}
/**
 * Mutation poids indicateurs
 */

 export const GET_POIDS_INDICATEUR = (state, tableau_document) => {
    state.poids_indicateur = tableau_document
 }

export const AJOUTER_POIDS_INDICATEUR = (state, elementAjouter) => {
    state.poids_indicateur.unshift(elementAjouter)
}

export const SUPPRIMER_POIDS_INDICATEUR  = (state, id) => {
    state.poids_indicateur = state.poids_indicateur.filter(prest => prest.id != id)
}

export const MODIFIER_POIDS_INDICATEUR  = (state, elementModif) => {
    state.poids_indicateur = state.poids_indicateur.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_POIDS_INDICATEUR = (state, tableau_document) => {
    state.loadingPoidsIndicateur = tableau_document
}


export const SET_ERROR_POIDS_INDICATEUR = (state, tableau_document) => {
    state.errorPoidsIndicateur = tableau_document
}

/**
 * Mutation autre partenaire
 */


 export const GET_AUTRE_PARTENAIRE = (state, tableau_document) => {
    state.autre_partenaire = tableau_document
 }

export const AJOUTER_AUTRE_PARTENAIRE = (state, elementAjouter) => {
    state.autre_partenaire.unshift(elementAjouter)
}

export const SUPPRIMER_AUTRE_PARTENAIRE  = (state, id) => {
    state.autre_partenaire = state.autre_partenaire.filter(prest => prest.id != id)
}

export const MODIFIER_AUTRE_PARTENAIRE  = (state, elementModif) => {
    state.autre_partenaire = state.autre_partenaire.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_AUTRE_PARTENAIRE = (state, tableau_document) => {
    state.loadingAutrePartenaire = tableau_document
}


export const SET_ERROR_AUTRE_PARTENAIRE = (state, tableau_document) => {
    state.errorAutrePartenaire = tableau_document
}

/**
 * Mutation nature indicateur
 */

 export const GET_NATURE_INDICATEUR = (state, tableau_document) => {
    state.nature_indicateur = tableau_document
 }

export const AJOUTER_NATURE_INDICATEUR = (state, elementAjouter) => {
    state.nature_indicateur.unshift(elementAjouter)
}

export const SUPPRIMER_NATURE_INDICATEUR  = (state, id) => {
    state.nature_indicateur = state.nature_indicateur.filter(prest => prest.id != id)
}

export const MODIFIER_NATURE_INDICATEUR  = (state, elementModif) => {
    state.nature_indicateur = state.nature_indicateur.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_NATURE_INDICATEUR = (state, tableau_document) => {
    state.loadingNatureIndicateur = tableau_document
}

export const SET_ERROR_NATURE_INDICATEUR = (state, tableau_document) => {
    state.errorNatureIndicateur = tableau_document
}

/**
 * Mutation beneficiaire
 */



 export const GET_BENEFICIAIRE = (state, tableau_document) => {
    state.beneficiaire = tableau_document
 }

export const AJOUTER_BENEFICIAIRE = (state, elementAjouter) => {
    state.beneficiaire.unshift(elementAjouter)
}

export const SUPPRIMER_BENEFICIAIRE  = (state, id) => {
    state.beneficiaire = state.beneficiaire.filter(prest => prest.id != id)
}

export const MODIFIER_BENEFICIAIRE  = (state, elementModif) => {
    state.beneficiaire = state.beneficiaire.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_BENEFICIAIRE = (state, tableau_document) => {
    state.loadingBeneficiare = tableau_document
}


export const SET_ERROR_BENEFICIAIRE = (state, tableau_document) => {
    state.errorBeneficiaire = tableau_document
}
/**
 * Mutation type marché
 */

 export const GET_TYPE_MARCHE = (state, tableau_document) => {
    state.type_marche = tableau_document
 }

export const AJOUTER_TYPE_MARCHE = (state, elementAjouter) => {
    state.type_marche.unshift(elementAjouter)
}

export const SUPPRIMER_TYPE_MARCHE  = (state, id) => {
    state.type_marche = state.type_marche.filter(prest => prest.id != id)
}

export const MODIFIER_TYPE_MARCHE  = (state, elementModif) => {
    state.type_marche = state.type_marche.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_TYPE_MARCHE = (state, tableau_document) => {
    state.loadingTypeMArche = tableau_document
}


export const SET_ERROR_TYPE_MARCHE = (state, tableau_document) => {
    state.errorTypeMarche = tableau_document
}
/**
 * Mutation methode passation marche
 */


 export const GET_METHODE_PASSATION_MARCHE = (state, tableau_document) => {
    state.methode_passation_marche = tableau_document
 }

export const AJOUTER_METHODE_PASSATION_MARCHE = (state, elementAjouter) => {
    state.methode_passation_marche.unshift(elementAjouter)
}

export const SUPPRIMER_METHODE_PASSATION_MARCHE  = (state, id) => {
    state.methode_passation_marche = state.methode_passation_marche.filter(prest => prest.id != id)
}

export const MODIFIER_METHODE_PASSATION_MARCHE  = (state, elementModif) => {
    state.methode_passation_marche = state.methode_passation_marche.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_METHODE_PASSATION_MARCHE = (state, tableau_document) => {
    state.loadingMethodePassationMarche = tableau_document
}


export const SET_ERROR_METHODE_PASSATION_MARCHE = (state, tableau_document) => {
    state.errorMethodePassation = tableau_document
}

/**
 * Mutation fournisseur
 */

 export const GET_FOURNISSEUR = (state, tableau_document) => {
    state.fournisseurs = tableau_document
 }

export const AJOUTER_FOURNISSEUR = (state, elementAjouter) => {
    state.fournisseurs.unshift(elementAjouter)
}

export const SUPPRIMER_FOURNISSEUR  = (state, id) => {
    state.fournisseurs = state.fournisseurs.filter(prest => prest.id != id)
}

export const MODIFIER_FOURNISSEUR  = (state, elementModif) => {
    state.fournisseurs = state.fournisseurs.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_FOURNISSEUR = (state, tableau_document) => {
    state.loadingFournisseur = tableau_document
}


export const SET_ERROR_FOURNISSEUR = (state, tableau_document) => {
    state.errorFournisseur = tableau_document
}


/**
 * MUTATION DEVISE
 */
 export const GET_DEVISE = (state, tableau_document) => {
    state.devise = tableau_document
 }

export const AJOUTER_DEVISE = (state, elementAjouter) => {
    state.devise.unshift(elementAjouter)
}

export const SUPPRIMER_DEVISE = (state, id) => {
    state.devise = state.devise.filter(prest => prest.id != id)
}

export const MODIFIER_DEVISE  = (state, elementModif) => {
    state.devise = state.devise.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_DEVISE = (state, tableau_document) => {
    state.loadingDevise = tableau_document
}

export const SET_ERROR_DEVISE = (state, tableau_document) => {
    state.errorDevise = tableau_document
}



/**
 * Fonction locale
 */

 export const GET_FONCTION_LOCALE = (state, tableau_document) => {
    state.fonction_locale = tableau_document
 }

export const AJOUTER_FONCTION_LOCALE = (state, elementAjouter) => {
    state.fonction_locale.unshift(elementAjouter)
}

export const SUPPRIMER_FONCTION_LOCALE = (state, id) => {
    state.fonction_locale = state.fonction_locale.filter(prest => prest.id != id)
}

export const MODIFIER_FONCTION_LOCALE  = (state, elementModif) => {
    state.fonction_locale = state.fonction_locale.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_FONCTION_LOCALE= (state, tableau_document) => {
    state.loadingFonctionLocale = tableau_document
}

export const SET_ERROR_FONCTION_LOCALE = (state, tableau_document) => {
    state.errorFonctionLocale = tableau_document
}


/**
 * ACTION POSITION
 */



 export const GET_POSITION = (state, tableau_document) => {
    state.position = tableau_document
 }

export const AJOUTER_POSITION  = (state, elementAjouter) => {
    state.position.unshift(elementAjouter)
}

export const SUPPRIMER_POSITION = (state, id) => {
    state.position = state.position.filter(prest => prest.id != id)
}

export const MODIFIER_POSITION   = (state, elementModif) => {
    state.position = state.position.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_POSITION = (state, tableau_document) => {
    state.loadingPositionLocale = tableau_document
}

export const SET_ERROR_POSITION = (state, tableau_document) => {
    state.errorPosition = tableau_document
}


/**
 * MUTATION PROJET_PARTIE_PRENANTE
 */


 export const GET_PROJET_PARTIE_PRENANTES = (state, tableau_document) => {
    state.projet_partie_prenantes = tableau_document
 }

export const AJOUTER_PROJET_PARTIE_PRENANTES = (state, elementAjouter) => {
    state.projet_partie_prenantes.unshift(elementAjouter)
}

export const SUPPRIMER_PROJET_PARTIE_PRENANTES = (state, id) => {
    state.projet_partie_prenantes = state.projet_partie_prenantes.filter(prest => prest.id != id)
}

export const MODIFIER_PROJET_PARTIE_PRENANTES  = (state, elementModif) => {
    state.projet_partie_prenantes = state.projet_partie_prenantes.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_PROJET_PARTIE_PRENANTES = (state, tableau_document) => {
    state.loadingProjetPartePrenantes = tableau_document
}

export const SET_ERROR_PROJET_PARTIE_PRENANTES = (state, tableau_document) => {
    state.errorProjetPartePrenantes = tableau_document
}


/**
 * USER 
 */


 export const GET_USER = (state, tableau_document) => {
    state.users = tableau_document
 }

export const AJOUTER_USER = (state, elementAjouter) => {
    state.users.unshift(elementAjouter)
}

export const SUPPRIMER_USER = (state, id) => {
    state.users = state.users.filter(prest => prest.id != id)
}

export const MODIFIER_USER = (state, elementModif) => {
    state.users = state.users.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_USER= (state, tableau_document) => {
    state.loadingUser = tableau_document
}

export const SET_ERROR_USER = (state, tableau_document) => {
    state.errorUser = tableau_document
}




  //mutation exigence
 
 export const GET_EXIGENCE = (state, tableau_document) => {
    state.exigence = tableau_document
 }

export const AJOUTER_EXIGENCE  = (state, elementAjouter) => {
    state.exigence.unshift(elementAjouter)
}

export const SUPPRIMER_EXIGENCE  = (state, id) => {
    state.exigence = state.exigence.filter(prest => prest.id != id)
}

export const MODIFIER_EXIGENCE   = (state, elementModif) => {
    state.exigence = state.exigence.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_EXIGENCE  = (state, tableau_document) => {
    state.loadingExigence = tableau_document
}

export const SET_ERROR_EXIGENCE  = (state, tableau_document) => {
    state.errorExigence = tableau_document
}
 

//Mutation PartiePrenante_ exigences

export const GET_PARTIE_PRENANTES_EXIGENCE = (state, tableau_document) => {
    state.partie_prenantes_exigence = tableau_document
 }

export const AJOUTER_PARTIE_PRENANTES_EXIGENCE = (state, elementAjouter) => {
    state.partie_prenantes_exigence.unshift(elementAjouter)
}

export const SUPPRIMER_PARTIE_PRENANTES_EXIGENCE = (state, id) => {
    state.partie_prenantes_exigence = state.partie_prenantes_exigence.filter(prest => prest.id != id)
}

export const MODIFIER_PARTIE_PRENANTES_EXIGENCE  = (state, elementModif) => {
    state.partie_prenantes_exigence= state.partie_prenantes_exigence.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_PARTIE_PRENANTES_EXIGENCE = (state, tableau_document) => {
    state.loadingPartiePrenanteExigence = tableau_document
}

export const SET_ERROR_PARTIE_PRENANTES_EXIGENCE= (state, tableau_document) => {
    state.errorPartiePrenanteExigence = tableau_document
}

//Mutations composantes avec poids


export const GET_COMPOSANTE_POIDS = (state, tableau_document) => {
    state.composante_poids = tableau_document
 }

export const AJOUTER_COMPOSANTE_POIDS = (state, elementAjouter) => {
    state.composante_poids.unshift(elementAjouter)
}

export const SUPPRIMER_COMPOSANTE_POIDS = (state, id) => {
    state.composante_poids = state.composante_poids.filter(prest => prest.id != id)
}

export const MODIFIER_COMPOSANTE_POIDS  = (state, elementModif) => {
    state.composante_poids= state.composante_poids.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SET_LOADING_COMPOSANTE_POIDS = (state, tableau_document) => {
    state.loadingComposantePoids = tableau_document
}

export const SET_ERROR_COMPOSANTE_POIDS= (state, tableau_document) => {
    state.errorComposantePoids = tableau_document
}
