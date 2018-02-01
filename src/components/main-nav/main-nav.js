import './main-nav.scss'
import template from './main-nav.pug'
import mainNavData from '../../data/main-nav.json'

export default class MainNav {
  constructor (node) {
    this.node = document.querySelector(node)
    this.node.innerHTML = template(mainNavData)
  }

  deploySubmenuEventLarge () {
    if (window.screen.width >= 1024) {
      this.items.forEach((_, index, array) => {
        array[index].addEventListener('mouseenter', e => {
          this.resetClass(index)
          array[index].querySelector('.submenu').classList.toggle('show')
          this.links[index].classList.toggle('animated')
        })
      })
    }
  }

  toggleMenuEvent () {
    const toggle = document.querySelector('.header__button')
    const nav = document.querySelector('.nav')
    toggle.addEventListener('click', e => {
      this.resetClass()
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('animated')
    })
  }

  resetClass (i) {
    this.items.forEach((_, index, array) => {
      if (i !== index) {
        array[index].querySelector('.submenu').classList.remove('show')
      }
    })
  }
}
