// --------------------------------------------------------------------------
// 실습: 반복문 (Loops & Iteration)
// --------------------------------------------------------------------------
// * while : 조건이 참인 동안 계속해서 방을 점검합니다.
// * for : 정해진 횟수만큼 손님에게 인사합니다.
// * for...of : 배열 장부의 손님 이름을 하나씩 꺼냅니다.
// * for...in : 객체 장부의 상세 정보(Key)를 확인합니다.
// --------------------------------------------------------------------------

const draw = (n) => console.log('화면에' + n +  '번째그림을 그리다')

// 화면에 [n]번 드로잉 하고 싶다.
let count = 0
const REPEAT_COUNT = 5 // n번

while (++count > REPEAT_COUNT) {
  count += 1

  // continue : 건너뛰어서 계속
  // continue : [1], [2], 3, 4, [5]
  // breake: [1], [2], 3(중단)

  if (count >= 3 && count <= 4) {
    continue // 현재 코드에서 아래 코드 건너뛰고 다시 while 조건 확인 이동
  }

  if (count === 9) {
    break
  }

  draw(count)
  console.log(count)
}


/*
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
count = count + 1
console.log(draw(count))
*/

// --------------------------------------------------------------------------
// while 문 (조건을 먼저 본다) - if문과 같은 구조
// --------------------------------------------------------------------------

let iterationCount = 0
let condition = true


// 연명부
const people = ['한돌', '두돌', '세돌', '네돌', '...', '백돌']

// 연명부를 반복 순환
// 찾는 사람이 있다면 반복을 그만 멈춰라.

const who = '두돌'

// 반복문

let index = 0, personName = ''
/*
while (personName !== who) {
  personName = people.at(index)//'한돌'
  index += 1
}
*/

while (index < people.length) {
  personName = people.at(index) // '한돌'
  // 검색한 who와 pessonName이 같다면?
  // 반복을 그만 멈춰라.
  if (personName === who) {
    break // 반복문 중단
  }

  index += 1
}


// --------------------------------------------------------------------------
// 조건(if) 문 vs 반복(while)문
// --------------------------------------------------------------------------

// if...else 문(조건 흐름 제어문)
// 조건: ifCount가 5보다 적을 경우 참
// 조건이 "참"이면 코드 블록 1회 실행
let ifCount = 0

if (ifCount < 5) {
  ifCount = ifCount + 1
  console.log(ifCount)
}


// while 문(반복 흐름 제어문)
// 조건: 반복횟수가 5보다 작을 경우 참
// 조건이 "참"이면 코드 블록 실행 (조건이 참일 경우)

let whileCount = 0
let dontOver = true

/*
while (whileCount++ < 5) {
  interationCount = whileCount + 1
  whileCount +=
  whileCount ++
  console.log(++whileCount)

  console.log(whileCount)
}
*/

while (dontOver) {
  if (whileCount >= 5) {
    dontOver = false
  }
  console.log(whileCount)
  whileCount += 2
}


// ⚠️ 반복문이 멈추지 않으면?
// JavaScript는 한 번에 하나의 일만 할 수 있어
// 먼저 한 일이 멈추지 않으면  다음 일을 하지 못해요.
// "무한 반복(infinite Loop)"에 빠지지 않게
// 반복문 사용 시 주의가 필요합니다.
console.log('언제 멈춰?? 😡')

// --------------------------------------------------------------------------
// do...while 문 (조건을 나중에 본다)
// --------------------------------------------------------------------------

/* 
  while(조건){
    블록 안에 실행할 코드
  }
  
  do it : ~한다(조건과 상관없이 반드시 1회는 실행)
  while: ~동안(반복: 조건이 참인 동안)
*/

let i = 0

do{
  i+=1
} while (i < 10)
  
console.log(i)

// --------------------------------------------------------------------------
// for 문
// --------------------------------------------------------------------------

