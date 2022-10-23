import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    eventName1;
    eventName2;

    handleButtonClick1(){
        this.eventName1 = 'Fire Child 1 button is clicked'
    }

    handleButtonClick2(event){
//     eventName2 will be equal to the child inputValue2
//     event.detail is used to receive child input value
        this.eventName2 = event.detail;

    }



}