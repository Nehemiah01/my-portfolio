const hamburger = document.querySelector('.hamburger-menu')
const mobileInfo = document.querySelector('.mobile-info')
const body = document.querySelector('body')
const element1 = document.querySelector('.second')
const element2 = document.querySelector('.first')
const element3 = document.querySelector('.pg-1 .just-flex')

function mobileFunctions() {
    hamburger.classList.toggle('cancel')
    mobileInfo.classList.toggle('display')
    body.classList.toggle('scroll')
    element1.classList.toggle('blur')
    element2.classList.toggle('blur')
    element3.classList.toggle('blur')
}

hamburger.addEventListener('click', toggler = (e) => {
    mobileFunctions()
})

const mbLinks = document.querySelectorAll('.mobile-links')
for (let i = 0; i<mbLinks.length; i++) {
    mbLinks[i].addEventListener('click', () => {
        mobileFunctions()
    })
}