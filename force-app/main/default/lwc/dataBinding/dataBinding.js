import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    myName = 'John';
    age =20;
    dynamicBinding='TesT';

    // 2. create property
    country;

    clickedButtonLabel;

    handleInput(event){
        // event HOLDS the data that comes from input element
        // event.target.value equals the user input value
        // this is used to access the js properties
        // WE ASSIGN THE USER INPUT VALUE TO dynamicBinding
        this.dynamicBinding = event.target.value;
    }


    // 4. assign user input to country property
    handleInputChange(event){
        this.country=event.target.value;
    }

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

}