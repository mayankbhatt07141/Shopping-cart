// import { defaultMaxListeners } from 'events';
import {ActionTypes} from '../contants/action-types';

const iniitalstate={
    products:[{
        id:1,
        title:"mayank",
        category:"programmer",
    },],
};
const productReducer=(state=iniitalstate, addCourse:string)=>{
    switch(addCourse){
        case ActionTypes.addCourse:
            return state;
        default:
            return state;
    }
}
export default productReducer;