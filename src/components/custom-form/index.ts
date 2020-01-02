import './../custom-input';
import {LitElement, html, property} from 'lit-element';
import {store} from './../../store/store';
import {ACTION_CUSTOM_INPUT_NOT_FOCUSSED,ACTION_CUSTOM_INPUT_VALUE_CHANGED,ACTION_CUSTOM_INPUT_IS_FOCUSSED} from '../custom-input/actions';
import {reducer as inputReducer} from '../custom-input/reducer';

export class CustomForm extends (LitElement) {

  @property({type : String})  
  propPath = 'app';
  formName;

  render(){
      let path = this.propPath.split('.');
      this.formName = path[path.length-1];

    return html`
    ${this.formName} :<br>
    <custom-input
      label="First Name"
      propPath="${this.propPath}.firstName"
      useStore=true
      .store="${store}"
      .reducer="${inputReducer}"
      .onkeyup="${this.CustomInputValueChanged}"
      .onfocusin="${this.CustomInputIsFocussed}"
      .onfocusout="${this.CustomInputIsNotFocussed}"
      >
    </custom-input>

    <custom-input
      label="Last Name"
      propPath="${this.propPath}.lastName"
      useStore=true
      .store="${store}"
      .reducer="${inputReducer}"
      .onkeyup="${this.CustomInputValueChanged}"
      .onfocusin="${this.CustomInputIsFocussed}"
      .onfocusout="${this.CustomInputIsNotFocussed}"
      >
    </custom-input>
    
    `;
  }

  CustomInputIsFocussed(){
    store.dispatch(ACTION_CUSTOM_INPUT_IS_FOCUSSED(this.propPath));
  }
  CustomInputIsNotFocussed(){
    store.dispatch(ACTION_CUSTOM_INPUT_NOT_FOCUSSED(this.propPath));
  }
  CustomInputValueChanged(e){
    store.dispatch(ACTION_CUSTOM_INPUT_VALUE_CHANGED(this.propPath,e.target.value));
  }
}
customElements.define('custom-form', CustomForm);
