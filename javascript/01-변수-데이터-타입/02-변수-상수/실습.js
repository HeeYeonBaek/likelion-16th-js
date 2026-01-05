// --------------------------------------------------------------------------
// 실습: 변수와 상수
// --------------------------------------------------------------------------
// * 변수 및 상수를 선언하고 콘솔 패널에 출력
//   - var, let / const
//   - 변수는 값을 다시 할당할 수 있음
//   - 변수는 값 할당 없이, 선언만 가능
//   - 상수는 값을 다시 할당할 수 없음
//   - 상수는 선언과 할당이 모두 필요
//   - 변수, 상수 모두 여러 개를 동시 선언 가능
// * 변수 이름 작성 규칙
//   - 문자, 숫자, 기호(_, $)만 사용 가능
//   - 숫자로 시작할 수 없음
// * 변수 이름 작성 형식
//   - variablename → 소문자(lowercase)
//   - VARIABLENAME → 대문자(UPPERCASE)
//   - variable_name → 스네이크케이스(snake_case)
//   - variableName → 카멜케이스(camelCase)
//   - VariableName → 파스칼케이스(ParscalCase)
//   - variable-name → 케밥케이스(kebab-case) ❌ 사용 못함
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// let을 사용한 변수 선언
// --------------------------------------------------------------------------

// 변수 선언과 동시에 값 할당
// x = 4

// let 가지고; // 가지고 변수 선언됨
// 있는_사과_개수 = 4 // 있는_사과_개수 변수는???? 모르겠다. 오류!!!

// 변수 선언 (한글, 학습 과정에서 권장, 프로젝트 또는 현업에서는 권장 안함)
let 가지고_있는_사과_개수 = 4
let 추가_구매한_사과_개수 = 27

// 변수 값 재할당 가능
let initialApples = 4
let init_apple_count = 4


console.log('가지고_있는_사과_개수:', 가지고_있는_사과_개수)
console.log('추가_구매한_사과_개수:', 추가_구매한_사과_개수)
console.log('initialApples:', initialApples)
console.log('init_apple_count:', init_apple_count)

//  truthy ❌ ReferenceError : truthy is not defined
// 변수 이름으로 truthy를 사용하면 ✅

let truthy = true
let falsy = false
let yes = true
let no = false
let 할게요 = true
let 안할게요 = false

console.log('truthy: ', truthy)
console.log('falsy: ', falsy)
console.log('yes: ', yes)
console.log('no: ', no)
console.log('할게요: ', 할게요)
console.log('안할게요: ', 안할게요)

//선언된 변수 값 재할당 가능
truthy = false
console.log('truthy 변수에 재할당 된 값:', truthy)

// 선언만 하고 나중에 할당
let gamePlayer // 변수 선언

gamePlayer = '라모스' // 선언된 변수에 값을 할당

console.log(gamePlayer)

// 여러 변수 동시 선언
// let screen_width = 290
// let screen_height = 842

// 여러 변수 선언과 동시에 값 할당
let x = 4, y = 8

// 여러 변수 선언 만(값 없이)
let screen_width, screen_height

// 이후에 선언된 변수에 값 할당
screen_width = 290
screen_height = 842
console.log('screen_width:', screen_width)
console.log('screen_height:', screen_height)

// 여러 변수 선언만 (값 없이)


// --------------------------------------------------------------------------
// const를 사용한 상수 선언
// --------------------------------------------------------------------------

// 상수 선언과 동시에 값 할당 (필수!)
const 상수 = '고정된 값'
console.log(상수)

// 상수는 재할당 불가능
// ❌ 에러 발생! TypeError: Assignment to constant variable.
// const 상수
// 상수 = '고정된 값'

// 상수는 선언과 동시에 할당 필수
// ❌ 에러 발생! SyntaxError: Missing initializer

// 여러 상수 동시 선언
// 상수는 Upper Case(대문자)로 선언한다.

const MIN_VALUE = 10, MAX_VALUE = 100
console.log(MIN_VALUE, MAX_VALUE)


// --------------------------------------------------------------------------
// var를 사용한 변수 선언 (사용 권장 안함)
// --------------------------------------------------------------------------

// var 변수 선언
var incrementCount = 9
var incrementCount = 21
console.log(incrementCount)

// var는 재선언 가능 (문제가 될 수 있음)
// ✅ 에러 없음 (하지만 위험!)

// let은 재선언 불가능
// ❌ 에러 발생! SyntaxError


// --------------------------------------------------------------------------
// 변수 이름 작성 규칙
// --------------------------------------------------------------------------

// ✅ 올바른 변수 이름
let cross_meter
let fontSize
let px2rem
let _private
let $dollor
let unit25cm


// ❌ 잘못된 변수 이름 (주석 처리)

// * 공백 사용 불가
// -> let cross meter

// * _, $를 제외한 특수문자(-, #, @, !) 사용 불가
// -> let font-size
// -> let #sharp
// -> let @at
// -> let !exclamation

// * 숫자로 시작 불가(처음에만 숫자가 오면 안된다.)
// -> let 26cm
 
// * 예약어(Reserved word) 사용 불가
// -> let break = '부숴!'
/**
 * continue
 * break
 * let
 * const
 * new
 * class
 * ....
 */

