export { addSourceOfIncome }

function addSourceOfIncome(nameOrIndex) {
  if (nameOrIndex === undefined) {
    throw new Error('addSourceOfIncome requires a name or type number (1 to 3) of the source of income')
  }

  const source = typeof nameOrIndex === 'string'
    ? sources.find(source => source.name === nameOrIndex)
    : sources[nameOrIndex - 1]

  if (!source) {
    throw new Error(`Source not found: ${nameOrIndex}`)
  }

  if (state.balance < source.price) {
    throw new Error(`Not enough credits: it costs ${source.price}`)
  }

  state.balance -= source.price
  state.income += source.profit
  state.sources.push({ ...source })
}

import { sources } from "./config.js"
import { state } from "./state.js"
