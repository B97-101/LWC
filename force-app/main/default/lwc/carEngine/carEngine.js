import { api, LightningElement } from 'lwc';

export default class CarEngine extends LightningElement {

    @api
    engineModel='V8!';

    @api modelYear;

}