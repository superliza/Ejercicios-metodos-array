//REGLAS:
//No puedes utilizar "loops" en ninguna de las funciones (for, while, do while)
//Utiliza los metodos para arreglos .map, .reduce, .filter, .forEach y .sort

// 1. Capitalize
/*Escribe una función capitalize que tome una palabra como string y retorne
 *el mismo string con todas sus letras en mayusculas
 * ejem: capitalize("whoop") --->  "WHOOP" */

var capitalize = function(str) {
  //Escribe tu codigo aqui
  // No puedes utilizar directamente sobre str toUpperCase
  var myArr = new Array(str);
  var emptyArr = [];
  myArr.forEach(element => {
    var myString = element.toUpperCase(); 
    emptyArr.push(myString);
    var arrToString = emptyArr.toString(); 
    console.log(arrToString);    
  });
  
 }
 capitalize("qué pedo");
 //Utiliza console.log() para visualizar el funcionamiento de tu código.
 // var outputCapitalize = capitalize("whoop")
 // console.log(outputCapitalize); //----> "WHOOP";

// 2. swapCase
/*Ahora escribe una función llamada swapCase que tome una oración como string y
  retorne el string alternando una palabra en mayúsculas y otra en minúsculas
  ejem: swapCase('hey gurl, lets javascript together sometime') ---> "HEY gurl, LETS javascript TOGETHER sometime" 
  NOTA: Debes hacer uso de la funcion capitalize();*/

var swapCase = function(str) {
  // Escribe tu codigo aquí
  
}

var outputSwapCase = swapCase("hey gurl, lets javascript together sometime")
console.log(outputSwapCase); //---> "HEY gurl, LETS javascript TOGETHER sometime"


// 3. shiftLetter
/*Escribe una funcion ShiftLetter() que tome un string y retorne un string
  codificado cambiando cada letra por la siguiente del alfabeto.
  Tips: Investiga sobre las funciones de JS  (String.fromCharCode() y String.charCodeAt())
  codigo ascii te puede ayudar para resolver este ejercicio */

//ejem:  shiftLetters('hello') // ---> "ifmmp"
//ejem:  shiftLetters('abcxyz') // ---> "bcdyz"

var shiftLetters = function(str) {
  //Escribe tu codigo aquí
  var convert = str.split("");
  var arrWhite = [];
  convert.map(element => {
    var stringToCode = element.charCodeAt() + 1;
    var codeToString = String.fromCharCode(stringToCode);
    arrWhite.push(codeToString); 
  })
  console.log(arrWhite.join(""));  
}
shiftLetters('happy');
// var outputShiftLetters = shiftLetters('hello');
// console.log(outputShiftLetters); // ---> "ifmmp"


// 4. Even numbers
//Manipula el siguiente array y devuelve un nuevo array que contenga solo a los números pares
// ejem. evenNumber([1,2,3,4,5,6,7,8,9,10]) ---> [2, 4, 6, 8, 10]

var numberArray = [1,2,3,4,5,6,7,8,9,10];

function evenNumbers(array) {
  //Escribe tu codigo aquí.
  var pairNumbers = numberArray.filter(number => number % 2 === 0)
  return pairNumbers;
};
evenNumbers(numberArray);
// var outputEvenNumbers = evenNumbers(numberArray);
// console.log(outputEvenNumbers); // ---> [2, 4, 6, 8, 10]


// 5. Odd numbers
//Ahora  manipulando el mismo array devuelve un nuevo array que contenga solo a los números impares.
// ejem. oddNumbers([1,2,3,4,5,6,7,8,9,10]) ---> [1, 3, 5, 7, 9]

function oddNumbers(array) {
  //Escribe tu codigo aquí
  var unevenNumbers = numberArray.filter(oddNumber => oddNumber % 2 === 1)
  return unevenNumbers;
};
oddNumbers(numberArray);
// var outputOdd = oddNumbers(numberArray);
// console.log(outputOdd); // ---> [1, 3, 5, 7, 9]


