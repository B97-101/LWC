import { api, LightningElement } from 'lwc';

export default class CarEngineFeatures extends LightningElement {

    // @api is used to make properties PUPLIC
    // if we use one property in a different component
    // then use @api to make is puplic
   @api
    horsePower='990 hp';
}