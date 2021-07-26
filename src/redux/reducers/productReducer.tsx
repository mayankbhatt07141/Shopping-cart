import {ActionTypes} from '../contants/action-types';

const productReducer=(state=[], Action:{type:string,payload:any[]})=>{
    if(Action.type===ActionTypes.addCourse){
        return [...Action.payload];
    }
    else    
        return state;
    }
export default productReducer;