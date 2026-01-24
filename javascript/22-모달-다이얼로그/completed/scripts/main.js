//---------------------------------------------------------------------
// 내가 짜본 코드
//---------------------------------------------------------------------

/*const modalBody = document.querySelector('.modal-is-open')
const modalOverlay = document.querySelector('.modal-overlay')

const openButton = document.querySelector('[data-desc="열기버튼"]')
const colseButton = document.querySelector('[data-desc="닫기버튼"]')
console.log(colseButton)

const opener = modalOverlay.querySelector('.is-open')
const closer = document.querySelector('.is-close')



openButton.addEventListener('click', () => {
  modalOverlay.classList.add(opener)
})

colseButton.addEventListener('click', () => {
  modalOverlay.classList.add(closer)
})*/


//---------------------------------------------------------------------
// 선생님 풀이과정
//---------------------------------------------------------------------


// 활성 클래스 상수 정의
const ACTIVE_CLASS = 'modal-dialog-is-open'

// 활성 클래스를 적용할 상위 요소 참조
const body = document.body

// 문서에서 제어할 컨테이너 요소 참조
const wrap = body.querySelector('.wrap')
console.log(wrap)

// 컨테이너 내부에서 이벤트 리스너를 연결할 버튼 요소

const modalOpenButton = wrap.querySelector('[aria-label*="열기"]')
const modalOvelay = body.querySelector('.modal-overlay')
const modalCloseButton = modalOvelay.querySelector('[aria-label*="닫기"]')

// 모달 다이얼로그를 여는 버튼에 클릭 이벤트 리스너 추가

modalOpenButton.addEventListener('click', handleOpenModal)

// 모달 다이얼로그를 닫는 버튼에 클릭 이벤트 리스너 추가
modalCloseButton.addEventListener('click', handleCloseModal)
// [이벤트 핸들러] 모달 다이얼로그 열기

function handleOpenModal() {
  // body 변수에 참조된 객체에 활성 클래스 추가
  body.classList.add(ACTIVE_CLASS)
}

function handleCloseModal() {
  // body 변수에 참조된 객체에 활성 클래스 제거
  body.classList.remove(ACTIVE_CLASS)
}