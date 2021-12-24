const tabBtns = Array.from(document.querySelectorAll('.btn_all'))
const tabSlides = Array.from(document.querySelectorAll('.tab__slide'))
let prevActiveBtnAll
let activeSlide = tabSlides[0]
activeSlide.classList.add('_active')

onTabBtnClick(tabBtns[0])

tabBtns.forEach((element) => {
    element.onclick = () => onTabBtnClick(element)
})

function onTabBtnClick(element) {
    prevActiveBtn(element)
    currentActiveBtn(element)
}

function currentActiveBtn(element) {
    const currentActiveBtn = element.querySelector(".tab__btn")
    const currentActiveIndicator = element.querySelector(".tab__indicator")
    let indexBtn = tabBtns.indexOf(element)

    element.classList.add('_active')
    currentActiveBtn.classList.add('_active')
    currentActiveIndicator.classList.add('_active')

    prevActiveBtnAll = element

    changeSlide(indexBtn)
}
function prevActiveBtn() {
    if (prevActiveBtnAll !== undefined) {
        const prevActiveBtn = prevActiveBtnAll.querySelector(".tab__btn")
        const prevActiveIndicator = prevActiveBtnAll.querySelector(".tab__indicator")

        prevActiveBtnAll.classList.remove('_active')
        prevActiveBtn.classList.remove('_active')
        prevActiveIndicator.classList.remove('_active')
    }
}
function changeSlide(index) {
    activeSlide.classList.remove('_active')
    tabSlides[index].classList.add('_active')
    activeSlide = tabSlides[index]
}

// const btns = document.querySelectorAll(".btn_all")
// let prevActiveBtn

// onTabBtnClick(btns[0])
// btns.forEach((element) => {
//     element.onclick = () => onTabBtnClick(element)
// })
// function onTabBtnClick(element) {
// checkPreviousActiveBtn(element)
// createCurrentActive(element)
// }
// function checkPreviousActiveBtn() {
//     if (prevActiveBtn !== undefined) {

//         let prevActiveBtnName = prevActiveBtn.querySelector(".tab__btn")
//         let prevActiveIndicator = prevActiveBtn.querySelector(".tab__indicator")
//         prevActiveBtn.classList.remove('_active')
//         prevActiveBtnName.classList.remove('_active')
//         prevActiveIndicator.classList.remove('_active')
//     }
// }
// function createCurrentActive(element) {
//     let btnName = element.querySelector(".tab__btn")
//     let indicator = element.querySelector(".tab__indicator")
//
//     let indexBtn = tabBtns.indexOf(element)
//     element.classList.add('_active')
//     btnName.classList.add('_active')
//     indicator.classList.add('_active')
//     prevActiveBtn = element
//     changeSlide(indexBtn)
// }
