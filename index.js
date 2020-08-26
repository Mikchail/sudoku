
const sudoku = Sudoku.generate(30)

document.querySelector('#app').append(sudoku.getHTML(750))
/*

const sudoku = new Sudoku(
  `
  5 0 3  0 0 4  6 7 0
  0 9 0  2 5 0  8 3 1
  0 0 2  6 0 3  0 0 9

  0 2 0  3 7 0  0 1 5
  0 0 8  0 2 0  7 6 0
  3 0 0  5 6 0  0 0 0

  4 6 0  0 0 0  1 0 7
  2 8 1  0 4 0  0 0 0
  0 0 5  0 9 0  0 8 0
  `
)

window.sudoku = sudoku;
document.querySelector('#app').append(sudoku.getHTML(750))
*/