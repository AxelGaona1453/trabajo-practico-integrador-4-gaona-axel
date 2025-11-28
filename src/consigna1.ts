const productName: string = "Leche serenito"
console.log(productName)

const productPrice: number = 300
console.log(productPrice)

let productId: string | number //union type

productId = 1

console.log(productId)

productId = "001"
console.log(productId)

interface Product {
  name: string,
  price: number
}

let myProduct: Product = {
  name: "Fernet Branca",
  price: 12000
}

console.log(myProduct)