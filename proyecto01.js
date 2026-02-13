var precio_base = 2000;
var recargo_total = 0;         
var precio_final = 0;



var edad_18 = 0.1; 
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var precio_final = 0


// Para mostrar porcentajes aplicados 
var porcentaje_asegurado =0;
var porcentaje_conyuge = 0;
var porcentaje_hijos = 0;

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge_numero = 0;

if("SI" == casado.toUpperCase()){
 var  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
  edad_conyuge_numero = parseInt(edad_conyuge)
}

//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0


var hijos = prompt("¿Tiene hijos o hijas?")

var cantidad_hijos;

if("SI" == hijos.toUpperCase()){
  cantidad_hijos = parseInt(
  prompt ("Cuantos hijos tiene?")
  );
} else {
  cantidad_hijos = 0;
}

//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos_numero = parseInt(cantidad_hijos)

   
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

if(edad_numero>=18 && edad_numero<25){  
  porcentaje_asegurado = edad_18
}
//aqui puede colocar un else if() con el siguiente rango
else if(edad_numero>=25 && edad_numero<50){
  porcentaje_asegurado = edad_25
}   

else if(edad_numero>=50){
  porcentaje_asegurado = edad_50
}

 
 //Recargo por la edad del conyuge
recargo_total += precio_base * porcentaje_asegurado;




if("SI" == casado.toUpperCase()){

 if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    porcentaje_conyuge = casado_18;
}

else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    porcentaje_conyuge = casado_25;
 
} 
  else if (edad_conyuge_numero >= 50) {
    porcentaje_conyuge = casado_50;
}    

recargo_total += precio_base * porcentaje_conyuge;
} 

 //* 3. Recargo por la cantidad de hijos
 if(cantidad_hijos > 0) {
  porcentaje_hijos = hijos_recargo * cantidad_hijos;
  recargo_total += precio_base * porcentaje_hijos;
}


precio_final = precio_base + recargo_total

//Resultado 
alert ( 
    "Cotizacion para: " + nombre);

alert(
        "Recargo asegurado " + ( porcentaje_asegurado * 100) + "%, "
     );

// Porcentaje de cada uno al final que le corresponde a cada uno segun los calculos anteriores 
if ("SI" == casado.toUpperCase()) {
  alert(
    "Recargo cónyuge: " +
    (porcentaje_conyuge * 100) + "%"
  );
} else {
  alert("No posee recargo por cónyuge");
}

if (cantidad_hijos > 0) {
  alert(
    "Recargo por hijos: " +
    (porcentaje_hijos * 100) + "%"
  );
} else {
  alert("No posee recargo por hijos");
}

alert("Recargo total en Q: " + recargo_total);
alert("Precio final en Q: " + precio_final);

