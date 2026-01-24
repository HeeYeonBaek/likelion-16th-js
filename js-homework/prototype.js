const tapMenu = document.querySelectorAll('.tapMenu li')
const menuBox = document.querySelectorAll('.categoryBlock')
const bankAccountInquiry = document.querySelector('.bankAccountInquiry')
const portfolio = document.querySelector('.portfolio')
const transaction = document.querySelector('.transaction')
const creditCard = document.querySelector('.creditCard')
const accountMoney = document.querySelectorAll('.accountMoney')


// 클릭 이벤트

function hideSection() {
  bankAccountInquiry.classList.add('hide')
  portfolio.classList.add('hide')
  transaction.classList.add('hide')
  creditCard.classList.add('hide')

  // CSS 수정
  accountMoney.forEach(el => {
    el.style.cssText = `
    color: var(--blue); 
    font-size: 20px; 
    font-weight: 700;
    `
  })

}

  const clickMenu = () => {
    tapMenu.forEach((tapBtn, Box) => {
      tapBtn.addEventListener('click', () => {
        hideSection()
        
        menuBox[Box].classList.remove('hide')

        if (Box === 3 || Box === 4) {
            transaction.style.cssText = `
              block-size: 614px;
              background: var(--white);
              border-bottom-radius: 12px;
            `

          creditCard.style.cssText = `
              block-size: 614px;
              background: var(--white);
              border-bottom-radius: 12px;
            `
        }

        })
      })
    }

console.log(menuBox[2])

// 투자포트폴리오 수익구조 컬러변경
const rateOfreturn = document.querySelectorAll('.rateOfreturn')
const plusGreen = document.querySelectorAll('.plus')
const minusRed = document.querySelectorAll('.minus')
const deposit = document.querySelectorAll('.plusMoney')
const expenditure = document.querySelectorAll('.minusMoney')

function graphColorChange() {
  deposit.forEach(addMoney => {
    addMoney.style.cssText = `
      font-size: 16px;
      font-weight: 700;
      color: var(--active-color);
    `
  })

  expenditure.forEach(removeMoney => {
    removeMoney.style.cssText = `
      font-size: 16px;
      font-weight: 700;
      color: var(--red);
    `
  })

  plusGreen.forEach(green => {
    green.style.cssText = `
      font-size: 13px;
      font-weithg: 500;
      color: var(--green);
    `
  })

  minusRed.forEach(red => {
    red.style.cssText = `
      font-size: 13px;
      font-weithg: 500;
      color: var(--red);
    `
  })
}


graphColorChange()
clickMenu()
hideSection()
