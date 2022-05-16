import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "./sellingSlice";
import createApi from "./createApi";
export const userSlice=createSlice({
    name:"userin",
    initialState:{
        status:STATUS.IDLE,
        isAuth:false,
        message:"initial state",
        user:[],
    },
    reducers:{
            setAuth(state,action){
                state.isAuth=action.payload;
            },
            setUser(state,action){
                state.user=action.payload;
            },
            setStatus(state,action){           
                state.status=action.payload;
                // console.log(state.status);
            },
            setMessage(state,action){
                state.message=action.payload;
            },
            logout(state,action){
                state.isAuth=false;
            },
        
    },
});
export const {setMessage,setStatus,setAuth,setUser,logout}=userSlice.actions;
export default userSlice.reducer;

export function login_check(userInput){
    
    return async function login_check_Thunk(dispatch,getState){
        dispatch(setStatus(STATUS.LOADING));
        dispatch(setMessage("Sending User Information"));
        console.log(userInput);
             
        try {
            console.log("run2");
            
            const {data}=await createApi.post("/user/login",userInput);
            console.log("run3");
            
            if(!(data.success)){
                
               dispatch(setMessage(data.message));
            
            }
            else{
                dispatch(setAuth(true));
            }
            
            dispatch(setStatus(STATUS.IDLE));
            dispatch(setMessage("Login Succesfull."));

        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
            dispatch(setAuth(false));
            dispatch(setMessage(error.response.data.message));
        }
}
    
};
export function signup_check(userInput){
    
    return async function signup_check_Thunk(dispatch,getState){
        dispatch(setStatus(STATUS.LOADING));
        dispatch(setMessage("Sending User Information"));
             
        try {
            console.log("run2");
            dispatch(setAuth(false));
            const {data}=await createApi.post("/user/register",userInput);
            console.log("run3");
            if(data.success){
                dispatch(setAuth(true));
            }
            else{
                setMessage(data.message);
            }
            
            dispatch(setStatus(STATUS.IDLE));
            dispatch(setMessage("Sign Up Succesfull."));

        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
            dispatch(setMessage(error.response.data.message));
        }
}
    
};



