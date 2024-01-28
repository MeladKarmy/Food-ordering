import { combineReducers } from "redux";
import themeReducer from "./theme/Theme";
import cartReducer from "./cart/Cart";
import loadingReducer from "./loading/Loading";

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  loading: loadingReducer,
});

export default rootReducer;
