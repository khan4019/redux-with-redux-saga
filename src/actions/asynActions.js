export const loadAllProductsAction = () => ({
    type:'LOAD_ALL_PRODUCTS'
})

export const productsLoadedAction = products =>({
    type:'PRODUCTS_LOADED',
    products
})
