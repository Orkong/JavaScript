// Functions

// Parametresiz Fonksiyon
function sayHello(){
    console.log("Merhaba Dostum")
}

sayHello()

// Parametreli Fonksyion
function great(name){
    console.log(`Merhabana ${name}`)
}
great("Orkun")

function addNumbers(a,b){
    return a+b;
}
var sonuc =addNumbers(12,28)
console.log(sonuc)

function pow(a,b){
    return a**b
}


console.log(pow(2,5))

const square=(num)=>{ // =>bana bir sayinin tanimlanacagini soyluyor
    return num*num
}
console.log(square(5))

var cube=(num)=>{
    return num**3
}

console.log(cube(5))