function multiply(firstMatrix, secondMatrix) {
    const rowsFirstMatrix = firstMatrix.length;
    const colsFirstMatrix = firstMatrix[0].length;
    const rowsSecondMatrix = secondMatrix.length;
    const colsSecondMatrix = secondMatrix[0].length;
  
    const result = new Array(rowsFirstMatrix);
    for (let i = 0; i < rowsFirstMatrix; i++) {
      result[i] = new Array(colsSecondMatrix).fill(0);
    }
  
    for (let i = 0; i < rowsFirstMatrix; i++) {
      for (let j = 0; j < colsSecondMatrix; j++) {
        for (let k = 0; k < colsFirstMatrix; k++) {
          result[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
        }
      }
    }
    for(let i=0; i<result.length; i++){
        console.log(result[i]);
    }
  }
  const firstMatrix = [[4, 8, 9, 4], [3, 0, 1, 7], [6, 4, 3, 2]];
  const secondMatrix = [[4, 3], [8, 3], [9, 1], [4, 7]];
  
  const resultMatrix = multiply(firstMatrix, secondMatrix);
  
  