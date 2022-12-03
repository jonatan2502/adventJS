function distributeGifts(packOfGifts, reindeers) {
    let packWeight = 0
    let capacity = 0
    packOfGifts.forEach( g => packWeight += g.length)
    reindeers.forEach( r => capacity += (r.length * 2))
    return Math.floor(capacity/packWeight)
  }

console.log(distributeGifts(['a', 'b', 'c'], ['d', 'e']))
console.log(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
