/* 변수 / 상수 작성과제 */


// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.

let likeMovie = '친절한 금자씨'
console.log(likeMovie)

// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.

const lightSpeed = '빛의 속도(299,792,458 m/s)'

// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.

let emailConnect = true
console.log(emailConnect)
console.log(!emailConnect)

// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.

let productCount = 47 // 보유하고 있는 재고 수량
let buyingCount = 1 // 구매할 때 마다 빠져나가는 갯수
console.log(productCount - buyingCount)

// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.

let membersPoint = 15_800 + '점'
console.log(membersPoint)

// 6. API 서버의 "기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.

const urlAddress = 'https://api.example.com'
console.log(urlAddress)

// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.

let postView = 1_234
console.log(postView)

// 8. "배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.

let deliveryStatus = '준비중'

function delivery(Status) {
  let shipping = '현재 배송현황은 ' +  Status + ' 입니다.'

  return shipping
}
console.log(delivery('준비중'))
console.log(delivery('배송중'))
console.log(delivery('배송완료'))


// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.

let validCoupon = true

console.log(typeof validCoupon)
console.log(Boolean(validCoupon))
console.log(!!(validCoupon))
console.log(!(validCoupon))


// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.

const maxFileSize = '10_485_760' + 'b'
console.log(maxFileSize)
console.log(parseInt(maxFileSize.toString(2)) + 'MB')

// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.

let userRank = 85.5
console.log(Number(userRank))


// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.

let agreeAlert = true
let disAgreeAlert = false

console.log(Boolean(agreeAlert))
console.log(!!(agreeAlert))
console.log(!agreeAlert)
console.log(Boolean(disAgreeAlert))
console.log(!!(disAgreeAlert))
console.log(!disAgreeAlert)




/* 함수 작성 과제 */


// 1. 환영 메시지 생성
// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.

/* 
- VIP 회원 : "🌟 VIP {이름}님, 특별한 혜택이 준비되어 있습니다!"
- 일반 회원 : "안녕하세요, {이름}님! 즐거운 쇼핑 되세요."

*/

function memberList(rank, name) {
  const customerMessage = {
    'VIP' : '🌟 ' + rank + name + '님, 특별한 혜택이 준비되어 있습니다!',
    'Friend' : '안녕하세요 ' + rank + name + '! 즐거운 쇼핑 되세요'
  }

  return customerMessage[rank]
}
 
console.log(memberList('VIP', '희연'))
console.log(memberList('Friend', '정수'))







// 2. 배송비 계산
// 주문 금액과 배송 지역을 입력받아 배송비를 계산하는 함수를 작성합니다.

/* 
배송비 정책

- 주문 금액이 50,000원 이상 : 무료 배송
- 제주/도서 지역 : 추가 배송비 3,000원
- 배송지역 값 예시 : "서울", "부산", "제주", "도서"
- 일반 지역 : 기본 배송비 3,000원
- 주문 금액이 0원 이하인 경우 : 0 반환
- 배송지역이 빈 문자열인 경우 : 기본 배송비 적용

*/



// 3. 비밀번호 유효성 검사
// 비밀번호 문자열을 입력받아 유효성 검사를 수행하는 함수를 작성합니다.

/* 
비밀번호 규칙

- 최소 8자 이상
- 최대 20자 이하
- 위 조건을 모두 만족하면 true, 아니면 false 반환

*/

const checkedPassword = (password) => {

  // 8자 이상이거나 20자 이하
  let checkedPassword = password.length >= 8 && password.length <= 20
  return checkedPassword

 }

console.log(checkedPassword('4590678409'))
console.log(checkedPassword('4590678409ddkljgkleioiu'))


// 4. 포인트 적립 계산
// 결제 금액과 회원 등급을 입력받아 적립될 포인트를 계산하는 함수를 작성합니다.

/* 
 포인트 적립률
 
 - VIP : 결제 금액의 5%
 - GOLD : 결제 금액의 3%
 - SILVER : 결제 금액의 1%
 - 일반 : 결제 금액의 0.5%
 
 [예] VIP 회원이 100,000원 결제 시 → 5,000 포인트 적립
*/

function addToPoint(memberRank, buyingPoint) {
  let vipPoint = 5 
  let goldPoint = 3
  let silverPoint = 1
  let basicPoint = 0.5

  let nomalRank = memberRank.toLowerCase()

  let chargePoint = {
    vip: memberRank + buyingPoint * vipPoint / 100,
    gold: memberRank + buyingPoint * goldPoint / 100,
    silver: memberRank + buyingPoint * silverPoint / 100,
    basic : memberRank + basicPoint * basicPoint / 100
}

return chargePoint[nomalRank]
}

console.log(addToPoint('vip', 100000))
console.log(addToPoint('gold', 50000))
console.log(addToPoint('silver', 100000))
console.log(addToPoint('basic', 100000))

 


// 5. 영화 티켓 가격 계산
// 영화 정보와 관람 인원을 입력받아 총 결제 금액을 계산하는 함수를 작성합니다.

/* 
 요금 정책
 
 - 일반 영화: 14,000원
 - 3D 영화: 17,000원
 - IMAX 영화: 20,000원
 - 조조 할인(10시 이전 상영): 20% 할인
 - 영화타입 값 : "일반", "3D", "IMAX"
 - 조조할인여부 값 : true 또는 false
 
 [예] 3D 영화, 조조 상영, 2명 관람 → 27,200원 결제

*/


const movieTicket = (movieType, viewPerson, viewTime) => {
  //  [예] 3D 영화, 조조 상영, 2명 관람 → 27,200원 결제

  const moviePrice = {
    '일반영화' : 14000,
    '3d영화': 17000,
    'IMAX' : 20000
  }


  let Price = moviePrice[movieType];

  let discountMovie = viewTime === '조조' ? 0.8 : 1
  
  return Price * discountMovie * viewPerson

}
console.log(movieTicket('IMAX', 3, '조조'))