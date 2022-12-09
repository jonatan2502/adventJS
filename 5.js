const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const sum = []
    for (let j = 0; j < giftsCities.length; j++) {
        let z = 0
        let count = giftsCities[j]
        let storage = {}
        storage[giftsCities[j]] = true
        console.log(storage)
        for (let i = 0; i < giftsCities.length; i++) {
            if (!storage[giftsCities[i]] && z < maxCities) {
                storage[giftsCities[i]] = true
                count = count + giftsCities[i]
                z++
                console.log(storage);
            }
        }
        sum.push(count)
        // count = 0
        // storage = {}
    }
    return sum
}

console.log(getMaxGifts(giftsCities, maxGifts, maxCities))