// --------------------------------------------------------------------------
// 변수 이름 작성 형식 (네이밍 컨벤션: Naming Convention)
// --------------------------------------------------------------------------

// 카멜 케이스 (camelCase) - 변수 또는 함수 이름 권장
let eatApple

// 파스칼 케이스 (PascalCase) - 클래스, 생성자
let CookingApple

// 스네이크 케이스 (snake_case) - 변수 이름 권장
let apple_pie

// 소문자 (lowercase) - 간단한 변수
let Applejuice

// 대문자 (UPPERCASE) - 상수(constant)
let APPLEICE

// 케밥 케이스 (kebab-case) - JavaScript에서 사용 불가 ❌
// ❌ 에러 발생!


// --------------------------------------------------------------------------
// 사용자 정보 관리
// --------------------------------------------------------------------------

// 사용자 기본 정보 (let 사용 - 변경 가능)
{// * 이름
let userName = '희연'
// * 나이
let userAge = 10
// * 이메일
let userEmail = 'asd95121@naver.com'

console.log('변경 전:', userName, userAge, userEmail)

// 정보 업데이트
userName = '건희'
userAge = 8
userEmail = 'dogpome@naver.com'

  console.log('변경 후:', userName, userAge, userEmail)
}
// 시스템 설정 (const 사용 - 변경 불가)
// * 시스템 이름
const SYSTEM_NAME = 'macOS'
// TypeError = 상수에 다른 값을 할당하려 했기 때문
// SYSTEM_NAME = 'windows'
// * 시스템 버전
const SYSTEM_VERSION = '15.6.2'
// * 최대 로그인 시도 횟수
const MAX_LOGIN_ATTEMPTS = 5
// * 세션 타임아웃
const SESSION_TIMEOUT = 3000




// --------------------------------------------------------------------------
// 쇼핑몰 상품 관리
// --------------------------------------------------------------------------

// 상품 정보 (변경 가능한 변수)
// * 상품 이름
let productName = '노트북'
// * 상품 가격
let productPrice = 98000
// * 상품 재고
let productInventory = 102
// * 상품 카테고리
let productCategory = '디지털 기기 / 랩탑'

// 시스템 상수 (변경 불가)
// * 부가세 10%
const SURTAX = 0.1
// * 무료배송 기준 40,000원
const SHIPPING_FREE = 40000
// * 최소 주문 금액 10,000원
const MIN_ORDER_AMOUNT = 10000

console.log(SURTAX)
console.log(SHIPPING_FREE)
console.log(MIN_ORDER_AMOUNT)


// --------------------------------------------------------------------------
// let vs const 선택 가이드
// --------------------------------------------------------------------------

// const 사용
// 변경할 필요 없는 값
const USER_SECRET_KEY = 'dksljsklajsdkf'

// let 사용
let phoneNumber = '010-9999-2222'
// 값이 변경될 수 있는 값


// --------------------------------------------------------------------------
// 실습 문제
// --------------------------------------------------------------------------

// 문제 1: 학생 정보를 저장하는 변수를 만드세요.
// - 이름 (변경 가능)
let studentName = '백희연'
// - 학년 (변경 가능)
let grade = '3'
// - 학번 (변경 불가)
const STUDENT_NUMBER = '260105'
// - 학교 이름 (변경 불가)
const SCHOOL_NAME = '서울대학교'

// 문제 2: 도서관 책 정보를 저장하는 변수를 만드세요.
// - 책 제목 (변경 불가)
const BOOKNAME = '모던 자바스크립트 딥다이브'
// - 저자 (변경 불가)
const BOOKWRITER = '이웅모'
// - 대출 가능 여부 (변경 가능)
let LoanAvailability = 'possible'
// - 대출 횟수 (변경 가능)
let NumberofLoans = '3'

// 문제 3: 온라인 쇼핑몰 장바구니를 만드세요.
// - 상품명 (변경 불가)
const PRODUCTNAME = '춘배키링'
// - 가격 (변경 불가)
const PRODUCT_PRICE = 13000
// - 수량 (변경 가능)
let productNumber = 112
// - 총 금액 (변경 가능)
let totalPrice = 15000


// --------------------------------------------------------------------------
// 요약 및 베스트 프랙티스
// --------------------------------------------------------------------------

/*
✅ let vs const 선택 가이드
1. 기본적으로 const 사용 (변경하지 않을 값)
2. 값이 변경되어야 할 때만 let 사용
3. var는 사용하지 않기 (구식, 문제 많음)

✅ 변수 이름 규칙
1. 의미 있는 이름 사용 (x, y 대신 user_name, totalPrice)
2. 카멜케이스 사용 (JavaScript 표준)
3. 상수는 대문자와 언더스코어 (MAX_COUNT, API_KEY)
4. 숫자로 시작 불가
5. 예약어 사용 불가

✅ 좋은 예시                      
const MAX_USERS = 100
const API_URL = 'https://api.example.com'
let current_user = 'hong@89'
let itemCount = 0

❌ 나쁜 예시
var x = 100               // 의미 없는 이름, var 사용
let user-name = 'hong@89' // 케밥케이스 사용 불가
let 1user = 'kim'         // 숫자로 시작 불가
*/


// let 날_기억해봐요 = '나의 이름은 희연입니다.'
// console.log(날_기억해봐요)