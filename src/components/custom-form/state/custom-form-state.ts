
export interface customFormState{
    isSubmitted:boolean,
    firstName:{
        value:string,
        isTouched:boolean,
        hasFocus:boolean
    },
    lastName:{
        value:string,
        isTouched:boolean,
        hasFocus:boolean
    }
}