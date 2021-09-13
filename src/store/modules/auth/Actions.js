import apiGuest from "../../../request/auth-request";
import router from "../../../routes/index";

export function login({ commit }, user) {
  if (user.email && user.password) {
    commit("SET_LOADER", true);
    commit("SET_ERROR_FALSE");
    //   this.loginError = false;
    return apiGuest
      .post("/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        commit("LOGIN_USER", response.data.user);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("User", JSON.stringify(response.data.user));
        commit("SET_LOADER", false);
        setTimeout(
          function() {
            router.push({ name: "Home" });
          }.bind(this),
          1000
        );
      })
      .catch((error) => {
        if (error.response == undefined) {
          commit("SET_LOADER", false);

          this.$app.$notify({
            title: "error",
            text: "Veuillez verifier votre connexion et réessayer ",
            type: "error",
          });
        }

        if (error.response.status === 401 || error.response.status === 403) {
          this.$app.$notify({
            title: "error",
            text: "Veuillez verifier votre email et mot de passe",
            type: "warning",
          });
          commit("SET_LOADER", false);
          commit("SET_ERROR_MESSAGE", error.response.data.message);
          commit("SET_LOADER_FALSE");
          //   //  this.error = false
          commit("SET_ERROR_TRUE");
          //this.$router.push({name: 'login'})
        }

        if (error.response.status === 500) {
          commit("SET_LOADER", false);

          this.$app.$notify({
            title: "error",
            text: "Une erreur c'est produite lors de la connexion",
            type: "warning",
          });
        }

        if (error.response.status === 404) {
          commit("SET_LOADER", false);
          this.$app.$notify({
            title: "error",
            text: "Cette ressource n'existe pas",
            type: "warning",
          });
        }
      });
  } else if (!user.email) {
    commit("SET_CHAMP_VIDE_TRUE");
  } else if (!user.password) {
    commit("SET_CHAMP_VIDE_TRUE");
  }
}

export function logoutUser({ commit }) {
  localStorage.removeItem("token");
  localStorage.removeItem("Users");

  commit("LOGOUT_USER");

  router.push({ name: "Login" });
}
