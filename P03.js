/*
5 Data turu vardir
String - Numbers - True/False - Null - Undefined
*/

var firstName='Turgut'
let lastName='Orkun'
var age=33
var isHeStudent=false
let studentNumber=null
var stSaveYear=undefined

console.log(firstName,lastName,age,isHeStudent,studentNumber,stSaveYear)

// Concatination String birlestirmedir

var message='Yeni kullanici bilgileri \nIsim: '+firstName+'\nSoyisim: '+lastName+'\nYas: '+age
console.log(message)

//Interpolation : deyim ici eklemek
var message2=`Yeni Kullanici Bilgileri \nIsim: ${firstName} \nSoyisim: ${lastName} \nYas: ${age}`

console.log(message2)