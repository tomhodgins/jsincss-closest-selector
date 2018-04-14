export default (selector, ancestor, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.closest(ancestor))

    .reduce((styles, tag, count) => {

      const attr = (selector+ancestor).replace(/\W/g, '')

      tag.closest(ancestor).setAttribute(`data-closest-${attr}`, count)
      styles += `${ancestor}[data-closest-${attr}="${count}"] { ${rule} }\n`
      count++

      return styles

    }, '')

}