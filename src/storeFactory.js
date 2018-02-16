import {getCombinedReducers} from './reducers';
import { createStore } from 'redux';

let store;

const buildStore=()=> createStore(getCombinedReducers, {text: 'Initial value from createStore'});
 export const getStore=()=>{
     if(!store){
         store=buildStore();
     }
     return store;
 };