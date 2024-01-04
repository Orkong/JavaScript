var person = {
    firstName:"Orkun",
    lastName:"Esat",
    age:30,
    isHeStudent:true,
}
console.log('-----------------------------------')
console.log(person)
console.log('-----------------------------------')
console.log("Isim : " +person.firstName)
console.log("Soyisim : "+person.lastName)
console.log("Yas : "+person.age)
console.log(`Ogrenci mi : ${person.isHeStudent}`)

var myInfo={}

console.log(myInfo)
myInfo.firstName="Orkun"
myInfo.lastName="Esato"
myInfo.age=20
console.log(myInfo)

delete myInfo.age
console.log(myInfo)

var okul={
    isim:"100.yil ",
    siniflar:{
        lise:{sinifAd:"9A",sinifAd2:"9B"}
    }
}

console.log(okul.isim)
console.log(okul.siniflar.sinifAd2)
delete okul.siniflar.sinifAd2