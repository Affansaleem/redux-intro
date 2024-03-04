import { combineReducers, createStore } from "redux";
import customerReducer from "../src/features/customers/customerSlice";
import accountReducer from "../src/features/accounts/accountSlice";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});
const store = createStore(rootReducer);

export default store;

// For account testing

// store.dispatch(deposit(5000));
// console.log(store.getState());
// store.dispatch(withdraw(500));
// console.log(store.getState());
// store.dispatch(requestLoan(500, "Purchase car"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// For checking purpose
// store.dispatch(createCustomer("Affan Saleem", "123456"));
// console.log(store.getState());
// store.dispatch(updateName("Abdullah Saleem"));
// console.log(store.getState());
