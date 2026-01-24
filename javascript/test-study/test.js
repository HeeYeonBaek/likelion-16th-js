// let count = 3

// // console.log(count++)
// // console.log(count)

// // console.log(count--)
// // console.log(count)

// console.log(++count)
// console.log(count)

// console.log(--count)
// console.log(count)

// let num = 10 + 21
// console.log(num)

// console.log(num += 2)
// console.log(num -= 2)
// console.log(num *= 2)
// console.log(num /= 2)
// console.log(num %= 2)
// console.log(num **= 2)

// const appleMango = "애플망고"
// const mangoCount = 9

// let Mango = appleMango + mangoCount

// console.log(Mango, typeof Mango)


// appleMangoice = mangoCount + appleMango
// console.log(appleMangoice, typeof appleMangoice)


// const cat = "Cat";
// const dog = "Dog";

// // "Cat"은 참 같은 값(Truthy)이므로, 뒤에 있는 "Dog"를 반환
// const result = cat && dog; 
// console.log(result); // "Dog" (true가 아님!)

// const memberName = '백건희'
// const customerName = '백태희'

// console.log(memberName < customerName)


// const actorName = '김우빈'
// const actressName = '신민아'

// console.log(actorName > actressName)

// // 색상 값(일상, 10진수) → 색상 코드(컴퓨터, 16진수) 변환
// const red = 255, green = 120, blue = 30


// //----------------------------------------------------------

// let hexCode = '#'
// const redHexValue = red.toString(16).padStart(2, '0')
// console.log(redHexValue)
// const greenHexValue = green.toString(16).padStart(2, '0')
// console.log(greenHexValue)
// const blueHexValue = blue.toString(16).padStart(2, '0')
// console.log(blueHexValue)

// console.log(hexCode += redHexValue)
// console.log(hexCode += greenHexValue)
// console.log(hexCode += blueHexValue)

// console.log(hexCode)

// //----------------------------------------------------------

// let redColor = red.toString(16).padStart(2,'0') 
// let greenColor = green.toString(16).padStart(2,'0') 
// let blueColor = blue.toString(16).padStart(2, '0')

// const tempHexCode = '#' + redColor + greenColor + blueColor

// console.log(hexCode)

// //----------------------------------------------------------

// colorCode = hexCode + red.toString(16).padStart(2, '0')
// colorCode = hexCode + green.toString(16).padStart(2, '0')
// colorCode = hexCode + blue.toString(16).padStart(2, '0')

// console.log(colorCode)


// const n1 = 0,  n2 = n1, 
//       n3 = 20,  n4 = 9, 
//       n5 = 11, n6 = n4, 
//       n7 = 8, n8 = 3.14

// const anwser = (n1 / n2 + n4- n3) * n5 * n8 / (n6 - n7)
// console.log(anwser) 


// const convertUsdToKRW = (USD, exchange) => {
//   const UsdToKRW = parseFloat(USD) * parseFloat(exchange) + '원'

//   return UsdToKRW
// }

// console.log(convertUsdToKRW(120.50, 1480))
// console.log(convertUsdToKRW('120.50', '1480'))
// console.log(convertUsdToKRW('120.50달러', '1480원'))


// console.log('9.99' === '9.99')

// const y = 10

// console.log('120' * y)


// console.log(true + 5)
// console.log(false + 5)
// console.log(Number(true))
// console.log(Number(false))
// console.log(4 * true)
// console.log(4 * false)
// console.log(4 - true)
// console.log(4 - false)
// console.log(4 / true)
// console.log(4 / false)


// var instruction = '오늘은 전사 휴무입니다.'

// function checkMeeting() {
//   console.log('업무 지시:' + instruction)
//   var instruction = '오늘은 모두 야근이다!'
// }

// checkMeeting()


// function confessAndBeRejected() {
//   console.log('할 말이 있어') // [1]

//   setTimeout(() => {
//     console.log('내 안에는 너 없거든')
//   }, 0) // [2]

//   function consfessions() {
//     console.log('내 안에 너 있다.')// [3]
//   }

//   setTimeout(() => {
//     console.log('꼭 그래야만 속이 시원 했냐!!') // [4]
//   }, 0)

//   consfessions()

//   console.log('아니. 못 들은 걸로 할께.') // [5]
// confessAndBeRejected()}



const original = ['공지사항', '리뷰', '문의사항']
const copy = original

copy.push('이벤트')
copy.pop()
copy.unshift('광고')

console.log(original[original.length - 1])

const searchHistory = ['HTML', 'CSS', 'JavaScript', 'React']
const searchTerm = 'JavaScript'
const searchIndex = searchHistory.indexOf(searchTerm)

if (searchIndex > -1) {
  const removedSearchItems = searchHistory.splice(searchIndex, 1)
  searchHistory.unshift(removedSearchItems.at(0))
}

const score = [82, 0, 98, 0, -10, 0]
let total = 0

score.forEach((score) => {
  if (score === 0) return
  total += score
})

console.log(total)

const user = ['상준', '주원', '현아']
const result = user.shift().indexOf('준')

console.log(result)

let count = 0, i = 1

while (i <= 10) {
  if (i % 3 === 0) count++
  if (i > 7) break
  i++
}

