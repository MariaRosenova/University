function secondaryDiagonal(matrix) {
    const n = matrix.length;
    const secondaryDiagonal = [];
  
    for (let i = 0; i < n; i++) {
      secondaryDiagonal.push(matrix[i][n - i - 1]);
    }
  
    return secondaryDiagonal;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const elementsOnSecondaryDiagonal = secondaryDiagonal(matrix);
  console.log(elementsOnSecondaryDiagonal);