const redux =require('redux');

const createStore=redux.createStore;


//initial store
const initialStore={
    counter:0
}
//reducer
const rootReducer=(state=initialStore,action)=>{

    if(action.type==='INC_COUNTER'){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
    return state;
}

//stores
const  store=createStore(rootReducer);
console.log(store.getState());

//subscription

store.subscribe(()=>{
    console.log('[Subcribe is called when action is oocured]',store.getState());
})

//actions 
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});

console.log(store.getState());


