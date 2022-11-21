export { run }

function run(fn, interval) {
  fn()
  
  setInterval(fn, interval)
}
