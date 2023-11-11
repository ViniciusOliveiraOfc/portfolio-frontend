function mudar() {
    let menuMobile = document.querySelector('.menu-mobile')
    let nav = document.querySelector('.header-nav')
    if (menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active')
        nav.classList.remove('active')
    } else {
        menuMobile.classList.add('active')
        nav.classList.add('active')
    }
}