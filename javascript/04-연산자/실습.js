// --------------------------------------------------------------------------
// 실습: 연산자
// --------------------------------------------------------------------------
// * 산술 연산자 (Arithmetic Operators)
// * 할당 연산자 (Assignment Operators)
// * 논리 연산자 (Logical Operators)
// * 비교 연산자 (Comparison Operators)
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// [산술 연산] 기본 사칙연산
// --------------------------------------------------------------------------

// 덧셈 (+)
console.log(3+9)

// 뺄셈 (-)
console.log(3-6)

// 곱셈 (*)
console.log(3 * 9)

// 나눗셈 (/)
console.log(9 / 3)

// 나머지 (%)
console.log(9 % 3)
console.log((9 + 1) % 3)
console.log((9 + 2) % 3)
console.log((9 + 3) % 3)
console.log((9 + 4) % 3)
console.log((9 + 5) % 3)


// --------------------------------------------------------------------------
// [산술 연산] 나머지 연산자 활용
// --------------------------------------------------------------------------

// 짝수/홀수 판별
console.log(10 % 2) //짝수
console.log(11 % 2) //홀수
console.log(12 % 2) //짝수


// 3의 배수 확인

console.log(9 % 3) // 3의배수
console.log(13 % 3) // 3의배수 ❌
console.log(27 % 3)

// 시계 계산 (12시간 형식. 예: 오후 3시)
console.log(10 % 12)
console.log(15 % 12)
console.log(19 % 12)
console.log(21 % 12)
console.log(16 % 12)

//거듭 제곱 연산자(**)
console.log(2 * 2 * 2 * 2 * 2, 2**5)

//수학(Meth) 객체
console.log(Math.pow(2, 8) === 2 ** 8)

// 복리 계산
const principal = 1_0_000_000 // 원금 100만원
const rate = 0.05 // 연 5% 이자율
const years = 3 // 3년
const amount = principal * (1 + rate) ** years //원금 * (1+이자율)몇년간(거듭제곱)
console.log(amount)


// --------------------------------------------------------------------------
// 할당 연산자
// --------------------------------------------------------------------------

let x = 10 + 21
console.log(x)

// 기본 할당
x = 8
console.log(x)

// 더한 후, 할당
//x = x + 2
// 복합 할당 연산자(할당 + 산술 연산자)
x += 2 // X에 2를 더해서 할당하라
console.log(x)

// 뺀 후, 할당
//x = x - 9

x -= 9
console.log(x)

// 곱한 후, 할당
//x = x * 2

x *= 2
console.log(x)

// 나눈 후, 할당
//x = x / 2

x /= 2
console.log(x)

// 나머지 후, 할당
//x = x % 3
x %= 3
console.log(x)

// 거듭제곱 후, 할당
//x = x ** 1000
x **= 1000
console.log(x)

// --------------------------------------------------------------------------
// [산술 연산] 증가/감소 연산자
// --------------------------------------------------------------------------


// 증가(++) 연산자
// 감소(--) 연산자
// 주의! 전위(앞)/후위(뒤) 위치에 따라 작동 방식이 달라짐


let count = 3
console.log(count)

// 후 증가 (Post-increment)
//count = count + 1
console.log(count++)
console.log(count)

// 선 증가 (Pre-increment)

console.log(++count)
console.log(count)

// 후 감소 (Post-decrement)
console.log(count--)
console.log(count)

// 선 감소 (Pre-decrement)
console.log(--count)
console.log(count)



// --------------------------------------------------------------------------
// [할당 연산] 점수 누적
// --------------------------------------------------------------------------
let totalScore = 0

totalScore += 92
totalScore += 100
totalScore += 81

console.log(totalScore)

// [할당 연산] 재고 감소
let stock = 100

stock -= 2
stock -= 60
stock -= 5

console.log(stock)

// [할당 연산] 가격 인상
let price = 10000
price *= (1+0.05) // 5% 인상

console.log(price)




// --------------------------------------------------------------------------
// [산술 연산] 문자열 연결
// --------------------------------------------------------------------------

// 문자열 + 문자열

const 성 = 4 //'희'
const 이름 = 40  //'연'
console.log(성+이름)
console.log('희'+'연')

// 문자열 + 숫자 (숫자가 문자열로 변환됨)
//문자열 + 숫자 ?????
// 문자열 + '숫자' (문자열화) = 문자열


const greetingMessage = '안녕!'
const myFavoriteNumber = 9

let result = greetingMessage + myFavoriteNumber
// const result = '안녕!' + 9
// const result = '안녕' + '9' >> 숫자 데이터를 문자화

