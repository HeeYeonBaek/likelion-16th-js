// --------------------------------------------------------------------------
// 실습: HTML 속성 및 데이터 속성 제어 (Attribute & Dataset)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 실습: 속성 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getAttr() 함수
// 1. 요소(element)와 속성 이름(attributeName)을 인자로 받습니다.
// 2. getAttribute()를 사용하여 요소의 속성 값을 반환하는 로직을 작성하세요.
console.groupCollapsed('getAttr() 함수 작성')

const prose = document.querySelector('.prose')
const paragraph = prose.querySelector('p')
const strong = paragraph.querySelector('strong')

const proseClassAttr = getAttr(prose, 'class')
console.log(proseClassAttr)

const paragraphDataAttr = getAttr(paragraph, 'data-has-strong')
console.log(paragraphDataAttr)

const strongTitleAttr = getAttr(strong, 'title')
console.log(strongTitleAttr)

function getAttr(element, attributeName) {
  return element.getAttribute(attributeName)
}

console.groupEnd()


// [실습] setAttr() 함수
// 1. 요소, 속성 이름, 속성 값을 인자로 받습니다.
// 2. 요소의 setAttribute() 메서드를 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('setAttr() 함수 작성')

setAttr(strong, 'id', 'powerful')
setAttr(strong, 'data-id', 'emphasis element')

function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue)
}

console.groupEnd()


// [실습] removeAttr() 함수
// 1. 요소, 속성 이름 값을 인자로 받습니다.
// 2. 요소의 removeAttribute() 메서드를 활용하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('removeAttr() 함수 작성')

removeAttr(strong, 'data-id')
removeAttr(strong, 'id')
removeAttr(strong, 'title')

function removeAttr(element, attributeName) {
  element.removeAttribute(attributeName)
}

console.groupEnd()


// [실습] attr() 함수
// 1. 위에서 작성한 getAttr, setAttr, removeAttr을 내부에서 활용하세요.
// 2. attributeName이 객체({})인 경우, 재귀 호출을 통해 여러 속성을 한 번에 적용하세요.
// 3. attributeValue가 null이면 '삭제', 값이 있으면 '설정', 없으면 '읽기'를 수행하세요.
console.group('attr() 함수 작성')

// 속성 추가(쓰기)
attr(prose, 'id', 'main-container')
attr(prose, 'data-id', 'main-element')

// 속성 확인(읽기)
const proseId = attr(prose, 'id')
const proseDataId = attr(prose, 'data-id')
console.log(proseId, proseDataId)

// 속성 제거(삭제)
setTimeout(() => {
  // 2.4초 뒤에 제거
  attr(prose, 'id', null)
  attr(prose, 'data-id', null)
  console.log('prose 요소의 id, data-id 속성 모두 삭제')
}, 4000)

function attr(element, attributeName, attributeValue) {
  if (attributeValue === undefined) {
    return getAttr(element, attributeName)
  }

  if (attributeValue === null) {
    return removeAttr(element, attributeName)
  }

  setAttr(element, attributeName, attributeValue)
}

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getAttr (읽기): HTML 태그에 명시된 속성 값을 문자열로 가져옵니다. (getAttribute)
// 2. setAttr (쓰기): 속성 값을 변경하거나 추가하고, 요소를 반환합니다. (setAttribute)
// 3. removeAttr (삭제): 불필요한 속성을 완전히 제거합니다. (removeAttribute)
// 4. attr (만능): 인자에 따라 읽기/쓰기/삭제를 자동으로 판단합니다. (다형성)
//    - 객체를 주면? -> 여러 속성을 한 번에 설정 (재귀)
//    - 값을 안 주면? -> 속성 값을 읽어옴 (읽기)
//    - 값을 주면? -> 속성을 설정함 (쓰기)
//    - null을 주면? -> 속성을 삭제함 (삭제)
// --------------------------------------------------------------------------


// [실습] 빌트인 속성 및 커스텀 속성 읽기 (getAttribute)
// 1. 문서에서 'data-category' 속성을 가진 요소를 선택하세요.
// 2. getAttribute()를 사용하여 'id', 'class', 'data-category' 값을 각각 콘솔에 출력하세요.
console.groupCollapsed('1. 속성 읽기 검토 (getAttribute)')




console.groupEnd()


// [실습] 불리언(Boolean) 속성 'checked'의 동작 확인
// 1. HTML에 'checked="false"'로 작성된 체크박스 요소를 선택하세요.
// 2. getAttribute('checked')의 값과 해당 요소의 .checked 프로퍼티(true/false) 값을 비교하여 출력하세요.
// 3. (관찰) 왜 "false"라고 적었는데 브라우저에서는 체크된 상태로 보이는지 생각해보세요.
console.groupCollapsed('2. checked 속성 특징 검토')

// 이곳에 코드를 작성하세요.


console.groupEnd()


// [실습] dataset을 이용한 이름 변환(CamelCase) 확인
// 1. 하이픈이 포함된 데이터 속성(예: data-product-name)을 가진 요소를 선택하세요.
// 2. element.dataset 객체를 콘솔에 출력하여 속성명이 어떻게 변환되었는지 확인하세요.
// 3. dataset을 사용하여 해당 값을 '읽기'와 '쓰기' 해보세요.
console.groupCollapsed('3. dataset 이름 변환 규칙 검토')

// 이곳에 코드를 작성하세요.


console.groupEnd()


// [실습] 속성 설정 및 제거 (Manipulation)
// 1. 특정 요소에 setAttribute()를 사용하여 'title' 속성을 새롭게 추가하거나 수정하세요.
// 2. removeAttribute()를 사용하여 'data-category' 속성을 제거한 후 요소의 변화를 확인하세요.
console.groupCollapsed('4. 속성 설정 및 제거 검토')

// 이곳에 코드를 작성하세요.


console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 속성 vs 프로퍼티: getAttribute는 HTML에 적힌 글자 그대로를, 프로퍼티는 해석된 상태(true/false 등)를 다룹니다.
// 2. dataset 변환: data-user-id(HTML) → dataset.userId(JS)로 카멜 케이스 변환이 일어납니다.
// 3. 불리언 속성: checked, disabled 등은 값이 무엇이든 '존재'하는 것만으로 참(true)이 됩니다.
// --------------------------------------------------------------------------