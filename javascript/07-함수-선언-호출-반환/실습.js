// --------------------------------------------------------------------------
// 함수 요약
// --------------------------------------------------------------------------
// * 함수 선언(정의)
// * 함수 호출(사용, 실행)
// * 함수 반환(결과 값)
// * 함수 확장(매개변수, 인자)
// * 함수 종료(중단)
// * 함수 표현식: 변수 = 함수(값)
// --------------------------------------------------------------------------

// 함수 정의
// 1. 함수 선언문
function logger(nth, fightingMessage) {
  // 함수 안에 지역변수 선언
  let resultLog = '멋사 프론트엔드 부트캠프'
  const numberNth = parseInt(nth, 10)

  // 특정 상황(조건)이 확인되면 함수를 여기서 종료하겠다.
  // return resultLog + ' ' + numberNth + '기 여러분! 중도 이탈은 안되요!! 💦'
  // 종료 이후엔 코드 실행이 안됨

  // 암묵적으로 undefined 반환
  // return

  // 명시적으로 결과 값 반환
  return resultLog + ' ' + numberNth + '기 ' + fightingMessage
}

// 함수 실행(사용, 호출)
console.log(logger('16기', '여러분 힘내세요! 💪'))
console.log(logger(14, '멋진 개발자되세요! 😊'))
console.log(logger(12, '월급 많이 받으세요~ 🍀'))


// 2. 함수 표현식
// const 변수 = 함수(값)
const myLogger = function(nth, message) {
  let resultMessage = ''
  resultMessage += '멋사 ' + parseInt(nth, 10) + '기 여러분!'
  resultMessage += ' '
  resultMessage += message
  resultMessage += '🥳'

  return resultMessage
}

console.log(myLogger(16, '오늘도 행복하세요!'))


// 표 생성하는 함수(기능)
// JavaScript를 사용해 마크업 (구조 설계)
function 표_만들기(표_제목) {
  // const 표_마크업 = '<table><caption>' + 표_제목 + '</caption><tr><th scope="col">셀 제목 1</th><th scope="col">셀 제목 2</th></tr><tbody><tr><td>셀 내용 1</td><td>셀 내용 2</td></tr></tbody></table>'
  
  let 표_마크업 = ''
  표_마크업 += '<table>'
  표_마크업 += '  <caption>' + 표_제목 + '</caption>'
  표_마크업 += '  <tr>'
  표_마크업 += '    <th scope="col">셀 제목 1</th>'
  표_마크업 += '    <th scope="col">셀 제목 2</th>'
  표_마크업 += '  </tr>'
  표_마크업 += '  <tbody>'
  표_마크업 += '    <tr>'
  표_마크업 += '      <td>셀 내용 1</td>'
  표_마크업 += '      <td>셀 내용 2</td>'
  표_마크업 += '    </tr>'
  표_마크업 += '  </tbody>'
  표_마크업 += '</table>'

  return 표_마크업
}

console.log(표_만들기('JavaScript로 마크업하기!'))
console.log(표_만들기('HTML로 마크업하기!'))

// --------------------------------------------------------------------------
// 실습: 함수 (Function)
// --------------------------------------------------------------------------
// * 함수는 입력(Input) -> 처리(Processing) -> 출력(Output)을 담당하는 기능입니다.
// * 매개변수(Parameter)와 인자(Argument)의 차이를 이해해야 합니다.
// * 함수는 값을 반환(return)할 수 있으며, 값으로 취급됩니다.
// --------------------------------------------------------------------------

//"너 어디가니? 무엇을 하러 가니?"

// 매일 일어나는 절차(일의 순서)
function 우물기르기_퀘스트(양동이_종류/*작은 또는 큰 양동이*/){
  console.log(양동이_종류 + '를 챙겨요.'),
    console.log('마을 북쪽 우물로 이동해요.'),
    console.log('우물에서 물을 길어요!'),
    console.log('조심스럽게 양동이를 이고 마을로 돌아와요.')
  
  //함수 결과 반환(값)
  return '깨끗하게 길러온 우물의 물~'
}


//"너 어디가니? 무엇을 하러 가니?"
//우물기르기_퀘스트() // 기능(function, 함수) 호출(call, 실행)
//우물기르기_퀘스트(추가_조건)
const result = 우물기르기_퀘스트('작은 양동이') //"세수용 물 길러가요!" 
console.log(result) //'깨끗하게 길러온 우물의 물~'

//"너 어디가니? 무엇을 하러 가니?"
//물_길러가요
console.log(우물기르기_퀘스트('큰 양동이'))//"빨래용 물 길러가요!"




// --------------------------------------------------------------------------
// 기본 함수 선언과 호출
// --------------------------------------------------------------------------

// code block
{
  // code
}

// 함수 선언 (기능 정의)
// 어떤 기능을 만들고 싶은가?
// - 무언가를 하는데...어라? 자꾸 반복하네?
// - 이거...재사용 하면 좋겠는데? 아하! 함수를 선언하자!


// 함수 호출 (기능 사용)
// "라면 끓이기 기능을 만들고 싶어!!"
function 라면_끓이기(라면, 다른_재료) {
  //함수가 처리해야 할 절차
  console.log('1. 냄비에 물 올리기')
  console.log('2. 끓는 물에 라면사리와 스프 넣기')
  console.log('3. 3분 끓이기 (면발 탱글탱글하게)')
  console.log('4. 냄비에서 그릇으로 옮겨담기')
  console.log('5. 김치 챙기기')

  //함수가 반환하는 값
  //함수 중단 : 함수 내부에서 return을 만나면 JS 엔진이 더 실행하지 않고 중단
  return 다른_재료 + '를 넣어 더 맛있게 끓여진' + 라면
  
  // console.log('왜 실행 안해요?')
  // console.log('이유는 JS 엔진이 함수 내부에서 return을 만났거든요!')
}


