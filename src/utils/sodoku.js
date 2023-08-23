export const checkValidSodoku = (board) => {
  const errors = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const k = board[i][j]
      if (k === 0) continue

      // column check
      for (let iTemp = i + 1; iTemp < 9; iTemp++) if (board[iTemp][j] === k) errors.add('' + i + j).add('' + iTemp + j)

      // row check
      for (let jTemp = j + 1; jTemp < 9; jTemp++) if (board[i][jTemp] === k) errors.add('' + i + j).add('' + i + jTemp)

      // block check
      for (let iTemp = i + 1; iTemp < 3 * Math.ceil((i + 1) / 3); iTemp++) {
        for (let jTemp = 3 * Math.floor(j / 3); jTemp < 3 * Math.ceil((j + 1) / 3); jTemp++) {
          if (board[iTemp][jTemp] === k) errors.add('' + i + j).add('' + iTemp + jTemp)
        }
      }
    }
  }

  return errors
}
