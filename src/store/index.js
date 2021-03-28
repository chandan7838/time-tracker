import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(...enhancerList);

const store = () => createStore(rootReducer, {}, composedEnhancer);

export default store;
