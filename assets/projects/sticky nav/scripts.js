// when scroll get to a certain point nav changes
//adds nav to DOM
const nav = document.querySelector('.nav')
// listen for scroll
window.addEventListener('scroll', fixNav)
// as scroll y axis gets to certain point nav changes
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}