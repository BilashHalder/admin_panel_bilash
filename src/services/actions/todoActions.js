import {GET_REQ,SUCC_REQ,FAIL_REQ} from '../constants/todoConstants'
import axios from 'axios'
export const getData=()=>async(dispatch)=>{
dispatch({type:GET_REQ});
try{
const res=await axios.get("https://jsonplaceholder.typicode.com/todos");
dispatch({type:SUCC_REQ,payload:res.data});
}
catch(error){
    dispatch({type:FAIL_REQ,payload:error.message});    
}

}