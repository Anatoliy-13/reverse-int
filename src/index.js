module.exports = function reverse (n) {
    let num = n;
    return (
        parseFloat(
          num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) 
      )  
}
