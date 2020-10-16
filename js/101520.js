function longestSlideDown (pyramid) {

  for(let i = pyramid.length - 2; i >= 0; i--)
    for(j = 0; j <= i; j++)
      pyramid[i][j] += Math.max(pyramid[i+1][j], pyramid[i+1][j+1])

  return pyramid[0][0]
}

const longestSlideDown = pyramid => {
  return pyramid
    .reverse()
    .reduce((sum, row) => {
      return row.map((element, i) => {
        return element + Math.max(sum[i], sum[i+1])
      })
    })[0]
}
