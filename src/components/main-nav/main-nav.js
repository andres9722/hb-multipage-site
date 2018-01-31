import './main-nav.scss'
import template from './main-nav.pug'

export default class MainNav {
  constructor (node) {
    this.node = document.querySelector(node)
    this.html(template)
    this.events()
  }

  html (template) {
    let Parser = new DOMParser()
    let element = Parser.parseFromString(template, 'text/html').body.children[0]
    this.node.appendChild(element)
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
