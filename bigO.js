// comparison the time with Big 0

// function addUpTo(n) {
//   return (n * (n + 1)) / 2
// }

function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}

// var time1 = perfomance.now()
// addUpTo(1000000000)
// var time2 = performance.now()
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
