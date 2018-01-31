import './logo.scss'
import template from './logo.pug'

export default class Logo {
  constructor (node) {
    this.node = document.querySelector(node)
    this.html(template)
  }

  html (template) {
    let Parser = new DOMParser()
    let element = Parser.parseFromString(template, 'text/html').body.children[0]
    this.node.appendChild(element)
  }
}
