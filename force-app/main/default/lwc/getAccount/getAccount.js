import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class GetAccount extends LightningElement {
    // create an property to track the user input value
    filterWord;
    // wiring getAccounts method in this js file, and holding all apex data in accounts variable
    @wire(getAccounts,{filter : '$filterWord'}) accounts;//salesforce data is in accounts objects
    // handleChange

    handleChange(event){
       this.filterWord = event.target.value;
    }

}