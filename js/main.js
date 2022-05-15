const hamburger = document.querySelector('.hamburger-menu')
const mobileInfo = document.querySelector('.mobile-info')
const body = document.querySelector('body')
const page = document.querySelector('.just-flex')

function mobileFunctions() {
    hamburger.classList.toggle('cancel')
    mobileInfo.classList.toggle('display')
    body.classList.toggle('scroll')
    page.classList.toggle('blur')
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