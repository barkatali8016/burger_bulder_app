import * as actionTypes from './action'
const initialState={
    ingredient: {
        salad:0,
        bacon:0,
        meat:0,
        cheese:0
    },
    burgerPrice: 4,
};
const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredient:{
                    ...state.ingredient,
                    [action.ingredientName]:state.ingredient[action.ingredientName]+1
                },
                burgerPrice:state.burgerPrice +INGREDIENT_PRICE[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
                return {
                    ...state,
                    ingredient:{
                        ...state.ingredient,
                        [action.ingredientName]:state.ingredient[action.ingredientName]-1
                    },
                    burgerPrice:state.burgerPrice -INGREDIENT_PRICE[action.ingredientName]
                }
            default:return state;
    }
}

export default reducer;