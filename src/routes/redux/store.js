import { createStore } from "redux";
import {ResidentialAddressReducer, PropertyAddressReducer, EmploymentAddressReducer} from "./Addresses/AddressesReducer";

const redux = require('redux')




const combineReducers = redux.combineReducers;
const rootReducer =combineReducers({
   residential: ResidentialAddressReducer,
   property   : PropertyAddressReducer,
   employment : EmploymentAddressReducer
})

const store = createStore(rootReducer);

export default store