console.log(result, typeof result)

// 숫자 + 문자열
result = myFavoriteNumber + greetingMessage
// result = 9 + '안녕!'
// result = '9' + '안녕!'
console.log(result, typeof result)



// --------------------------------------------------------------------------
// [산술 연산] 거듭제곱
// --------------------------------------------------------------------------

// 거듭제곱 (**)
// 8 (2의 3승)
// 9 (3의 2승)
// 1 (어떤 수의 0승은 1)
// 0.1 (음수 지수)

// Math.pow()와 동일
// 8
// 9
// 1
// 0.1





// --------------------------------------------------------------------------
// [논리 연산] AND (&&)
// --------------------------------------------------------------------------

// X && Y (X 그리고 Y)
// 모든 조건이 true여야 true

// 예제: 로그인 & 권한 검증
//  Netflix 구독 (계정 소유 && 사용료 지불)
let is_logged_in = false
let has_permission = false

// 로그인 ❌ 권한 ❌ 출력 결과: false
console.log(is_logged_in && has_permission)

// 로그인 ✅ 권한 ❌ 출력 결과: false
is_logged_in = true
console.log(is_logged_in && has_permission)

// 로그인 ❌ 권한 ✅ 출력 결과: false
is_logged_in = false
has_permission = true

console.log(is_logged_in && has_permission)

// 로그인 ✅ 권한 ✅ 출력 결과: true
is_logged_in = true
console.log(is_logged_in && has_permission)


// --------------------------------------------------------------------------
// [논리 연산] OR (||)
// --------------------------------------------------------------------------


// X || Y (X 또는 Y)
// 조건 중 하나만 true여도 true

// 예제: 이상형 확인
let is_handsome
let is_rich
// 잘생김 ❌ 부자 ❌ 출력 결과: false

is_handsome = false
is_rich = false

console.log(is_handsome || is_rich)

// 잘생김 ❌ 부자 ✅ 출력 결과: true
is_rich = true
console.log(is_handsome || is_rich)

// 잘생김 ✅ 부자 ❌ 출력 결과: true
is_handsome = true
is_rich = false
console.log(is_handsome || is_rich)

// 잘생김 ✅ 부자 ✅ 출력 결과: true
is_handsome = true
is_rich = true
console.log(is_handsome || is_rich)



// --------------------------------------------------------------------------
// [논리 연산] NOT (!)
// --------------------------------------------------------------------------

// 반대로 변환
let truthy = true
let reverse_truthy = !truthy //참의 반전 = rjwlt
// 출력 결과: false
console.log(reverse_truthy)

let falsy = false
let reverse_falsy = !falsy
// 출력 결과: true

console.log(reverse_falsy)

// 뒤에는 선언할 수 없다. >> !falsy✅ falsy!❌


// 예제: 로그인 상태 반전
let is_logged_out = !is_logged_in

// 출력 결과: is_logged_in 값 반전
console.log(is_logged_out)


// 이중 부정 (!!) - boolean 변환 (Boolean() 대체) => 강한 부정은 강한 긍정
console.log(Boolean('자바스크립트'))
console.log(!!'자바스크립트')

// '' 변환 출력 결과: false
console.log(Boolean(''))
console.log(!!'')

// ' ' 변환 출력 결과: true
console.log(Boolean(' ')) // 공백이라도 있으면 false > true 선언
console.log(!!' ')

// 0 변환 출력 결과: false >> 숫자 0은 false
console.log(Boolean(0))
console.log(!!0)

// '0' 변환 출력 결과: true >> 문자의 0이기 때문에(채워져 있음)
console.log(Boolean('0'))
console.log(!!'0')

// 1 변환 출력 결과: true
console.log(Boolean(1))
console.log(!!1)

// '1' 변환 출력 결과: true
console.log(Boolean('1'))
console.log(!!'1')

// null 변환 출력 결과: false
console.log(Boolean(null))
console.log(!!null)

// undefined 변환 출력 결과: false
console.log(Boolean(undefined))
console.log(!!undefined)


// --------------------------------------------------------------------------
// [비교 연산] 크기 비교
// --------------------------------------------------------------------------

const a = 9, b = 4



// 숫자 비교
// * 10이 5보다 큼
console.log( a > b)
// * 10이 5보다 작지 않음
console.log(a < b)
// * 10이 10보다 크거나 같음
console.log(a >= b)
// * 10이 5보다 작거나 같지 않음
console.log(a <= b)

// 문자열 비교 (사전순)
/*
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ

사전 순, 대문자가 소문자보다 작다.
*/