// while 문 > for 문 변경
{
  const TARGET_COUNT = 20 // 목표 값

  // while 문
  let iteration = 0 // 반복 횟수

  // 20번 반복 (0~19)
  while (iteration < TARGET_COUNT) {
    console.log(iteration)
    iteration += 1
  }

  // for 문
  /*
  for (let forCount = 0; forCount < TARGET_COUNT; forCount += 1){
    console.log(forCount)
  }
  */

  // for (
  //   let forCount = 0; // 변수 선언(1)
  //   forCount < TARGET_COUNT; // 변수와 값 비교(참 또는 거짓)(2)
  //   forCount += 1 // 변수 값 변경(4)
  // ) {
  //   console.log(forCount) // 비교 결과 조건이 참인 경우, 반복되는 코드 블록(3)
  // }

/*
// for문 -> while문 변신 단계: 0
for (let forCount = 0; forCount < TARGET_COUNT; forCount += 1) {
  console.log(forCount)
}

// for문 -> while문 변신 단계: 1
let forCount = 0;
for (forCount < TARGET_COUNT; forCount += 1) {
  console.log(forCount)
}

// for문 -> while문 변신 단계: 2
let forCount = 0
for (forCount < TARGET_COUNT) {
  console.log(forCount)
  forCount += 1
}

// for문 -> while문 변신 단계: 3
let forCount = 0
while (forCount < TARGET_COUNT) {
  console.log(forCount)
  forCount += 1
}*/
}

for (let i = 0, l = 10; i < l; i++) {
  console.log(i)
}

for (let i = 0; i <= 9; i++) {
  console.log(i)
}


// --------------------------------------------------------------------------
// 배열 반복 (역순/정순)
// --------------------------------------------------------------------------
const numbers = ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱']

// 배열 순환(while, for, do...while)

{
  // while
  let i = 0
  while (i < numbers.length) {
    const number = numbers[i]
    console.log(number)
    i++
  }

  // do..while
  do {
    const number = numbers[i]
    console.log(number)
    i++
  } while (i < numbers.length)
  
  // for [ i = iterator (반복자, i로 축약해서 사용) ]
  // for (let i = 0; i < numbers.length; ++i){
  //   const number = number[i]
  //   console.log(number)
  // }
}

{
  const books = ['html 공장', 'css 드레스샵', 'JavaScript 트레이닝 룸', '리엑트 마스터를 할 수 있을까?']

  // 도서 이름 출력 (반복)
  let i = 0
  while (i < books.length) {
    const bookName = books[i] 
    console.log(bookName)
    i = i + 1
  }

   do {
    const bookName = books[i]
    console.log(bookName)
    i = i + 1
  } while (i < books.length)

   
  for (let i = 0; i < books.length; i++) {
    const bookName = books[i]
    console.log(bookName)
  } 
}

// 역순(내림차순) 반복 처리
const webFrameworks = [
  'react',  //0
  'vue.js', // 1
  'svelte', // 2
  'angular', // 3
  'solid.js' // 4
]

// for문
for (let i = webFrameworks.length - 1; i >= 0; i = i -1){
  const frameWorkName = webFrameworks[i]
  console.log(i, frameWorkName)
}




// --------------------------------------------------------------------------
// for...of 문  array나 string
// --------------------------------------------------------------------------


const personList =[
  { name: '박주영', age: 22 },
  { name: '최한나', age: 31 },
  { name: '김상준', age: 29 },
] 

for (const person of personList) {
  console.log(person.name)
  console.log(person.age)
}

for (let i = 0; i < personList.length; i++) {
  const person = personList[i]
  console.log(person.name)
  console.log(person.age)
}

const message = '오늘 하루 너무 추워요~'
console.log(message.length)


// length 속성 가짐
// 각 요소의 인덱스를 가짐
// for (const character of message) {
//   console.log(character)
// }

// message 문자열을 하나 하나 순환(반복)해서 값을 출력해보고 싶어요.
// while, do..while, for, for...of

for (let i = 0; i < message.length; i += 1){
  const character = message[i]
  console.log(character)
}


// --------------------------------------------------------------------------
// for...in 문 (객체 반복) object
// --------------------------------------------------------------------------

// for...of는 반복 가능한 객체만 사용 가능
// 일반 객체는 반복 가능하지 않아서 사용할 수 없어요

const teacher = {
  name: '김데레사',
  age: 21,
  career: 26,
  subjects: ['웹 표준/접근성', 'HTML', 'CSS', 'Tailwind CSS', 'Sass'],
}

const teachers = [teacher]

// teacher 객체를 반복(속성 별, 값을 출력)
// for...of 문 쉽던데? 이걸 써볼까?
// for (const property of teacher) {
//   console.log(property)
// }

