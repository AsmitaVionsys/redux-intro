// new way of using redux toolkit
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;

//old way of using redux toolkit

// import { applyMiddleware, combineReducers, createStore } from "redux";
// import accountReducer from "./features/accounts/accountSlice";
// import customerReducer from "./features/customers/customerSlice";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from '@redux-devtools/extension';

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
