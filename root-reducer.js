import { combineReducers } from "redux";

import ourTeamReducer from "./components/OurTeam/OurTeam.reducer";
import shopCategoriesReducer from "./components/ShopCategories/ShopCategories.reducer";
import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products.reducer";

export const rootReducer = combineReducers({
  teamMembers: ourTeamReducer,
  shopCategories: shopCategoriesReducer,
  cart: cartReducer,
  products: productsReducer,
});
