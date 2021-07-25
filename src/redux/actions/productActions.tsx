import {ActionTypes} from '../contants/action-types';
export const addCourse=(products:string)=>{
    return{
        type:ActionTypes.addCourse,
        payload:products,
    };
};

export const removeCourse=(products:string)=>{
    return{
        type:ActionTypes.removeCourse,
        payload:products,
    };
};