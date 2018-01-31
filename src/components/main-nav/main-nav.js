import './main-nav.scss'
import template from './main-nav.pug'
import mainNavData from '../../data/main-nav.json'

export default class MainNav {
  constructor (node) {
    this.node = document.querySelector(node)
    this.node.innerHTML = template(mainNavData)
    this.events()
  }

  events () {
    let menus = document.querySelectorAll('.main-menu__item')
    menus.forEach((menu, index, array) => {
      array[index].addEventListener('click', e => {
        array[index].querySelector('.submenu').classList.toggle('show')
      })
    })
  }
}
