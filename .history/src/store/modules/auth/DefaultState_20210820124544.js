const defaultstate = {
    isLoggedIn: !!localStorage.getItem('token'),
     user: localStorage.getItem('user'),

    champVide: false,
    loader: false,
    error: false,
    errorMessage: undefined,
    projetByUser:[]
};

 export default defaultstate