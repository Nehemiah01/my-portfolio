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


//SCROLL-REVEAL

// ScrollReveal({ 
//     delay: 500,
//     duration: 1000,
//     viewFactor: 0.2
//     // reset: true,
//     // desktop: false
// });

// var slideUp = {
//     distance: '150%',
//     origin: 'bottom',
//     opacity: 0
// };

// ScrollReveal().reveal('.feature .card', slideUp)

// console.log(ScrollReveal().store)
// // ScrollReveal().reveal(body)
// // ScrollReveal().reveal()