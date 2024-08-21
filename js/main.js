let elBtn = document.querySelector('.btn')
let elCloseBtn = document.querySelector('.close__btn')
let elBurgerBtn = document.querySelector('.closed__menu')


elBtn.addEventListener('click', function (evt) {
    elBurgerBtn.classList.add('burger__menu')
    elBurgerBtn.classList.remove('closed__menu')
})

elCloseBtn.addEventListener('click', function () {
    elBurgerBtn.classList.add('closed__menu')
    elBurgerBtn.classList.remove('burger__menu')
})