import {createSlice} from "@reduxjs/toolkit";
import createApi from "./createApi";
export const STATUS=Object.freeze({
    LOADING:'loading',
    IDLE:'idle',
    ERROR:'error'
});

export const sellingSlice=createSlice({
    name:"propertyin",
    initialState:{
        selling:[],
        status:STATUS.IDLE,
        message:"inital state",
    },
    reducers:{
       
        postSellingProperty(state,action){
            
            state.selling=action.payload;
            //  console.log(state.selling);

        },
        setStatus(state,action){
           
            state.status=action.payload;
            // console.log(state.status);
        },
        setMessage(state,action){
            state.message=action.payload;
        },
    }

});

export const  {postSellingProperty, setStatus,setMessage} =sellingSlice.actions;
export default sellingSlice.reducer;

export function get_property_info(dataInput){
    return async function getpropertyInfoThunk(dispatch,getState){
       
        dispatch(setStatus(STATUS.LOADING));
       
        dispatch(setMessage("Geting property informations."));
        
        try {
          
            const {data}=await createApi.get(`/property/properties?city=${dataInput}`);
           
            dispatch(postSellingProperty(data.sellProperties));
            
            dispatch(setStatus(STATUS.IDLE));
            dispatch(setMessage("Property information accessed."));

        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
            dispatch(setMessage(error.response.data.message));
        }

    }
}

export function get_property_info_by_city(dataInput){
    return async function getpropertyInfoByCityThunk(dispatch,getState){
       
        dispatch(setStatus(STATUS.LOADING));
       
        dispatch(setMessage("Geting property informations."));
        
        try {
          
            const {data}=await createApi.get(`/property/propertiesincity?city=${dataInput}`);
           
            dispatch(postSellingProperty(data.sellProperties));
            
            dispatch(setStatus(STATUS.IDLE));
            dispatch(setMessage("Property information accessed."));

        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
            dispatch(setMessage(error.response.data.message));
        }

    }
}
export function selling_property(dataInput){
    return async function sellingPropertyThunk(dispatch,getState){
        console.log('run1');
        dispatch(setStatus(STATUS.LOADING));
        console.log('run2');
        dispatch(setMessage("Storing Property information."));
        console.log('run3');
        
        try {
            console.log('run4');
            console.log(dataInput);
            const {dataOutput}=await createApi.post("/property/selling",dataInput);
            console.log('run5');
            
            dispatch(postSellingProperty(dataOutput));
            console.log('run6');
            dispatch(setStatus(STATUS.IDLE));
            dispatch(setMessage("Property information got stored."));

        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
            dispatch(setMessage(error.response.data.message));
        }
        

    }
}