// 설명: 함수 이름 뒤에 소괄호 ()를 붙여서 실행(Call)합니다.
console.log(라면_끓이기('진라면', '파'))
// 출력 결과:
// '물 길러가!'
// '1. 양동이 챙기기'
// '2. 우물 다녀오기'


// --------------------------------------------------------------------------
// 매개변수와 인자
// --------------------------------------------------------------------------

// 성과 이름을 전달 받아 이름을 출력하는 함수 작성
// 설명: 함수 정의 시 변수는 '매개변수', 호출 시 전달하는 값은 '인자'입니다.
// 출력 결과:
// 성 = 지
// 이름 = 훈

// 인자를 전달하지 않은 경우
// 설명: 값을 전달하지 않으면 매개변수는 `undefined`가 됩니다.
// 출력 결과:
// 성 = undefined
// 이름 = undefined


// --------------------------------------------------------------------------
// 반환문 (Return)
// --------------------------------------------------------------------------

// 두 수를 합(add)한 결과를 반환하는 함수 작성
// 설명: `return` 키워드는 값을 반환하고 함수 실행을 즉시 종료합니다.
// 출력 결과: 결과값: 두 수의 합 (number)

// 암묵적 반환
// 설명: `return`이 없는 함수는 암묵적으로 `undefined`를 반환합니다.
// 출력 결과: undefined


// --------------------------------------------------------------------------
// 표현식 전달 (평가 순서)
// --------------------------------------------------------------------------

function sum(x, y, z) {
  return x + y + z
}

console.log(sum(4+6, 0.5+10.5, 12 - 2 +2))


// 두 수의 곱(multiply)을 계산해 결과를 반환하는 함수 작성

function multiply(num1, num2) {
  return num1 * num2
}

console.log(multiply(2, 2))
console.log(multiply(140, 359))

// 함수 호출 안에 다른 함수 호출(표현식)이 있는 경우
// 설명:
// 1. multiply(3, 5)가 먼저 평가(실행)되어 10이 됨
// 2. add(15, 12)이 실행됨
// 출력 결과: 27

function add(x, y) {
  return x + y
}

const result1 = add(15, 12)
const result2 = add(multiply(5,3), 9 + 3) //인자값으로 함수와 표현식을 넣을 수 있다.
console.log(result1)
console.log(result2)

// --------------------------------------------------------------------------
// 함수 표현식 (Function Expression)
// --------------------------------------------------------------------------

//JavaScript
// 기본 타입
// 1.String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// 객체타입
// 1. Object
// 2. Array
// 3. Function
// ----> 값(Value) 일급 함수, 일급 객체


// 변수에 함수를 값처럼 할당
// 설명: 함수는 '값'이므로 변수에 할당할 수 있습니다. (익명 함수 사용)

// 함수 선언
function 함수이름() {
  console.log('나는 이름이 없습니다.')
  console.log('익명 함수')
  console.log('무명함수')
}

// 함수 표현식(Function Expression)
// JavaScript 세상에서 함수는 `값`
// 변수에 값을 할당
// 함수는 값이므로 변수에 함수를 값으로 할당
// 변수에 할당하는 함수 이름은 없어도 되요.(익명 함수)

const 나의_함수 = function (정체) {
  return 정체 + ': 함수는 값이므로 변수에 할당 가능'
}

console.log(나의_함수('함수 표현식'))


// 두 수의 차(subtract)를 계산해 결과를 반환하는 함수 작성
// 출력 결과: 7


// --------------------------------------------------------------------------
// 핵심!
// --------------------------------------------------------------------------
// 1. 매개변수(Parameter)는 '빈 상자(변수)', 인자(Argument)는 '실제 내용물(값)'입니다.
// 2. `return`을 만나면 함수는 그 즉시 종료되고 값을 반환합니다.
// 3. 함수에 수식이나 다른 함수를 넣으면, 먼저 계산(평가)된 뒤에 결과값이 전달됩니다.


// 함수(기능) 만들기

// 1. 함수 선언

function logger(logMessage) {
  console.log(logMessage)
}

// 2. 함수 표현식 (변수 = 함수값)
const pxToRem = function (pxValue) {
  // 암묵적 반환 - return undefined

  // 명시적 반환
  // 명시적 타입 변환
  return parseInt(pxValue) / 16 + 'rem'
  
}


// rem단위를 px로 바꾸기
console.log(pxToRem(24))
console.log(pxToRem('24px'))

const RemToPX = function (remValue) {
  return parseInt(remValue) * 16 + 'px'
}

function rem2px(remValue) {
  return parseFloat(remValue) * 16 + 'px'
}

console.log(RemToPX(1))
console.log(RemToPX("2.5"))

console.log(rem2px(1.5))


//--------------------------------------------------------


// 피자 한 판 가격 계산하기
function pizza(PizzaCount, price) {
  // 피자 1판 가격
  return parseFloat(PizzaCount * price) + '원'
}

console.log(pizza(5, 19000))


// 주차요금 계산 함수
let parkingBasicPrice = 1000
let basicTimer = 60

function parking(timer) {
  return parseFloat(timer + parkingBasicPrice * basicTimer) + '원'
}

console.log(parking(5))


