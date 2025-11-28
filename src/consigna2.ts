function updateStock(currentStock: number, quantityChange: number): number{
  return currentStock + quantityChange
}

const updatedStock = updateStock(2, 4)
console.log(updatedStock)