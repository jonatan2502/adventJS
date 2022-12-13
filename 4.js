const boxes = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ]
  
function fitsInOneBox(boxes) {
    boxes.sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))

    for (let i = 0; i < boxes.length-1; i++) {
        if ((boxes[i].l < boxes[i+1].l) && (boxes[i].w < boxes[i+1].w) && (boxes[i].h < boxes[i+1].h)) continue
        return false
    }
    return true
}


console.log(fitsInOneBox(boxes))
