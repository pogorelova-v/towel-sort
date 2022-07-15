module.exports = function towelSort (matrix = []) {

  let res = [];

  for(let i = 0; i < matrix.length; i++) {
      let num = matrix[i];
      if (i % 2 === 0) {
        res.push(num);
      } else {
        res.push(num.reverse());
      }
  }
  return res.flat();
}
