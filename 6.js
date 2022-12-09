function createCube(size) {
  let botFace = ''
  let botLine = '/' + '_/'.repeat(size) + '\n'

  let topFace = ''
  let topLine =  '\\_'.repeat(size) + '\\\n'

  for (let i = 1; i <= size; i++) {
       topFace += ' '.repeat(size-i) + '/' + '\\/'.repeat(i-1) + topLine
       botFace += ' '.repeat(i-1) + '\\' + '\/\\'.repeat(size-i) + botLine
  }
  return (topFace + botFace).trimEnd()
}


console.log(createCube(3));
