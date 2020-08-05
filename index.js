const sudoku = new Sudoku(
  `
  0 0 0  0 0 0  0 0 0
  0 0 3  0 0 3  0 0 0
  0 0 0  0 0 0  0 0 0

  0 0 0  0 0 0  0 0 0
  0 0 0  0 0 3  0 0 0
  0 0 0  0 0 0  0 0 0

  0 0 0  0 0 0  0 0 0
  0 0 0  0 0 0  0 0 0
  0 0 0  0 0 0  0 0 0
  `
)


document.querySelector('#app').append(sudoku.getHTML(750))
console.log(sudoku)