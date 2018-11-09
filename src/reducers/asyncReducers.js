
const asyncReducers = (state=[], action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return action.products;
        case 'LOAD_ALL_PRODUCTS':
            return state;
        default:
            return state;
    }
}

export default asyncReducers;