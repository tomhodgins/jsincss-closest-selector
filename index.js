export default (selector, ancestor, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.closest(ancestor))
    .forEach(tag => {

      const attr = (selector+ancestor).replace(/\W/g, '')

      tag.closest(ancestor).setAttribute(`data-closest-${attr}`, count)
      styles += `${ancestor}[data-closest-${attr}="${count}"] { ${rule} }\n`
      count++

    })

  return styles

}