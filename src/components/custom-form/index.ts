import './../custom-input';
import {LitElement, html, property} from 'lit-element';
import {store} from './../../store/store';
import {ACTION_CUSTOM_INPUT_NOT_FOCUSSED,ACTION_CUSTOM_INPUT_VALUE_CHANGED,ACTION_CUSTOM_INPUT_IS_FOCUSSED} from './actions';
import {reducer} from './reducer';
import {connect} from 'pwa-helpers';

export class CustomForm extends connect(store)(LitElement) {

  @property({type : String})  
  propPath = 'app';
  formName;

  render(){

    store.attachReducers({ [this.propPath]:reducer(this.propPath)});

    let path = this.propPath.split('.');
    this.formName = path[path.length-1];

    return html`
    ${this.formName} :<br>
    <custom-input
      label="First Name"
      propPath="${this.propPath}.firstName"
      .onkeyup="${this.CustomInputValueChanged}"
      .onfocusin="${this.CustomInputIsFocussed}"
      .onfocusout="${this.CustomInputIsNotFocussed}"
      >
    </custom-input>

    <custom-input
      label="Last Name"
      propPath="${this.propPath}.lastName"
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
