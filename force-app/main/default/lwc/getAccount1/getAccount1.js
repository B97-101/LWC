import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class GetAccount1 extends LightningElement {
 // create an property to track the user input value
 filterWord='';
 accounts;
 error;
 // handleChange
 handleChange(event){
    this.filterWord = event.target.value;
 }

//  handleSearch. This will run when we click on the button
handleSearch(){
// Call Apex method which is getAccounts
getAccounts({filter: this.filterWord})
.then((result) => {
    this.accounts = result;
    this.error = undefined;
})
.catch((error) => {
    this.error = error;
    this.accounts = undefined;
});}}