import {createStore} from 'redux';
import reducres from "./reducers/index";
const store =createStore(reducres,{});

export default store;
