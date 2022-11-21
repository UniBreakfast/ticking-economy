const state = {}

export { state }

state.balance = 0
state.income = basicIncome
state.sources = []

expose({state})

import { basicIncome } from "./config.js"
