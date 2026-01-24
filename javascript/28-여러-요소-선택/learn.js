// --------------------------------------------------------------------------
// 실습: 다중 요소 선택과 반복 (querySelectorAll vs getElementsBy...)
// --------------------------------------------------------------------------

const sectionList = document.querySelectorAll('section')

// NodeList(배열과 유사한 객체, 배열 객체는 아님!)
// console.log(sectionList) 

console.log(sectionList.length)

// while문 (순방향/역방향 루프)

{
  // while문 정방향
  let i = 0

const sectionCount = sectionList.length

while (i++ < sectionCount) {
  const sectionItem = sectionList.item(i)
  console.log(sectionItem)
  i = i + 1
  }
}




{
    // while문 역방향
  let i = sectionList.length

while (--i >= 0) {
  const sectionItem = sectionList.item(i)
  console.log(sectionItem)
  }
}

// for 문
{
  // 순방향(정순)
  for (let i = 0, list = sectionList.length; i < list; ++i){
    const sectionItem = sectionList.item(i)
    console.log(sectionItem)
  }
}

{
  // 역방향
  for (let i = sectionList.length - 1; i >= 0; --i){
    const sectionItem = sectionList[i]
    console.log(sectionItem)
  }
}

// for...of 문
{
  // NodeList [section, section, section]
  for (const sectionItem of sectionList) {
    console.log(sectionItem)
  }
}

// forEach() 매서드
{
  sectionList.forEach((item, section) => {
    console.log(item, section)
  })
}


// '.prose header *' 요소를 수집해 참조
const headerChildren = document.querySelectorAll('.prose header *')
// console.log(headerChildren)// NodeList [h1, p]

// 헤더 내부의 자식 요소들에 프라이머리 컬러 일괄 적용

{
  // for문
  for (let i = 0, l = headerChildren.length; i < l; ++i){
    const childElement = headerChildren.item(i)
    console.log(i, childElement)
    childElement.classList.add('color-primary')
  }
}


{
  // for...of 문
  for (const childElement of headerChildren) {
    console.log(childElement)
    childElement.classList.add('color-primary')
  }
}


{
  // forEach 메서드
headerChildren.forEach((childElement) => {
  // console.log(childElement)
  childElement.classList.add('color--primary')
})
}


{
  // Array.from(ITERABLE) 메서드
  // 유사 배열 객체 -> 배열 객체로 생성해 반환

  const articleChildren = document.querySelectorAll('main > article > children')
  console.log(typeof articleChildren) // NodeList

  const articleArray = Array.from(articleChildren) // Array
  console.log(articleArray)

}

// [실습] querySelectorAll을 이용한 다중 선택
// 1. '.life-tips' 내부의 모든 'p' 요소를 선택하여 'paragraphs' 변수에 할당하세요.
// 2. 수집된 NodeList의 길이를 콘솔에 출력하세요.
console.group('1. 요소 일괄 선택')

// 여기에 코드를 작성하세요.

console.groupEnd()


// [실습] 다양한 반복문을 활용한 스타일 적용
// 1. for...of 문을 사용하여 모든 단락에 'color-primary' 클래스를 추가하세요.
// 2. forEach 메서드를 사용하여 모든 단락의 배경색을 변경해 보세요.
console.group('2. NodeList 루프 수행')

// 여기에 코드를 작성하세요.

console.groupEnd()


// [실습] NodeList를 진짜 배열로 변환하기
// 1. Array.from()을 사용하여 'paragraphs'를 'paragraphArray'로 변환하세요.
// 2. Array.isArray()를 통해 변환 여부를 확인하고 콘솔에 출력하세요.
console.group('3. 배열로 변환')

// 여기에 코드를 작성하세요.
const allParagraph = document.querySelectorAll('main p')
console.log(allParagraph)

// 배열 바꾸기 (NodeList > Array.from() > 새로운 Array 생성)
const allParagraphAll = Array.from(allParagraph)
console.log(typeof allParagraphAll)
console.log(Array.isArray(allParagraph))

// 배열인지 아닌지 정확히 감지하는 매서드
// Array.isArray()
console.log(Array.isArray(allParagraphAll))

console.groupEnd()

// --------------------------------------------------------------------------
// 여러 요소를 선택하는 대체 방법
// * getElementsByTagName()
// * getElemetsByClassName()
// --------------------------------------------------------------------------

// 문서의 모든 섹션 요소 찾아보자
const allSectionElements = document.getElementsByTagName('region')
console.log(allSectionElements) //HTMLCollection


// 클래스 속성 이름으로 문서에서 요소들을 수집해보자.
const allRegionByClassName = document.getElementsByClassName('region')
console.log(allRegionByClassName)

// TypeError: allSectionElements.forEach is not a function
// 반복하고 싶은데??? 어떻게 해야 할까?
// allSectionElements.forEach((element) => {
//   console.log(element)
// })

