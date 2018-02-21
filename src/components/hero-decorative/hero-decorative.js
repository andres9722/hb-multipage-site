import './hero-decorative.scss'
import template from './hero-decorative.pug'
import dataJson from '../../data/data.json'
import Breakpoints from '../utilities/breakpoints'

export default class HeroDecorative {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.node.innerHTML = template(dataJson)
    this.imageContainer = this.node.querySelector('.hero2__img')
    this.setDefaultImage()
    this.mediaQueries()
  }

  static get sizes () {
    return {
      small: `url('${dataJson.header2.images.small.url}')`,
      medium: `url('${dataJson.header2.images.medium.url}')`,
      large: `url('${dataJson.header2.images.large.url}')`
    }
  }

  setDefaultImage () {
    if (window.innerWidth < Breakpoints.sizes.medium) {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.small
    } else if (window.innerWidth > Breakpoints.sizes.medium && window.innerWidth < Breakpoints.sizes.large) {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.medium
    } else {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.large
    }
  }

  mediaQueries () {
    Breakpoints.matchMediaSmall().addListener(() => {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.small
    })

    Breakpoints.matchMediaMedium().addListener(() => {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.medium
    })

    Breakpoints.matchMediaLarge().addListener(() => {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.large
    })
  }
}
