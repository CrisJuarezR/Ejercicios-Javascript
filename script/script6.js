function algoritmoBurbuja(myArray) {
    let n =myArray.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (myArray[j] > myArray[j + 1]) {
          [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
        }
      }
    }
  
    return myArray;
  }
  
let input = [3, 6, 12, 5, 100, 1];
console.log("Entrada:", input);
let output = algoritmoBurbuja(input);
console.log("Salida:", output);
  