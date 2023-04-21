import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesReducer";



export const  store = configureStore({
  reducer : {
    favoriteMeals : favoritesReducer
  }
});