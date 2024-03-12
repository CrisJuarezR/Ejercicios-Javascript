function calcularSumaYProducto (){ 
const myArray=[1,2,3,4,5];
const suma=myArray.reduce((i,num)=>i+num,0);
const producto=myArray.reduce((i,num)=>i*num,1);
console.log(`La suma de los números del arreglo es: ${suma}`);
console.log(`El producto de los números del arreglo es: ${producto}`);
document.getElementById("suma").innerHTML="La suma de los números del arreglo es: "+suma;
document.getElementById("producto").innerHTML="El producto de los números del arreglo es: "+producto;
 }

 
 calcularSumaYProducto();
 