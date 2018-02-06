import './main-nav.scss'
import template from './main-nav.pug'
import mainNavData from '../../data/main-nav.json'

export default class MainNav {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.node.innerHTML = template(mainNavData)
    this.items = this.node.querySelectorAll('.menu__item')
    this.links = this.node.querySelectorAll('.menu__link')
    this.toggle = this.node.querySelector('.header__button')
    this.nav = this.node.querySelector('.nav')
    this.deploySubmenuEvent()
    this.toggleMenuEvent()
  }

  static get states () {
    return {
      menuLinkAnimated: 'menu__link--animated',
      submenuShow: 'submenu--show',
      navShowMenu: 'nav--show-menu',
      headerButtonAnimated: 'header__button--animated'
    }
  }

  deploySubmenuEvent () {
    this.items.forEach((item, index, array) => {
      item.addEventListener('click', e => {
        this.resetClass(index)
        item.querySelector('.submenu').classList.toggle(MainNav.states.submenuShow)
        this.links[index].classList.toggle(MainNav.states.menuLinkAnimated)
      })
    })
  }

  toggleMenuEvent () {
    this.toggle.addEventListener('click', e => {
      this.resetClass()
      this.nav.classList.toggle(MainNav.states.navShowMenu)
      this.toggle.classList.toggle(MainNav.states.headerButtonAnimated)
    })
  }

  resetClass (i) {
    this.items.forEach((item, index, array) => {
      if (i !== index) {
        array[index].querySelector('.submenu').classList.remove(MainNav.states.submenuShow)
      }
    })
  }
}
