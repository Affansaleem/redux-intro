import { applyMiddleware, combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

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
