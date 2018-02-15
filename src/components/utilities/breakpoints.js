export default class Breakpoints {
  static get size () {
    return {
      small: '320px',
      medium: '640px',
      large: '1024px'
    }
  }

  static matchMediaSmall () {
    return window.matchMedia(`(min-width: ${Breakpoints.size.small})`)
  }

  static matchMediaMedium () {
    return window.matchMedia(`(min-width: ${Breakpoints.size.medium})`)
  }

  static matchMediaLarge () {
    return window.matchMedia(`(min-width: ${Breakpoints.size.large})`)
  }
}
