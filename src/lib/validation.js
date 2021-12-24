const hasProductNameMinLength = (name, length) => name.length >= length
const isProductPriceValid = (price) => price > 0
//const hasSelectedCategory = TO DO
//const hasSelectedSize = TO DO
const isContactValid = (contact) => contact.includes('@') && contact.split('@')[1].includes('.')


const isValid = (product) => hasProductNameMinLength(product.name, 3) && isProductPriceValid(product.price) && isContactValid(product.contact)


export default isValid;