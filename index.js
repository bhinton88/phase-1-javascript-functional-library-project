// function myEach(collection, callback) {
//   if(Array.isArray(collection) === true){
//     for(let i = 0; i < collection.length; i++){
//       callback(collection[i])
//     }
//   } else {
//     const objValues = Object.values(collection)
//     for(let i = 0; i < objValues.length; i++){
//       callback(objValues[i])
//     }
//   }
//   return collection
// }

function myEach(collection, callback) {
  const objValues = Object.values(collection)
  for(let i = 0; i < objValues.length; i++){
    callback(objValues[i])
  }
  return collection
} // needs to return the original collection, not sure why its not passing?

function myMap(collection, callback) {
  collection = Object.values(collection)
  let updatedArray = []
  for(let i = 0; i < collection.length; i ++){
    let newIndex = callback(collection[i])
    updatedArray.push(newIndex)
  }
  return updatedArray
}


// function myMap(collection, callback) {
//   if(Array.isArray(collection) === true) {
//     const newArray = collection.map(value => callback(value))
//     return newArray
//   } else {
//     const objValues = Object.values(collection)
//     const newArray = objValues.map(value => callback(value))
//     return newArray
//   }
// }



function myReduce(collection, callback, acc) {
  collection = Object.values(collection)
  if(acc === undefined){
    acc = collection[0] // if the acc is NOT passed as an argument, we set the acc to the first value in the array
    collection = collection.slice(1) // need to account for the fact that the acc starts at the first index.. starting counting at 2nd index
  }
  for(let i = 0; i < collection.length; i++) {
    acc = callback(acc, collection[i], collection)
  }
return acc
}

// function myReduce(collection, callback, acc) {
//     collection = Object.values(collection)
//     if(acc === undefined){
//       acc = collection[0] // if the acc is NOT passed as an argument, we set the acc to the first value in the array
//       collection = collection.slice(1) // need to account for the fact that the acc starts at the first index.. starting counting at 2nd index
//     }
//     collection.forEach(value => {
//       acc = callback(acc,value,collection) 
//   })
//   return acc
// }


function myFind(collection, predicate) {
  collection = Object.values(collection)
  for(let i = 0; i < collection.length; i ++){
    if(predicate(collection[i]) === true){
      return collection[i]
    }
  }
}

// function myFind(collection, predicate) {
//   if(Array.isArray(collection) === true) {
//    return collection.find(value => predicate(value))
//   } else {
//     const objValues = Object.values(collection)
//     return objValues.find(value => predicate(value))
//   }
// }

function myFilter(collection, predicate) {
  collection = Object.values(collection)
  let filterArray = []
  for(let i = 0; i < collection.length; i++) {
    if(predicate(collection[i]) === true) {
      filterArray.push(collection[i])
    }
  }
  return filterArray
}

// function myFilter(collection, predicate) {
//   if(Array.isArray(collection) === true) {
//       return collection.filter(value => predicate(value))
//     } else {
//       const objValues = Object.values(collection)
//       return objValues.filter(value => predicate(value))
//     }
// }


function mySize(collection) {
  collection = Object.values(collection) 

  return collection.length
}

// function mySize(collection) {
//   if(Array.isArray(collection) === true) {
//     return collection.length
// } else {
//   const objValues = Object.keys(collection)
//   return objValues.length
// }
// }

function myFirst(array, n) {
  if(n === undefined){
    return array[0]
  } else {
    return array.slice(0,n)
  }
}

function myLast(array, n) {
  if(n === undefined) {
    return array[array.length - 1]
  } else {
    n = -Math.abs(n)
    return array.slice(n)
  }
}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}