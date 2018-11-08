
const productReducers = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_TO_CART':
            let newCart;
            const id = action.id;
            if(state.includes(id)){
                newCart = state.filter(curr => curr !== id);
            }
            else {
                newCart = [...state, id]
            }
            return newCart;   
    
        default:
            return state;
    }
}

export default productReducers;