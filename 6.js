function createCube(size) {
  let bottomRightFace = ''
  let bottomRightLine = '/' + '_/'.repeat(size) + '\n'

  let topRightFace = ''
  let topRightLine =  '\\_'.repeat(size) + '\\\n'

  for (let i = 1; i <= size; i++) {
       topRightFace += ' '.repeat(size-i) + '/' + '\\/'.repeat(i-1) + topRightLine
       bottomRightFace += ' '.repeat(i-1) + '\\' + '\/\\'.repeat(size-i) + bottomRightLine
  }
  return (topRightFace + bottomRightFace).trimEnd()
}


console.log(createCube(3));
