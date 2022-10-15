import {api, LightningElement } from 'lwc';

export default class CarEngineFeatures extends LightningElement {

    // creating a property
    // @api is used to make properties PUBLIC and REACTIVE
    // if we use one property in a different component
    //  then use @api to make the property public
    @api
    horsePower ='990 hp';

    @api
    fuelType = 'Electric!';


    @api
    maxSpeed='120 mph';





}