function getFilesToBackup(lastBackup, changes) {
    const idsToBackup = []
    for (let i = 0; i < changes.length; i++) {
       if (lastBackup < changes[i][1]) idsToBackup.push(changes[i][0])
    }
    return [...new Set (
        changes.filter(e => e[1] > lastBackup)
        .map(e => e[0])
        .sort((a,b) => a-b)
    )]
}

// function getFilesToBackup(lastBackup, changes) {
//     const idsToBackup = {}
//     for (let i = 0; i < changes.length; i++) {
//        if (lastBackup < changes[i][1] && !idsToBackup[changes[i][0]]) idsToBackup[changes[i][0]] = true
//     }
//     const sorted = Object.keys(idsToBackup).sort((a, b) => {
//         if (a < b) return -1;
//         if (a > b) return 1;
//         return 0;
//     })
//     return sorted.map(id => Number(id))
// }




const lastBackup = 1546300800

const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup, changes))
