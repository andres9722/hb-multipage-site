import './hero-decorative.scss'
import template from './hero-decorative.pug'
import heroData from '../../data/main-nav.json'

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
    if (window.innerWidth < 640) {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.small
    } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.medium
    } else {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.large
    }
  }

  mediaQueries () {
    const mediaSmall = window.matchMedia('(min-width: 320px)')
    const mediaMedium = window.matchMedia('(min-width: 640px)')
    const mediaLarge = window.matchMedia('(min-width: 1024px)')

    mediaSmall.addListener(() => {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.small
    })

    mediaMedium.addListener(() => {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.medium
    })

    mediaLarge.addListener(() => {
      this.imageContainer.style.backgroundImage = HeroDecorative.sizes.large
    })
  }
}
