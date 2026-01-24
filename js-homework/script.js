const gameList = {
  game1: {
    image: 'image/크로노오디세이.png',
    title: '크로노 오디세이',
    intro: '멈춰 있던 시간이 흐른다',
    genre: 'MMORPG'
  },
  game2: {
    image: 'image/아키에이지.png',
    title: '아키에이지 워',
    intro: '시대의 전설을 향해',
    genre: 'MMORPG'
  },
  game3: {
    image: 'image/패스오브액자일2.png',
    title: '패스 오브 액자일2',
    intro: '얼리 액세스 오픈!',
    genre: 'MMORPG'
  },
  game4: {
    image: 'image/오딘발할라라이징.png',
    title: '오딘 : 발할라 라이징',
    intro: '신의 영역을 차지하라',
    genre: 'MMORPG'
  },
  game5: {
    image: 'image/리멤버오브마제스티.png',
    title: '롬 : 리멤버 오브 마제',
    intro: '세계는 하나의 전장이 된다',
    genre: 'MMORPG'
  },
  game6: {
    image: 'image/배틀그라운드.png',
    title: '배틀그라운드',
    intro: '최후까지 생존하라!',
    genre: '배틀로얄'
  }
  
}


const gameCaptionBox = document.querySelectorAll('.gameBox')
const img = gameCaptionBox[0].querySelector('img')

const gameCaption = () => {
  // 크로노오디세이
  gameCaptionBox[0].querySelector('img').src = gameList.game1.image
  gameCaptionBox[0].querySelector('img').alt = gameList.game1.title
  gameCaptionBox[0].querySelector('.gameName').textContent = gameList.game1.title
  gameCaptionBox[0].querySelector('.gameComment').textContent = gameList.game1.intro
  gameCaptionBox[0].querySelector('.gameGenre').textContent = gameList.game1.genre

  // 아키에이지 워
  gameCaptionBox[1].querySelector('img').src = gameList.game2.image
  gameCaptionBox[1].querySelector('img').alt = gameList.game2.title
  gameCaptionBox[1].querySelector('.gameName').textContent = gameList.game2.title
  gameCaptionBox[1].querySelector('.gameComment').textContent = gameList.game2.intro
  gameCaptionBox[1].querySelector('.gameGenre').textContent = gameList.game2.genre

  // 패스오브액자일2
  gameCaptionBox[2].querySelector('img').src = gameList.game3.image
  gameCaptionBox[2].querySelector('img').alt = gameList.game3.title
  gameCaptionBox[2].querySelector('.gameName').textContent = gameList.game3.title
  gameCaptionBox[2].querySelector('.gameComment').textContent = gameList.game3.intro
  gameCaptionBox[2].querySelector('.gameGenre').textContent = gameList.game3.genre

  // 오딘발할라라이징
  gameCaptionBox[3].querySelector('img').src = gameList.game4.image
  gameCaptionBox[3].querySelector('img').alt = gameList.game4.title
  gameCaptionBox[3].querySelector('.gameName').textContent = gameList.game4.title
  gameCaptionBox[3].querySelector('.gameComment').textContent = gameList.game4.intro
  gameCaptionBox[3].querySelector('.gameGenre').textContent = gameList.game4.genre

  // 리멤버오브마제스티
  gameCaptionBox[4].querySelector('img').src = gameList.game5.image
  gameCaptionBox[4].querySelector('img').alt = gameList.game5.title
  gameCaptionBox[4].querySelector('.gameName').textContent = gameList.game5.title
  gameCaptionBox[4].querySelector('.gameComment').textContent = gameList.game5.intro
  gameCaptionBox[4].querySelector('.gameGenre').textContent = gameList.game5.genre

  // 배틀그라운드
  gameCaptionBox[5].querySelector('img').src = gameList.game6.image
  gameCaptionBox[5].querySelector('img').alt = gameList.game6.title
  gameCaptionBox[5].querySelector('.gameName').textContent = gameList.game6.title
  gameCaptionBox[5].querySelector('.gameComment').textContent = gameList.game6.intro
  gameCaptionBox[5].querySelector('.gameGenre').textContent = gameList.game6.genre
}

gameCaption()

const gameListSet = [
  gameList.game1,
  gameList.game2,
  gameList.game3,
  gameList.game4,
  gameList.game5
]

let currentPage = 1
const totalPage = 3

const preyBtn = document.querySelector('.preyPage')
const nestBtn = document.querySelector('.nextPage')

preyBtn.addEventListener('click', () => {
  if (currentPage < 1) {
    currentPage = totalPage
  }
  
})

