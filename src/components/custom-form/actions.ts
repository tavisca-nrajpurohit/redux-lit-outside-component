export const CUSTOM_INPUT_IS_FOCUSSED = "CUSTOM_INPUT_IS_FOCUSSED";
export const CUSTOM_INPUT_NOT_FOCUSSED = "CUSTOM_INPUT_NOT_FOCUSSED";
export const CUSTOM_INPUT_VALUE_CHANGED = "CUSTOM_INPUT_VALUE_CHANGED";
export const IS_SUBMITTED = "IS_SUBMITTED";


function getElementByPropPath(propPath: string){
    let temp = propPath.split('.');
    let el = temp[temp.length -1];
    console.log("ELEMENT",el);
    return el;
}

export function ACTION_CUSTOM_INPUT_IS_FOCUSSED(propPath:string){
    return {
        type: CUSTOM_INPUT_IS_FOCUSSED,
        element : getElementByPropPath(propPath)
    }
}
export function ACTION_CUSTOM_INPUT_NOT_FOCUSSED(propPath:string){
    return {
        type: CUSTOM_INPUT_NOT_FOCUSSED,
        element:getElementByPropPath(propPath)
    }
}
export function ACTION_CUSTOM_INPUT_VALUE_CHANGED(propPath:string, newValue:string){
    return {
        type: CUSTOM_INPUT_VALUE_CHANGED,
        element:getElementByPropPath(propPath),
        value: newValue
    }
}

export function ACTION_IS_SUBMITTED(){
    return {
        type: IS_SUBMITTED
    }
}