// * 'a', 'b' 비교
console.log('a' > 'b')
console.log('a' < 'j')
console.log('Z' > 'k')

// * 'apple', 'banana' 비교
// * 'A', 'a' 비교 (대문자가 소문자보다 작음)

const memberName = '김이현'
const partnerName = '이주인'

console.log(memberName < partnerName)
console.log('박아영' < '황현주')
console.log('황현주' < '최수인')

// 문자열과 숫자 비교 (문자열이 숫자로 변환됨)
// * '10'이 5보다 큼
// * '100'이 '20'보다 작음 (문자열끼리 비교하면 사전순!)


// --------------------------------------------------------------------------
// [비교 연산] 동등 비교 vs 일치 비교
// --------------------------------------------------------------------------
// * == (동등): 값만 비교 (타입 변환 후 비교)
// * === (일치): 타입과 값 모두 비교

// 0 == '0' false? true?

//사용자가 작성한 코드
console.log(0 == '0')

//JavaScript 엔진이 처리하는 코드
// console.log(0 == Number('0'))

// 0 === '0' false? true?

//사용자가 작성한 코드
console.log(0 === '0')

//JavaScript 엔진이 처리하는 코드
console.log(0 === '0')



// --------------------------------------------------------------------------
// [비교 연산] 불일치 비교
// --------------------------------------------------------------------------
// * != (불일치): 값만 비교

console.log('9' != 9)

// * !== (불일치): 타입과 값 모두 비교

console.log('9' !== 9)

// --------------------------------------------------------------------------
// [논리 연산] 복합 조건
// --------------------------------------------------------------------------

// 예제: 할인 적용 조건
let is_member = true
let purchase_amount = 50000
// 멤버이고 구매 금액이 3만원 이상인 경우, 할인 적용
// 할인 적용 대상인지 여부를 표현식으로 구현하세요!
// A[멤버(true)] 그리고(and, &&) B[구매금액 >= 3e4] -> 참 또는 거짓 
let has_discount = is_member && (purchase_amount >= 30000)

console.log(has_discount)


// 예제: 접근 권한 조건
let is_admin = false
let is_owner = !true
// 관리자이거나 주인인 경우, 접근 허용
// A[관리자] or B[주인]인 경우
let can_access = is_admin || is_owner
console.log(can_access)

// 예제: 신선 유지 온도 조건
let temperature = 25
// 온도가 18도 이상 26도 이하인 경우, 신선 유지
// 직접 평가 가능한 표현식 (평가값 : Boolean)
// 조건 A : 온도 >= 18
// 조건 B : 온도 <= 26
// 조건 A 그리고 조건 B (A && B)

let keep_fresh = temperature >= 18 && temperature <= 26
console.log(keep_fresh)


// --------------------------------------------------------------------------
// 연산자 우선 순위
// --------------------------------------------------------------------------
// 1. 괄호가 최우선
let calcFirst = 5 + (4 * 6)
console.log(calcFirst)

// 2. 곱셈/나눗셈이 덧셈/뺄셈보다 우선
let calcSecond = 45 / 9 + 8
console.log(calcSecond)

// 3. 왼쪽에서 오른쪽으로
let calcThird = 46 * 6 - 39
console.log(calcThird)

// 4. 할당은 가장 나중
let calcForth = 40 + 4 + 90
console.log(calcForth)


// --------------------------------------------------------------------------
// 주의사항
// --------------------------------------------------------------------------
// * 문자열 + 숫자(문자화) -> 덧셈기호일 때는 문자열이 숫자보다 힘이 세다
let input1 /*애플망고*/  = '5', input2 /*참외*/ = '9'

console.log(Number(input1) + Number(input2))
console.log(input2 + input1)


//console.log('5' + 9)
//console.log(5 + '9')

// * 문자열(숫자화) - 숫자  -> 덧셈기호를 제외한 나머지 연산은 숫자열이 문자보다 힘이 세다
console.log('6' - 3)
console.log('5' * 3)
console.log('30' / 4)

// * 문제 해결 방법 (문자 → 숫자 변환 후 연산)
let input3 = '101', input4 = 8
console.log(Number(input3) - Number(input4))
console.log(Number(input3) * Number(input4))
console.log(Number(input3) / Number(input4))

{
  // * 증가, 감소 연산자 위치 (전/후)
let count = 5

// 전위: 먼저 증가/감소 후 사용
console.log(++count)  // 6 (count는 6이 됨)
console.log(count)    // 6

count = 5  // 초기화

// 후위: 먼저 사용 후 증가/감소
console.log(count++)  // 5 (출력 후 count가 6이 됨)
  console.log(count)
}   // 6