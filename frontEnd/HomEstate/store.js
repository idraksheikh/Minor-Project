import {configureStore,combineReducers} from "@reduxjs/toolkit";
import sellingReducers from "./Slices/sellingSlice";  
import userReducers from "./Slices/userSlice";   

const reducer=combineReducers({

    sellingproperty:sellingReducers,
    userinformation:userReducers
})
const store=configureStore({
    
    
    reducer

});
export default  store;