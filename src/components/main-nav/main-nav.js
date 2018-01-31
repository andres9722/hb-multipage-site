import './main-nav.scss'
import template from './main-nav.pug'
import mainNavData from '../../data/main-nav.json'

export default class MainNav {
  constructor (node) {
    this.node = document.querySelector(node)
    this.node.innerHTML = template(mainNavData)
    this.deployMenuEvent()
    this.toggleMenuEvent()
  }

  deployMenuEvent () {
    let menus = document.querySelectorAll('.menu__item')
    let links = document.querySelectorAll('.menu__link')
    menus.forEach((_, index, array) => {
      array[index].addEventListener('click', e => {
        this.resetClass(index)
        array[index].querySelector('.submenu').classList.toggle('show')
        links[index].classList.toggle('animated')
      })
    })
  }

  toggleMenuEvent () {
    let toggle = document.querySelector('.header__button')
    let nav = document.querySelector('.nav')
    toggle.addEventListener('click', e => {
      this.resetClass()
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('animated')
    })
  }

  resetClass (i) {
    let menus = document.querySelectorAll('.menu__item')
    menus.forEach((_, index, array) => {
      if (i !== index) {
        array[index].querySelector('.submenu').classList.remove('show')
      }
    })
  }
}
