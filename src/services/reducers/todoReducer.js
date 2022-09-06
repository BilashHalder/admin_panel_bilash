import {GET_REQ,SUCC_REQ,FAIL_REQ} from '../constants/todoConstants'
const initialState={
    todo:[],
    isLoading:false,
    isFail:false,
    errMsg:null
}

export const todoReducer=(state=initialState,action)=>{
switch (action.type) {
    case GET_REQ:
        return{
            ...state,
            isLoading:true,
        }
        case SUCC_REQ:
        return{
            ...state,
            isLoading:false,
            todo:action.payload
        }
        case FAIL_REQ:
            return{
                ...state,
                isLoading:false,
                isFail:true,
                errMsg:action.payload

            }
    
    default:
        return{
            ...state
        }
}
}

