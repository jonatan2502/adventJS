const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
    const wrappedGifts = []
    for (let i = 0; i < gifts.length; i++) {
        let size = gifts[i].length + 2
        wrappedGifts.push('*'.repeat(size)+'\n'+'*'+gifts[i]+'*'+'\n'+'*'.repeat(size))
    }
    return wrappedGifts
  }
   
 console.log(wrapping(gifts)) 


/* [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
