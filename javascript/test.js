let count = 3

// console.log(count++)
// console.log(count)

// console.log(count--)
// console.log(count)

console.log(++count)
console.log(count)

console.log(--count)
console.log(count)

let num = 10 + 21
console.log(num)

console.log(num += 2)
console.log(num -= 2)
console.log(num *= 2)
console.log(num /= 2)
console.log(num %= 2)
console.log(num **= 2)

const appleMango = "애플망고"
const mangoCount = 9

let Mango = appleMango + mangoCount

console.log(Mango, typeof Mango)


appleMangoice = mangoCount + appleMango
console.log(appleMangoice, typeof appleMangoice)


const cat = "Cat";
const dog = "Dog";

// "Cat"은 참 같은 값(Truthy)이므로, 뒤에 있는 "Dog"를 반환
const result = cat && dog; 
console.log(result); // "Dog" (true가 아님!)

const memberName = '백건희'
const customerName = '백태희'

console.log(memberName < customerName)


const actorName = '김우빈'
const actressName = '신민아'

console.log(actorName > actressName)

// 색상 값(일상, 10진수) → 색상 코드(컴퓨터, 16진수) 변환
const red = 255, green = 120, blue = 30

let hexCode = '#'
const redHexValue = red.toString(16).padStart(2, '0')
console.log(redHexValue)
const greenHexValue = green.toString(16).padStart(2, '0')
console.log(greenHexValue)
const blueHexValue = blue.toString(16).padStart(2, '0')
console.log(blueHexValue)

hexCode += redHexValue
hexCode += greenHexValue
hexCode += blueHexValue


let redColor = red.toString(16).padStart(2,'0') 
let greenColor = green.toString(16).padStart(2,'0') 
let blueColor = blue.toString(16).padStart(2, '0')

const tempHexCode = '#' + redColor + greenColor + blueColor

console.log(hexCode)