const cantidadEntradas = document.getElementById('cantidad')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const correo = document.getElementById('correo')
const botonCalcular = document.getElementById('botonCalcular')
const categoria = document.getElementById('inputCategoria')
//const resultado = document.getElementById('resutado')





function resumen (){
    /*console.log("cantent: " + cantidadEntradas.value);
    console.log("nombre: " + nombre.value);
    console.log("apellido: " + apellido.value);
    console.log("correo: " + correo.value);
    console.log("categoria: " + (categoria.value));*/
    const resultado2 = (200*parseInt(cantidadEntradas.value))*(parseInt(categoria.value)/100);
    //console.log("resultado: " + resultado2);
    document.getElementById('resutado').innerHTML=resultado2;   
}

function borrar (){
    cantidadEntradas.value="";
    nombre.value="";
    apellido.value="";
    correo.value="";
    document.getElementById('resutado').innerHTML="";S
}


/*
const ticketEstudiante = parseInt(document.getElementById('Estudiante')) = 200 - (200*80) / 100;
const ticketTrainee = 200 - (200*50) / 100;
const ticketJunior = 200 - (200*15) / 100;
const resultado = categoria * cantidadEntradas;
*/


