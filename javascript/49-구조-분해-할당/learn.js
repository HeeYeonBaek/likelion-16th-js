// --------------------------------------------------------------------------
// 실습: 객체 구조 분해 할당 (Object Destructuring)
// --------------------------------------------------------------------------

// [실습] 기본 객체 분해 및 이름 변경
// 1. user 객체를 선언하고 name, email 속성을 담으세요.
// 2. 구조 분해 할당을 통해 name은 그대로, email은 userEmail이라는 이름으로 할당하세요.
// 3. 존재하지 않는 nickname 속성을 가져오되, 기본값으로 '익명'을 설정하세요.
console.groupCollapsed('객체 구조 분해 할당 실습')

const myNoteBook = {
  name: 'macbook Pro',
  cpu: 'm4',
  ram: '32GB',
  ssd: '2TB',
  maker: 'Apple',
}

// 객체의 속성(property 또는 key) 이름을
// 범위(scope) 내 변수로 정의하고
// 변수의 각 속성에 매칭되는 값을 할당한다면?

const maker = myNoteBook.maker
const ssd = myNoteBook.ssd
const cpu = myNoteBook.cpu
const ram = myNoteBook.ram

console.log(maker, cpu, ram, ssd)
console.log(myNoteBook)

// 더 편리하고 유용해서 많이 사용되는 인기있는 방법
// 구조 분해 할당(Destructuring Assignment) 구문

{
  // myNoteBook 객체의 구조 : {maker, ssd, cpu, ram, name}

  const { maker, ssd, cpu, ram, name } = myNoteBook
  console.log(maker, ssd, cpu, ram, name)
}

{
  // myNotebook 객체의 구조: { brand, processor, ram, ssd, maker }
  const { 
    brand: name,  // myNotebook 객체의 brand 속성 값을 지역 변수 name 할당
    processor: cpu, 
    memory, // myNotebook 객체에 없는 속성 이름 (값: undefined)
    ssd, 
    maker } = myNoteBook

  // console.log(brand, processor, ram, ssd, maker)
  console.log(name, cpu, memory, ssd, maker)
}

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 배열 구조 분해 할당 (Array Destructuring)
// --------------------------------------------------------------------------

// [실습] 순서에 따른 배열 분해
// 1. [x, y, z] 좌표 값을 담은 배열을 생성하세요.
// 2. 구조 분해 할당을 사용하여 각 좌표를 개별 변수에 담아 출력하세요.
// 3. 배열에 값이 두 개뿐일 경우를 대비해 세 번째 변수에 기본값 0을 설정하세요.
console.groupCollapsed('배열 구조 분해 할당 실습')

const point = [92, -24, 9] //[x, y, z]

{
  const x = point.at(0)
  const y = point.at(1)
  const z = point.at(2)

  console.log(x,y,z)
}

{
  const [x, y, z] = point

  console.log(x, y, z)
}

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 함수 매개변수 구조 분해 (Function Parameter Destructuring)
// --------------------------------------------------------------------------

// [실습] 함수 인수에서의 활용
// 1. 상품명(title)과 가격(price)을 속성으로 가진 객체를 인자로 받는 printProduct 함수를 만드세요.
// 2. 함수의 매개변수 자리에서 즉시 구조 분해를 수행하세요.
// 3. 템플릿 리터럴을 사용하여 상품 정보를 출력해 보세요.
console.groupCollapsed('함수 매개변수 구조 분해 실습')

function printProduct(product) {
  return `"${product.title}" 제품은 ${product.price.toLocaleString()}원 입니다.`
}

function printProductDA(product) {
  const { title, price } = product
  return `"${title}"제품의 가격은 ${price.toLocaleString()}원입니다.`
}

function printProductinParams({ title, price }) {
  return `"${title}"제품의 가격은 ${price.toLocaleString()}원입니다`
}

console.log(printProduct({ title: '샘표 진간장', price: 10500 }))
console.log(printProductDA({ title: '다이제 초코맛', price: 3600 }))
console.log(printProductinParams({title: '로스팅 짜장면 파기름맛 5봉', price:4800}))


// 함수가 배열 타입을 매개변수로 전달받는다면?