// 6. Reducer
/*Escribe una función reducer() que tome un arreglo de numeros y retorne un
  arreglo de dos elementos, el primer elemento será la suma de los números pares y el
  segundo elemento la suma de los números impares
  ejem: reducer([1,2,3,4,5,6,7,8,9]) ---> [20, 25]

Nota: Debes de hacer uso de las funciones de evenNumbers() y oddNumbers.*/

// const suma = [10, 20, 30].reduce(function(a, b){return a + b});
// console.log(suma);


function reducer () {
  //Escribe tu codigo aquí
  var saveTotal = new Array()
  var myPairSum = evenNumbers(numberArray).reduce((a, b) => a + b, 0);
  // console.log(myPairSum);
  saveTotal.push(myPairSum);
  
  var myOddSum = oddNumbers(numberArray).reduce((c, d) => c + d, 0);
  // console.log(myOddSum);
  saveTotal.push(myOddSum);
  console.log(saveTotal);
  
}
reducer();
// var outputReducer = reducer([1,2,3,4,5,6,7,8,9]);
// console.log(outputReducer); // ---> [ 20, 25 ]


// 7. arrayt with strings 'javascript'
/*Manipula el siguiente array y devuelve un nuevo array que contenga los strings 'javascript',
  debes concatenar dos difrentes métodos para arrays.
  Apartir de este ejercicio te toca darle nombre y forma a tus funciones y sus respectivos outputs.
  ejem. output --> ['javascript', 'javascript', 'javascript']*/ 



var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

function javascript() {
  // var arrOfArr = [];
  var tag = persons.map(element => element["tags"]);
    // console.log(tag);
    var filterTag = tag.filter(x => x === "javascript");
    console.log(filterTag);
    // arrOfArr.push(element["tags"]);
    // // console.log(arrOfArr);
    // var filterTags = arrOfArr.filter(tag => tag === "javascript");
    // console.log(filterTags);
}
javascript();

// 8. Render in DOM
/*Usando la data anterior y alguno de los métodos, pinta en el index.html a través del DOM
 cada una de las personas y todas sus propiedades */

var paintPersons = function(array) {
  array.forEach(element => {
    console.log(element["id"]); 
    console.log(element["name"]);
    console.log(element["tags"]);
    
  })
}

paintPersons(persons);
  
// 9. Total de edad en 'años perro' 
/*Considera la siguiente variables data. Nosotros tenmos un arreglo de objetos, cada objeto representa
  una mascota. Las mascotas tienen un nombre, una edad y un tipo.
  Instrucciones: 
  1. Selecciona solo a los perros.
  2. Transforma su edad en años perros (multiplica cada una por siete).
  3. Suma el resultado.
  
  ejem. output --> 84 
*/

var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

function dogsAge() {
  var saveAge = [];
  data.map(element => {
    var typeAnimal = element["type"];
    if(typeAnimal === "dog") {
      var ageDogs = element["age"] * 7; 
      saveAge.push(ageDogs);
      // console.log(saveAge); 
      // var total = saveAge.reduce((a, b) => a + b, 0);
      //  console.log(total); 
    } else {
      return false;  
    }
  })
  var totalAge = saveAge.reduce((a, b) => a + b, 0);
  console.log(totalAge);  
}
dogsAge();

function dogsAgeTwo(perritos) {
  var newArray = perritos.filter(element => {
    return element["type"] === "dog"; 
  }).map(element => {
    return element["age"] * 7;  
  }).reduce((a, b) => a + b, 0);
  console.log(newArray); 
}
dogsAgeTwo(data)
// 10. Render in DOM 
/*Usando la data anterior y alguno de los métodos, pinta en el index.html a través del DOM
 cada una de las mascotas junto con todas su propiedades*/

 var paintPets = function(array) {

 };

var outputPaintPets = paintPets(data);

// 11. Alphabetic order
/*Manipula el siguiente array de frutas y ordenalo alfabéticamente
  ejem. output --> ['Apple', 'Banana', 'Kiwi', 'Orange'];*/

var fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
var alphabeticalOrder = fruits.sort();
console.log(alphabeticalOrder);




