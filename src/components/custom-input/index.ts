import {LitElement, html, property} from 'lit-element';

export class CustomInput extends LitElement {

  @property({type : String})  
  label = 'Default Label';
  @property({type : String})  
  propPath = 'app';
  @property({type : String})  
  value = '';

  @property({type: Function})
  onkeyup;
  @property({type: Function})
  onfocusin;
  @property({type: Function})
  onfocusout;
  
  render(){
  
    return html`
    <link rel="stylesheet" href="./custom-input.css">
    <div class="customInput">
    <label>${this.label}</label>
    <input
        type="text" 
        placeholder="${this.label}"
        required 
        name="${this.propPath}"
        @focusin = "${this.onfocusin}"
        @focusout = "${this.onfocusout}"
        @keyup = "${this.onkeyup}"
     >
      </div>
    `;
  }
}
customElements.define('custom-input', CustomInput);