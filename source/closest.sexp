mixin('closest', ['selector', 'ancestor', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    filterFunc('tag.closest(ancestor)',
      reduceFunc(
        createAttribute(['selector', 'ancestor'],
          addAttribute('tag.closest(ancestor)', 'closest',
            addRule('${ancestor}', '', 'closest')))))))
