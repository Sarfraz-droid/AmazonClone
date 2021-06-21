export const initialState = {
    basket: [],
    user: null
}; 

const reducer = (state,action) => {

    console.log(state);
    switch (action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => {
                return basketItem.title == action.title;
            });

            let newBasket = [...state.basket];

            newBasket.splice(index, 1);

            return { ...state,
                basket: [...newBasket]};
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user        
            }
        default:
            return state; 
    }
}

export default reducer;