function duplicateArray(arr){
    const newArray=arr.map(num=>num*2);
    console.log(newArray);
    document.getElementById("ejercicio2").innerHTML="El resultado del ejercicio 2 es: "+ newArray.join(", ");
}
const myArray=[1,2,3,4,5];
    duplicateArray(myArray);
    