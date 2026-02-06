import './styles/main.css'

// --------------------------------------------------------------------------
// JavaScript 객체(배열 포함) -> JSON(데이터 전송 포멧) 변환
// --------------------------------------------------------------------------

const family = {
  name: '우리가족',
  people: ['백건희', '백태희', '백희연', '백주연'],
  location: '부천',
  getPeopleCount() {
    return this.people.length
  }
}


// JS > JSON (서버에 보내기 전에 변환)
const familyJSON = JSON.stringify(family)
console.log(familyJSON)

// JSON > JS (서버에서 가져온 후 변환)
const parsedFamilyObject = JSON.parse(familyJSON)
console.log(parsedFamilyObject)



  ; (() => {
    const macbookPro = {
      operatingSystem: 'macOS Sequoia 15.5(24F74)',
      processor: '2.4GHz 8core Intel Core i9',
      memory: 64,
    }

    const jsonString = JSON.stringify(macbookPro, null, 2)
    console.log(jsonString)

    const parseMacBook = JSON.parse(jsonString)
    console.log(parseMacBook)

    const output = document.querySelector('.output-container')
    output.textContent = jsonString
  })()












  // --------------------------------------------------------------------------
  // 실습: JSON 파싱 및 데이터 정리 (Data Massaging)
  // --------------------------------------------------------------------------

  ; (() => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users/HeeYeonBaek')

    xhr.send(null)

    xhr.addEventListener('readystatechange', (e) => {
      const { response } = e.currentTarget
      console.log(response, typeof response)

      const gitHubUser = JSON.parse(response)
      console.table(gitHubUser)
    })
  })


// --------------------------------------------------------------------------
// 핵심 요약
// --------------------------------------------------------------------------
// - JSON은 "JavaScript Object Notation"의 약자로 데이터 전송을 위한 문자열 포맷입니다.
// - JSON.parse()는 문자열을 객체로 변환하며 통신 응답 처리의 필수 단계입니다.
// - JSON.stringify()는 객체를 문자열로 변환하며 서버로 데이터를 보낼 때 주로 사용합니다.
// - 데이터 정리(Data Massaging)는 원본 데이터에서 불필요한 정보를 걷어내고 
//   프론트엔드 로직에 최적화된 구조로 재가공하는 과정을 말합니다.
// --------------------------------------------------------------------------