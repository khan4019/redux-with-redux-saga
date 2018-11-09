
const asyncReducers = (state=[], action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED':
            console.log('in reducer', action.products);
            return action.products;
        case 'LOAD_ALL_PRODUCTS':
            return state;
        default:
            return state;
    }
}

export default asyncReducers;