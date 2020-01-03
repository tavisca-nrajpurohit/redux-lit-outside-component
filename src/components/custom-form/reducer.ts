import { customFormState } from './custom-form-state';
import {CUSTOM_INPUT_IS_FOCUSSED,CUSTOM_INPUT_NOT_FOCUSSED,CUSTOM_INPUT_VALUE_CHANGED,IS_SUBMITTED} from './actions';
import {set} from '@rakoon-badshah/dynamic-redux'

const initialState: customFormState = {
    isSubmitted:false,
    firstName:{
        value:"",
        isTouched:false,
        hasFocus:false
    },
    lastName:{
        value:"",
        isTouched:false,
        hasFocus:false
    }
};



function customInputNotFocussed(state:customFormState,action):customFormState{
    let newState =  set(state,action.element+'.hasFocus',false);
    return newState;
}

function customInputisFocussed(state:customFormState,action):customFormState{
    let newState =  set(state,action.element+'.isTouched',true);
    newState =  set(newState,action.element+'.hasFocus',true);
    return newState;
}

function customInputValueChanged(state:customFormState,action):customFormState{
    let newState =  set(state,action.element+'.value',action.value);
    return newState;
}

function formIsSubmitted(state,action){
    let newState = set(state,'isSubmitted',true);
    return newState; 
}


export const reducer = (propPath) => (state = initialState, action)=>{
    switch(action.type){
        case CUSTOM_INPUT_IS_FOCUSSED:
            return customInputisFocussed(state,action);
        case CUSTOM_INPUT_NOT_FOCUSSED:
            return customInputNotFocussed(state,action);
        case CUSTOM_INPUT_VALUE_CHANGED:
            return customInputValueChanged(state,action);
        case IS_SUBMITTED:
            return formIsSubmitted(state,action);
        default:
            return state;
    };
}