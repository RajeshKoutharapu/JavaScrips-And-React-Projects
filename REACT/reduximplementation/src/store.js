import { createStore } from 'redux';

// Initial State
const initialState = {
    amount:0,
    name: "",
    mobile:""
};

// Reducer Function
function reducer(state = initialState, action) {
    switch (action.type) {
        case "deposit":
            return { ...state, amount: state.amount + Number(action.amount) };
        case "withdraw":
              return {...state,amount: state.amount - Number(action.amount)};
        case "namechange":
             return {...state,name:action.newname}
        case "numberchange":
            return {...state,mobile:action.newnumber}
        default:
            return state;
    }
}

// Create Store
const store = createStore(reducer);

export default store;
