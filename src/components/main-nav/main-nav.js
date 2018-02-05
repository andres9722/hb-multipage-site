import './main-nav.scss'
import template from './main-nav.pug'
import mainNavData from '../../data/main-nav.json'

export default class MainNav {
  constructor (node) {
    this.node = document.querySelector(node)
    this.node.innerHTML = template(mainNavData)
    this.items = this.node.querySelectorAll('.menu__item')
    this.links = this.node.querySelectorAll('.menu__link')
    this.toggle = document.querySelector('.header__button')
    this.nav = document.querySelector('.nav')
    this.deploySubmenuEvent()
    this.toggleMenuEvent()
  }

  static get states () {
    return {
      menuLinkAnimated: 'menu__link--animated'
    }
  }

  deploySubmenuEvent () {
    this.items.forEach((item, index, array) => {
      item.addEventListener('click', e => {
        this.resetClass(index)
        item.querySelector('.submenu').classList.toggle('submenu--show')
        this.links[index].classList.toggle(MainNav.states.menuLinkAnimated)
      })
    })
  }

  toggleMenuEvent () {
    this.toggle.addEventListener('click', e => {
      this.resetClass()
      this.nav.classList.toggle('nav--show-menu')
      this.toggle.classList.toggle('header__button--animated')
    })
  }

  resetClass (i) {
    this.items.forEach((item, index, array) => {
      if (i !== index) {
        array[index].querySelector('.submenu').classList.remove('submenu--show')
      }
    })
  }
}
