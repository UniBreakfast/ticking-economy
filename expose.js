export { expose }

const { entries, keys } = Object

expose({ expose })

let timerId

function expose(...objects) {
  for (const obj of objects) {
    for (const [key, value] of entries(obj)) {
      globalThis[key] = expose[key] = value
    }
  }

  clearTimeout(timerId)

  timerId = setTimeout(() => {
    console.log(keys(expose).join(', '))
    console.dir(expose)
  }, 1_000)
}
