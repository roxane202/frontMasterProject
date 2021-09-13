export const admin=()=>{
   let objet=localStorage.getItem('Users');
   let user=JSON.parse (objet)
  // console.log("GUEIR")
    if(user.user_role.role.code_role=="SUPER_ADMIN"){
        return true
    }else{
        return false
    }
}



export const dcf=()=>{
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
    // console.log("GUEIR")
    if(user.user_role.role.code_role=="DCF"){
        return true
    }else{
        return false
    }
}



export const cf=()=>{
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
    // console.log("GUEIR")
    if(user.user_role.role.code_role=="CF"){
        return true
    }else{
        return false
    }
}

export const isAuthenticate=()=>{
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
    // console.log("GUEIR")
    if(user){
        return true
    }else{
        return false
    }
}

export const pool=()=>{
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
    // console.log("GUEIR")
    if(user.user_role.role.code_role=="POOL_SAISIE"){
        return true
    }else{
        return false
    }
}



export const noDCfNoAdmin=()=>{
    if (!admin()){
        if (!dcf()) {
            return true
       }
           
        
    }
        return false
    
    
}
