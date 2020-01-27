//reiniciar partida, limpiar todo, iniciar todo

let reiniciar = ()=>{
    
    gameStatus = STATUS_ID.colocar; 
    //matrices de 11 por 11 los indices 0 no se van a usar
    ownerMatrix = Array(11).fill().map(() => Array(11).fill(0));
    attackMatrix = Array(11).fill().map(() => Array(11).fill(0));
    /* TODO TAREA: quitar las clases a todas las celdas (TD) 
    de ambas tablas con un forEach es una línea de código */

    
    //******/
    updateCantidadBarcos(COUNT.slice());
    updateTamañosBarcos(SIZES.slice());
    numShip =0;
    updateDireccion(DIR.derecha);
    updateStatus(gameStatus);

    datosJugador = {
        step: 0,
        status: 0,
        attack: [0,0],
        attack_status: ""
    }

    updatePlayer(datosJugador, numJugador);

};

btnReiniciar.onclick=  reiniciar;

//al dar clic en la barra espaciadora cambiar de dirección
document.body.onkeypress  = (event)=>{
    //TODO: Si el estatus no es colocar salir
    
    if (event.key === ' ' || event.key === "Spacebar"){
        event.preventDefault()
        updateDireccion((direccion+1) % 4);
    }

}


//mostrar en pantalla la cantidad de barcos que faltan por poner
function updateCantidadBarcos(numBarcos){ 
    barcos.count = numBarcos;
    //TODO TAREA: mostrar cantidad de barcos en elementos con clase .count
}

function updateTamañosBarcos(sizes){
    barcos.sizes = sizes;
    //TODO TAREA: mostrar tamaños de barcos en elementos con clase .size
}

function updateDireccion(dir){
    direccion = dir;
    //TODO TAREA: mostrar dorección en spanDir
    
}

async function updateStatus(status){
    console.log("actualizar status a", status);

    //TODO TAREA: actualizar estatus

}


btnSelect.onclick = () => {
    numJugador = Number(selectJugador.value);
    console.log("Jugador seleccionado", numJugador);
    reiniciar();
}

reiniciar();


