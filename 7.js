const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

function getGiftsToRefill(a1, a2, a3) {
    const st1 = a1.filter( e => !(a2.includes(e) || a3.includes(e)))
    const st2 = a2.filter( e => !(a1.includes(e) || a3.includes(e)))
    const st3 = a3.filter( e => !(a1.includes(e) || a2.includes(e)))
    return [...new Set(st1.concat(st2).concat(st3))]

    // const size = Math.max(a1.length, a2.length, a3.length)
    // const s1 = []
    // const s2 = []
    // const s3 = []
    // for (let i = 0; i < size; i++) {
    //     if (!(a2.includes(a1[i]) || a3.includes(a1[i]))) a1[i] && s1.push(a1[i])
    //     if (!(a1.includes(a2[i]) || a3.includes(a2[i]))) a2[i] && s2.push(a2[i])
    //     if (!(a1.includes(a3[i]) || a2.includes(a3[i]))) a3[i] && s3.push(a3[i])
    // }

    // return [...new Set(s1.concat(s2).concat(s3))]
}

console.log(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']));
