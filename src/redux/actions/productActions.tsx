import {ActionTypes} from '../contants/action-types';

export default function addCourse (products:any[]){
    
    return{
        type:ActionTypes.addCourse,
        payload:products,
    };
};