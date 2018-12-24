export default (selector, ancestor, rule) => {
  const attr = (selector + ancestor).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.closest(ancestor))
    .reduce((output, tag, count) => {
      output.add.push({tag: tag.closest(ancestor), count: count})
      output.styles.push(`${ancestor}[data-closest-${attr}="${count}"] { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-closest-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-closest-${attr}`, ''))
  return result.styles.join('\n')
}
