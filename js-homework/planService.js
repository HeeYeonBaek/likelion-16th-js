const planContainerBox = document.querySelectorAll('[data-label="planSelect"]')
// console.log(planContainerBox)
const planComment = document.querySelector('.commentBox')

const basicPlan = document.querySelector('.free')
const standardPlan = document.querySelector('.standard')
const premiumPlan = document.querySelector('.premium')


const selectBox = () => {
  planContainerBox.forEach((box) => {
    if (planContainerBox[1]) {
      box.addEventListener('click', (e, comment) => {
      e.currentTarget.style.cssText = `
        background: var(--active-box);
        inline-block: 24px;
        border: 3px solid var(--active-color);
      `
      comment.currentTarget.textComment = '플랜' 
      })
    }

  })
}

selectBox()

