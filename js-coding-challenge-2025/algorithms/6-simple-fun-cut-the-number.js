function cut(number, target) {
  const n = number.length;
  const memo = new Array(n + 1)
    .fill(null)
    .map(() => new Array(target + 1).fill(-Infinity));

  function solve(index, currentSum) {
    if (currentSum > target) {
      return -Infinity;
    }
    if (index === n) {
      return currentSum;
    }
    if (memo[index][currentSum] !== -Infinity) {
      return memo[index][currentSum];
    }

    let maxResult = -Infinity;
    for (let i = index; i < n; i++) {
      const pieceStr = number.substring(index, i + 1);
      const pieceInt = parseInt(pieceStr);
      if (!isNaN(pieceInt)) {
        const result = solve(i + 1, currentSum + pieceInt);
        maxResult = Math.max(maxResult, result);
      }
    }
    memo[index][currentSum] = maxResult;
    return maxResult;
  }

  const finalResult = solve(0, 0);
  return finalResult < 0 ? -1 : finalResult;
}
