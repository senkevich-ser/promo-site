 const filterCards=(arr,id,idItem)=>{
  const newArr = arr.filter(x => {
    return x[id] !== idItem;
  })
  return newArr;
}

const filterCategories=(arr,id,idItem)=>{
  const newArr = arr.filter(x => {
    return x[id] === idItem;
  })
  return newArr;
}

export {filterCards,filterCategories}