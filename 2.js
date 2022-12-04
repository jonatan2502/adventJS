function countHours(year, holidays) {
    let extraHours = 0
    for (const date of holidays) {
        let day = (new Date(date+'/'+year)).getDay()
        if (day >= 1 && day <= 5) {
            extraHours += 2
        }
    }
    return extraHours
}

console.log(countHours(2022, ['01/06', '04/01', '12/25']))
