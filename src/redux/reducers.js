// src/redux/reducers.js

import { combineReducers } from "redux";
import recipesReducer from "./recipesSlice";
import authReducer from "./slice";
// Możesz dodać inne reduktory tutaj, np.:
// import anotherReducer from './anotherSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
  // Dodaj inne reduktory tutaj, np.:
  // anotherSlice: anotherReducer,
});

export default rootReducer;
