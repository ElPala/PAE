'use strict';

//***************************/
//RELACIONADO A LA TABLA TOWNER
//***************************/
let curDir = direccion;

tOwner.onmouseover = tOwner.onmouseout = tOwner.onclick=  (event) => {
    //TODO TAREA: solo entrar si el estado actual es colocar si no salir.
    
    //TODO TAREA:  si es mouseOver actualizar curDir por la dirección

    //TODO TAREA: determinar si terminó de poner barcos salir. 
    
    //TODO TAREA: si no es una celda el target salir.
   
    //TODO TAREA: obtener rowIndex y cellIndex de la celda (fila, columna)
    
    
    //TODO TAREA: ejecutar isValid(row, col, curDir, barcos.sizes[numShip]))
    //regresa true o false, true cuando hay espacio para poner en esa celda un barco del  tamaño actual
    //en esa dirección.
    
    /*En caso de ser válido pintar la(s) celda(s) de un color puedes poner una clase a la celda
    como active si es mouseover
    quitar active si es mouseout
    selected si es click */



    //al seleccionar disminuir la cantidad de barcos de la posición actual (numShip)
    //si se colocaron todos los barcos arrancar el proceso de esperar turno y cambiar el estatus a esperarInicio

    // en caso de que la celda sea inválida ponerle la clase invalid (mouseover) y no permite seleccionarla

};

//Revisar si es válido introducir un barco en la posición indicada
//considerar tipo de barco y direccion
function isValid(fila, columna, curDirection, shipSize) {

    //si la matriz owner ya tiene algo diferente de 0 regresar false. 
   
    //revisar que el barco del tamaño indicado no choca con otro ya puesto
    //considerar la duración y el tamaño del barco
    
}

//***************************/
//RELACIONADO A LA TABLA DE ATAQUE
//***************************/

tAttack.onmouseover = tAttack.onmouseout = tAttack.onclick = (event)=>{
    //entrar aquí cuando sea mi turno, si no salir
    
    //asegurarse que sea celda(TD) y obtner rowIndex y cellIndex,
    
    //validar que la celda no haya sido previamente seleccionada
    //puedes usar attackMatrix  si tiene valor 1 significa que la celda fue usada    

    //en caso de click  seleccionar la celda  y poner un 1 en la matriz.
    //enviar el ataque.  

    //en caso de que no sea válido poner a la celda la clase invalid 
    

}