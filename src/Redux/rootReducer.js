import { combineReducers } from "redux";
import themeReducer from "./theme/Theme";
import cartReducer from "./cart/Cart";
import loadingReducer from "./loading/Loading";
import Autheducer from "./Auth/Auth";

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  Auth: Autheducer,
  loading: loadingReducer,
});

export default rootReducer;