// 그래? 그러면 반복문을 사용해 HTMLCollection 객체를 반복하자.
// - while (index가 필요해!)
// - do..while
// - for (index가 필요해!)


  
  // - ✅ for...of
{
  for(const element of allSectionElements) {
    console.log(element)
  }
}

// - ⚠️ for...in (객체 순환용)
// - ❌ forEach (지원하지 않음) : 아... 이 방법 쓰고 싶은데...
//   🌻 아하! Array.from() 메서드가 있었지!! 배열로 바꿔서 해보자!
console.log(Array.isArray(allSectionElements)) // false
console.log(Array.isArray(Array.from(allSectionElements))) // true



// --------------------------------------------------------------------------
// NodeList vs HTMLCollection
// --------------------------------------------------------------------------
// NodeList (Static Collection)     : querySelector, querySelectorAll
// HTMLCollection (Live Collection) : getElementsByTagName, getElementsByClassName
// --------------------------------------------------------------------------

console.group('NodeList vs HTMLCollection')

const lifeTips = document.querySelector('.life-tips')
console.log(lifeTips) // HTMLElement (Node)

// Static Collection (NodeList)
const staticCollection = lifeTips.querySelectorAll('p')
console.log(staticCollection)

// Live Collection (HTMLCollection)
const liveCollection = lifeTips.getElementsByTagName('p')
console.log(liveCollection)

// 현재는 스태틱/라이브 콜렉션 모두 동일해 보이지만...
// 동적으로 DOM 조작(Manipulation) -> 화면 변경(update view)

// 비동기 스케쥴링(시간 차를 두고 일을 한다.)
// 1초 뒤에 일을 할께요~
// setTimeout(() => {
//   lifeTips.innerHTML += '<p>씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>'

//   // static collection의 수집된 개수
//   console.log('static collection\n', staticCollection)
//   // live collection의 수집된 개수
//   console.log('live collection\n', liveCollection)

// }, 3000)


// 라이브 콜렉션
// - getElementsByClassName
// - getElementsByTagName
// const liveC = lifeTips.querySelector('.live-collection') // HTMLULElement <ul>
// const liveCItems = liveC.getElementsByTagName('li') // HTMLCollection [li, li, li]

// for(const item of liveCItems) {
//   item.addEventListener('click', () => {
//     console.log('click:', item.textContent)
//   })
// }

// 비동기(async) 스케쥴링
// 3초 뒤에 DOM 조작 (동적 변경)
setTimeout(manipulateDOM, 3000)

console.groupEnd()


// [미션 5] 라이브 컬렉션과 이벤트 연결의 한계
// 1. '.live-collection li' 요소들을 getElementsByTagName으로 수집하세요.
// 2. 루프를 돌며 클릭 시 textContent를 출력하는 이벤트를 연결하세요.
// 3. 새로운 <li>를 추가한 후, 새 요소에서도 클릭 이벤트가 작동하는지 확인하세요. (작동하지 않음이 정상)
console.groupCollapsed('5. 이벤트 위임의 필요성 체감')

// 여기에 코드를 작성하세요.

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. querySelectorAll()은 정적(Static) 컬렉션인 NodeList를 반환합니다.
// 2. NodeList는 배열이 아니지만 for...of와 forEach를 직접 사용할 수 있습니다.
// 3. getElementsByTagName 등은 라이브(Live) 컬렉션을 반환하여 실시간 DOM 변화를 감지합니다.
// 4. 새로운 요소가 추가되어도 이미 연결된 이벤트는 자동으로 전파되지 않으므로 '이벤트 위임'이 유리합니다.
// 5. Array.from(nodeList)를 사용하면 NodeList를 완전한 배열로 변환하여 map, filter 등을 쓸 수 있습니다.
// --------------------------------------------------------------------------





function manipulateDOM() {
  liveC.insertAdjacentHTML('beforeend', '<li>나중에 추가된 요소 (클릭 시 반응 없음)</li>')
  console.log('새 요소가 추가되었습니다. 하지만 클릭 이벤트는 작동하지 않습니다.')
}



// 1. 좋은 사람(Good Guy)을 모두 선택하세요.
const goodGuy = document.querySelectorAll('[data-type="good-guy"]')
console.log(goodGuy)

// 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
// goodGuy.forEach((guy) => guy.classList.add('excellent'))

for (const guy of goodGuy) {
  guy.classList.add('excellent')
}

// 3. 빌런(Villain)을 모두 선택하세요.
const villain = document.querySelectorAll('[data-type="villain"]')
console.log(villain)

// 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
// for (const villain of villain) {
//   villain.classList.add('naugthy')
// }

villain.forEach((v) => villain.classList.add('naughty'))

// 5. 모든 캐릭터(Character)를 선택하세요.
const allCharacter = document.querySelectorAll('.character')
console.log(allCharacter)

// 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
allCharacter.forEach((c) => {
  c.classList.add('star-wars')
})