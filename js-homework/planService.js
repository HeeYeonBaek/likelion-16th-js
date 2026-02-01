const planContainerBox = document.querySelectorAll('[data-label="planSelect"]')
// console.log(planContainerBox)
const innerButton = document.querySelectorAll('.clicker')
const planComment = document.querySelector('.commentBox')
const basicPlan = document.querySelector('.free')
const standardPlan = document.querySelector('.standard')
const premiumPlan = document.querySelector('.premium')

const selectBox = () => {
  innerButton.forEach((box) => {
    box.addEventListener('click', (e) => {
      e.currentTarget.style.cssText = `
        background: var(--active-box);
        border: 3px solid var(--active-color);
      `
      const checkMark = document.querySelectorAll('.checkMark')
      
      checkMark.forEach((mark) => {
        mark.classList.remove('hide')
      })
    }) 
})
  
 
}       

selectBox()
