import './hero-decorative.scss'
import template from './hero-decorative.pug'
import heroData from '../../data/main-nav.json'

export default class HeroDecorative {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.node.innerHTML = template(heroData)
    this.imageContainer = document.querySelector('.hero2__img')
    this.mediaQueries(heroData)
  }

  mediaQueries (heroData) {
    let small = `url('${heroData.header2.images.small.url}')`
    let medium = `url('${heroData.header2.images.medium.url}')`
    let large = `url('${heroData.header2.images.large.url}')`

    let mediaSmall = window.matchMedia("(min-width: 320px)")
    let mediaMedium = window.matchMedia("(max-width: 640px)")
    let mediaLarge = window.matchMedia("(max-width: 1024px)")

    this.imageContainer.style.backgroundImage = small

    mediaSmall.addListener(e => {
      this.imageContainer.style.backgroundImage = small
    })

    mediaMedium.addListener(e => {
      this.imageContainer.style.backgroundImage = medium
    })

    mediaLarge.addListener(e => {
      this.imageContainer.style.backgroundImage = large
    })
  }
}
