import React ,{useEffect}from 'react'
import {useSelector,useDispatch} from 'react-redux';
import{getData}from '../services/actions/todoActions'
export default function AllTodo() {

    const {isLoading,todo,isFail,errMsg}=useSelector((store)=>{return store});
    const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getData());
    console.log(isLoading)
  }, [])
  

  return (
    <div>{isLoading?<p>is Load</p>:<></>}
    {errMsg?<p>{errMsg}</p>:<></>}
    {todo?<>{todo.map((item,index)=>{return <p key={index}>{item.title}</p>})}</>:<>No Todo</>}
    </div>
    

  )
}
