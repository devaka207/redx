import React,{reducer} from "react";
import {View,Text,Button} from "React-native";

const initialState = {
    counter:0
};
const appreducer =(state= initialState , action) => {
    switch(action.type){
        case 'increment':
        return{
            ...state,
            counter:action.payload
    };

    case 'decrement':
        return{
            ...state,
            counter:action.payload
    };
    default:
        return state;
}
}
export default appreducer;