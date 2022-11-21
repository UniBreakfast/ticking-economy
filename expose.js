export { expose }

const { entries, keys } = Object

expose({ expose })

function expose(...objects) {
  for (const obj of objects) {
    for (const [key, value] of entries(obj)) {
      globalThis[key] = expose[key] = value
    }
  }

  clearTimeout(expose.timerId)

  expose.timerId = setTimeout(() => {
    console.log(keys(expose).join(', '))
    console.dir(expose)
  }, 1_000)
}
