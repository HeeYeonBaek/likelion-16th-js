const planContainerBox = document.querySelectorAll('[data-label="planSelect"]')
// console.log(planContainerBox)

const basicPlan = document.querySelector('.free')
const standardPlan = document.querySelector('.standard')
const premiumPlan = document.querySelector('.premium')


const selectBox = () => {
  planContainerBox.forEach((box) => {
    box.addEventListener('click', () => {
      console.log(클릭되냐)
    })
  })
}

