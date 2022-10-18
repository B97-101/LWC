import { LightningElement } from 'lwc';

export default class SlotParent extends LightningElement {

    country;
    city;
    famous;

    handleCountryChange(event){
        this.country=event.target.value;
    }
    handleCityChange(event){
        this.city=event.target.value;
    }
    handleFamousChange(event){
        this.famous=event.target.value;
    }
}