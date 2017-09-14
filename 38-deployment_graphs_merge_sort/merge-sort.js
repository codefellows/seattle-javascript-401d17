const merge = (left, right){
  let result = []

  while(left.length || right.length){
    if(!left.length){
      result.concat(right)
      return result
    }

    if(!right.length){
      result.concat(left)
      return result
    }

    if(left[0]< right[0]){
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return result
}

let mergeSort = module.exports = (items) => {
  if(items.length < 2)
    return items

  let middleIndex = Math.floor(items.length / 2)
  let left = items.slice(0, middleIndex)
  let right = items.slice(middleIndex)

  return merge(mergeSort(left), mergeSort(right))
}
