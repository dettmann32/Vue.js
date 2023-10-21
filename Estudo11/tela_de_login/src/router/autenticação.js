
let variavelGlobal = null

function setAuth(data){
    if(!data){
        variavelGlobal = false
    }else{
        variavelGlobal = true
    }

}

function isAuthenticated(){
    return variavelGlobal
}

module.exports= {
 setAuth, isAuthenticated
}