import axios from "axios";

const createApi=axios.create({
    baseURL:"https://homeestate.herokuapp.com/api/v1",
    withCredentials:true,
    headers:{
        "Content-type":"application/json",
        Accept:"application/json",
    },
});

export default createApi;