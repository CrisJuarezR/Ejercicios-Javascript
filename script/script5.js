let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
//Eliminar a Dani.
people.splice(1,1);
console.log(people);
//Eliminar a Juan.
people.splice(2,1);
console.log(people);
//Mover a Luis al inicio.
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
console.log(people);
//Agregar mi nombre al final.
people.push("Cristian");
console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
      break;
    }
  }

let indexOfMaria = people.indexOf("Maria");
console.log("Index de 'Maria':", indexOfMaria);