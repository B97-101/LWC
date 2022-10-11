import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag=false;
    flag1=false;


    display=false
    handleChange(event){
// event.target.checked returns TRUE if checkbox is checked
// event.target.checked returns FALSE if checkbox is NOT checked
        this.display=event.target.checked

    }

}