// 배열처럼 반복 가능한 객체만 for...of 문을 사용할 수 있어요.
for (const instructor of [teacher]) {
  console.log(instructor)
}

// 객체를 순환하려면 for...in 문을 사용하세요.

// '속성' in 객체

console.log(teacher)
console.log('name' in teacher)
console.log('subjects' in teacher)
console.log('age' in teacher);
console.log('career' in teacher)

for (const property in teacher) {
  const value = teacher[property]
  console.log(property)
  console.log(value)
}


// 객체를 순환(객체가 가진 속성을 모두 탐색해서 값을 확인)

const points = {
  x: 10,
  y: 13,
  z: 8,
}

const propName = 'x'

console.log('z' in points)
console.log(points['x'])
console.log(points[propName])

//for( const 속성이름변수 in 객체 )

for (const propName in points){
  console.log(propName)
  // 값 = 객체['속성이름']
  const value = points[propName]
  console.log(value)
}


{
  // 배열도 for...in문 사용 가능!(권장 안함, 비교적 느려서)

  const personList = [
    { name: '박주영', age: 22 },
        {name : '최한나', age: 31},
            {name : '김상준', age: 29},
  ]

  // for...of문
  for (const person of personList) {
    console.log(person)
  }

  // for...in문
  // 배열에서 for...in문 사용할 수 있지만,
  // 성능이 좋지 않으니 객체에 양보하세요.
  for (index in personList) {
    console.log(index)
    const person = personList[index]
    console.log(person)
  }
}

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 실습
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// [짝수 출력] for 문을 사용해 1부터 100까지의 숫자 중, 짝수만 출력
// --------------------------------------------------------------------------



 for (let i = 1; i <= 100; i = ++i){
   if (i % 2 === 0) {
     console.log(i)
   }
}
 
//  for (let i = 0; i < 101; i = 1 + 2){
//    if (i > 0) {
//      console.log(i)
//    }
// }
 
// --------------------------------------------------------------------------
//[카운트다운] while 문을 사용해 숫자 10부터 1까지 역순으로 출력
// --------------------------------------------------------------------------

let countDown = 10

while (countDown > 0) {
  console.log(countDown)
  // countDown = countDown - 1
  // countDown -= 1
  // countDown--
  --countDown
}

// --------------------------------------------------------------------------
// [과일바구니] for … of 문을 사용해 다음 배열의 과일 출력
// --------------------------------------------------------------------------

const fruits = ['사과', '바나나', '귤', '복숭아']

for (const fruit of fruits) {
  console.log(fruit)
}

// --------------------------------------------------------------------------
// [비밀번호 찾기] do … while 문을 사용해 입력된 비밀번호('3001') 매칭 검토 후 결과 출력
// --------------------------------------------------------------------------

{
  let i = 0, attempt

/*
const input = '3001', 
  attempts = ['0124', '8291', '8259', '3001', '9073']
  
  do {
    attempt = attempts[i++]
    console.log(attempt)
  } while (input !== attempt)
  
  console.log(attempt)
  */
  

// attempt = attempts[i + 3]
// console.log(attempt)
  // console.log(attempt === input)


let item // undefined

const list = ['0124', '8291', '8259', '3001', '9073']
const input = '3001'

do {
  item = list[i]
  // i = i + 1
  // i += 1
  i++
  console.log(item)
} while(input !== item)

console.log(item)
}

// --------------------------------------------------------------------------
// [성적표 출력] for … in 문을 사용해 객체의 key, value 출력
// --------------------------------------------------------------------------

const student = {
  name: '선호',
  grade: 'A',
  age: 22,
}

for (const key in student) {
  console.log(key)
  console.log(student[key])
}

// --------------------------------------------------------------------------
// 6. [까다로운 반복문] `1`부터 `20`까지 반복
   // a. `5`부터 `10`까지는 건너띄고 나머지 출력
   // b. `17`이 되면 반복 종료
// --------------------------------------------------------------------------

// for, while, do..while
// for...of, ofr...in

for (let i = 1; i <= 20; ++i) {
  if (1 > 4 && i < 11) continue
  if (i === 17) break
    console.log(i)
}

'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20'.split(', ')

for (const n of numbers) {
  const nNumber = Number(numString)
    if (n > 4 && n < 11) continue
    if (n === 17) break
    console.log(n)
}