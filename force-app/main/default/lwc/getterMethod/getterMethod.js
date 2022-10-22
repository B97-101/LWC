import { LightningElement } from 'lwc';

export default class GetterMethod extends LightningElement {

    enteredNumber;

    nameList = ['john','sam','tim','nancy','josue','katy']

    handleNameIndex(event){
        this.enteredNumber = event.target.value;
    }

    get nameAtThatIndex(){
        if(this.enteredNumber<0||this.enteredNumber>=this.nameList.length){
            alert('Enter a Valid Number')
        }else{
        return this.nameList[this.enteredNumber];
        }
    }
}