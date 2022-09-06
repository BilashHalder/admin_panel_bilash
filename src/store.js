import {todoReducer} from '../src/services/reducers/todoReducer'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const todostore=createStore(todoReducer,applyMiddleware(thunk));
export default  todostore;