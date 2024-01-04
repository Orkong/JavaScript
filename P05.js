// Array'ler icinde bir dizi veri saklayan yapilardir

var fruit =["apple","orange","banana","blueberry","raspberry"]

console.log(fruit[3])
console.log(fruit.length)
fruit[0]="dragon"
console.log(fruit[0])
console.log(fruit)

fruit.push("apple")
console.log(fruit)

/*
Dizi Metotları:
Diziler, bir dizi metodu aracılığıyla çeşitli işlemler gerçekleştirmek için kullanılır. 
Bazı yaygın dizi metotları şunlardır:
push(): Dizi sonuna yeni bir eleman ekler.
pop(): Dizinin sonundaki elemanı kaldırır.
shift(): Dizinin başındaki elemanı kaldırır.
unshift(): Diziye yeni bir eleman ekler.
splice(): Belirli bir indeksten başlayarak belirli sayıda eleman ekler veya kaldırır.
slice(): Belirli bir bölümü kopyalar.
indexOf(): Belirli bir elemanın indeksini bulur.
concat(): İki veya daha fazla diziyi birleştirir.
*/

console.log(9%2)
console.log('-----------------------------------')
var age=21
if (age>18){
    console.log("Ehliyet alabilirsiniz")
}else{
    console.log("Ehliyet alamazsiniz")
}

