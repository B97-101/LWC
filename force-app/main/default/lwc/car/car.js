import { LightningElement } from 'lwc';

export default class Car extends LightningElement {

    // property that holds input value
    engineType;
    handleEngineChange(event){
    // user entred value will be assgined to engineType prepery
    // event.target.value -> THE USER INPUT
        this.engineType = event.target.value
    }
}