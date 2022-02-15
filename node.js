//for in loop
//enumaration or iteration based loop
var fruits = ["apple","banana","mango","orange","strawberry"];
output = "";
for (let index in fruits) {

  output += `${fruits[index]} `;
}
console.log(output);
//for each loop
var fruits =["apple","banana","mango","orange","gauva"];
var result = "";
fruits.forEach(function(element) {
  result += `${element} `;
 });
console.log(result);
 //for of loop
 var fruits = ["apple","banana","mango","orange","mango"];
 var result = "";
 for (let i=0; i<fruits.length; i++) {
  result += ` ${fruits[i]} `;
}
console.log(result);




