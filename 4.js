const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
function fitsInOneBox(boxes) {
    let fits = false

    boxes.sort((a, b) => {
        if ((a.l + a.w + a.h) < (b.l + b.w + b.h)) return -1
        if ((a.l + a.w + a.h) > (b.l + b.w + b.h)) return 1
        else return 0
    })

    for (let i = 0; i < boxes.length-1; i++) {
        if ((boxes[i].l < boxes[i+1].l) && (boxes[i].w < boxes[i+1].w) && (boxes[i].h < boxes[i+1].h)) fits = true
        else fits = false
    }

    return fits
}


console.log(fitsInOneBox(boxes))
