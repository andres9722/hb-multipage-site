import './hero-decorative.scss'
import template from './hero-decorative.pug'
import heroData from '../../data/data.json'
import Breakpoints from '../utilities/breakpoints'

export default class HeroDecorative {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.node.innerHTML = template(heroData)
    this.imageContainer = this.node.querySelector('.hero2__img')
    this.setDefaultImage()
    this.mediaQueries()
  }

  static get sizes () {
    return {
      small: `url('${heroData.header2.images.small.url}')`,
      medium: `url('${heroData.header2.images.medium.url}')`,
      large: `url('${heroData.header2.images.large.url}')`
    }
  }

  setDefaultImage () {
    if (window.innerWidth < Breakpoints.size.medium.replace('px', '')) {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.small
    } else if (window.innerWidth > Breakpoints.size.medium.replace('px', '') && window.innerWidth < Breakpoints.size.large.replace('px', '')) {
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
