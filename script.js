const closeBtn = document.querySelector('.close-btn')
const mobileMenu = document.querySelector('.mobile')
const burger = document.querySelector('.burger')
const prevBtns = document.querySelectorAll('.prev')
const nextBtns = document.querySelectorAll('.next')
const heros = Array.from(document.querySelectorAll('.hero'))
const menu = document.querySelector('.menu')

const desktopBackgrounds = [
  'images/desktop-image-hero-1.jpg',
  'images/desktop-image-hero-2.jpg',
  'images/desktop-image-hero-3.jpg'
]
const mobileBackgrounds = [
  'images/mobile-image-hero-1.jpg',
  'images/mobile-image-hero-2.jpg',
  'images/mobile-image-hero-3.jpg'
]

let counter = 0

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active')
})

burger.addEventListener('click', () => {
  mobileMenu.classList.add('active')
})

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
  counter = counter === 0 ? 2 : counter -= 1
  changeBackground()
  changeHero()
})
})

nextBtns.forEach(btn => {
btn.addEventListener('click', () => {
  counter = counter === 2 ? 0 : counter += 1
  changeBackground()
  changeHero()
})
})

window.addEventListener('resize', changeBackground)

function changeHero() {
heros.forEach((hero, index) => {
    if(index === counter) {
      hero.classList.remove('hide')
    } else {
      hero.classList.add('hide')
    }
  })
}

function changeBackground() {
  if(innerWidth < 768) {
    menu.style.backgroundImage = `url(${mobileBackgrounds[counter]})`
  } else {
    menu.style.backgroundImage = `url(${desktopBackgrounds[counter]})`
  }
}