function printFriendsStep1(friends) {
  const friend1 = friends.at(0)
  const friend2 = friends.at(1)
  const friend3 = friends.at(2)
  const friend4 = friends.at(3)
  console.log(friend1)
  console.log(friend2)
  console.log(friend3)
  console.log(friend4)
}


function printFriendsStep2(friends) {
  const [friend1, friend2, friend3, friend4] = friends

  console.log(friend1)
  console.log(friend2)
  console.log(friend3)
  console.log(friend4)
}


function printFriendsStep3([friend1, friend2, friend3, friend4]) {
  console.log(friend1)
  console.log(friend2)
  console.log(friend3)
  console.log(friend4)
}

console.log(printFriendsStep1(['백건희', '백태희', '김춘배', '김영철']))
console.log(printFriendsStep2(['백건희', '백태희', '김춘배', '김영철']))
console.log(printFriendsStep3(['백건희', '백태희', '김춘배', '김영철']))


console.groupEnd()

// --------------------------------------------------------------------------
// 구조 분해 할당 + 기본 값 설정
// --------------------------------------------------------------------------

{
  const myCup = {
    name: '머그컵',
    color: '보라색',
    material: '도자기',
    price: 25000,
   // isPresent: false
  }

  const yourCup = {}

  // 만약 myCup 객체에 isPresent 속성이 없다면?
  // isPreset 속성의 기본 값을 할당하자.
  const {
    name = 'Mug Cup',
    color = 'white',
    material = 'plastic',
    price = '2000',
    isPresent = true
  } = yourCup // myCup
  
  console.log(name, color, material, price)
  console.log(isPresent)

  // 함수의 매개변수를 구조분해할당하는 단계별 이해

  // 단계 1.

// 함수의 매개변수를 구조분해할당하는 단계별 이해

  // 단계 1.
  function printInfoStep1(product) {
    const name = product.name || 'Mug Cup'
    const color = product.color || '민트색'
    const material = product.material || '플라스틱'
    const price = product.price || 3000
    const isPresent = product.isPresent || true

    console.log('name =', name)
    console.log('color =', color)
    console.log('material =', material)
    console.log('price =', price)
    console.log('isPresent =', isPresent)

    // 암묵적으로 undefined 반환
    // return undefined
  }

  console.log(printInfoStep1(myCup))
  console.log(printInfoStep1({
    color: '골드색',
    price: 27000,
  }))

// 단계 2.
function printInfoStep2(product) {
  // 객체 구조 분해 할당 활용
  // product // { name, color, material, price, isPresent }
  const { 
    name = 'Mug Cup', 
    color = '민트색', 
    material = '플라스틱', 
    price = 3000, 
    isPresent = true 
  } = product

  console.log('name =', name)
  console.log('color =', color)
  console.log('material =', material)
  console.log('price =', price)
  console.log('isPresent =', isPresent)

  // 암묵적으로 undefined 반환
  // return undefined
}

console.log(printInfoStep2(myCup))
console.log(printInfoStep2({
  color: '골드색',
  price: 27000,
}))

// 단계 3.
// 매개변수 영역에서 객체 구조 분해 할당 활용
function printInfoStep3({ 
  name = 'Mug Cup', 
  color = '민트색', 
  material = '플라스틱', 
  price = 3000, 
  isPresent = true, 
}) {
  console.log('name =', name)
  console.log('color =', color)
  console.log('material =', material)
  console.log('price =', price)
  console.log('isPresent =', isPresent)
}

console.log(printInfoStep3(myCup))
console.log(printInfoStep3({
  color: '골드색',
  price: 27000,
}))


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 객체 분해: {}를 사용하며, '키(Key) 이름'이 일치해야 합니다.
// 2. 배열 분해: []를 사용하며, '순서(Index)'에 따라 값이 할당됩니다.
// 3. 이름 변경: { 원본키: 새이름 } 구문으로 변수명을 바꿀 수 있습니다.
// 4. 기본값: = 기호를 사용하여 데이터가 없는 상황(undefined)을 안전하게 대비합니다.
// 5. 함수 활용: 매개변수 위치에서 바로 분해하면 함수 내부가 훨씬 깔끔해집니다.
// --------------------------------------------------------------------------