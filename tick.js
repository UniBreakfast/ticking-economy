export { tick }

function tick() {
  state.balance += state.income
}

import { state } from './state.js'
