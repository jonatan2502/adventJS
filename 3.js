function distributeGifts(packOfGifts, reindeers) {
    let packWeight = 0
    let capacity = 0
    for (let index = 0; index < packOfGifts.length; index++) {
        packWeight += packOfGifts[index].length
    }
    for (let index = 0; index < reindeers.length; index++) {
        packWeight += (reindeers[index].length * 2)
    }
    return Math.floor(capacity/packWeight)
  }

console.log(distributeGifts(['a', 'b', 'c'], ['d', 'e']))
console.log(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
