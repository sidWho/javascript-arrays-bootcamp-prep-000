
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var array2 = [element,...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array1, element1){
  var array2 = [...array1,element1]
  return array2
}

function destructivelyAddElementToEndOfArray(array1, element1){
  array1.push(element1)
  return array1
}

function accessElementInArray(array, index){
    return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var array2 = array.slice(0, array.length - 1)
  return array2
}