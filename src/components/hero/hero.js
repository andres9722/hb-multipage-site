import './hero.scss'
import template from './hero.pug'
import heroData from '../../data/data.json'

export default class Hero {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.node.innerHTML = template(heroData)
  }
}
