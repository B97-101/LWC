import { LightningElement } from 'lwc';

export default class HomeworkSecretPassword extends LightningElement {
    secretPassword;
    handelPassChange(event){
        this.secretPassword=event.target.value
    }
    get unlockText(){
        if(this.secretPassword=="password1"){
            return 'Congratulations! Password Correct!';
        }
        return null;
    }
    
}