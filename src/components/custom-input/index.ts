import {LitElement, html, property} from 'lit-element';

export class CustomInput extends LitElement {

  @property({type : String})  
  label = 'Default Label';
  @property({type : String})  
  propPath = 'app';
  @property({type : String})  
  value = '';

  // STORE SPECIFIC PROPERTIES...
  @property({type : Boolean})  
  useStore = false;
  @property({type: Function})
  reducer;
  @property({type: Object})
  store;

  @property({type: Function})
  onkeyup;
  @property({type: Function})
  onfocusin;
  @property({type: Function})
  onfocusout;
  
  render(){
    if(this.store && this.useStore){
      this.store.attachReducers({ [this.propPath]:this.reducer(this.propPath)});
    }
  
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