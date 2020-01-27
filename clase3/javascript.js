function actualizarDatos(datos){
    return new Promise(
        (resolve, reject)=>{
            leerDatos(url)
            .then(res =>{
                res.val2=datos;
                
                console.log(res);
                resolve(res)

            })
            .catch(err=>reject(err));
        });
}

let url = "http://api.myjson.com/bins/10eh7a";
function leerDatos(url){return new Promise((resolve,reject)=>{fetch(url).then(res=>res.json()).then(res=>resolve(res)).catch(err=>reject(err));});}

