import './logo.scss'
import template from './logo.pug'
import mainNavData from '../../data/main-nav.json'

export default class Logo {
  constructor (node) {
    this.node = document.querySelector(node)
    this.node.innerHTML = template(mainNavData)
  }
}
