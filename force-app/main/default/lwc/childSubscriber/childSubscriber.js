import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
import { registerListener } from 'c/pubsub';

export default class ChildSubscriber extends LightningElement {

    newMessage;

    @wire(CurrentPageReference) pageRef;

    // lifecycle hooks
    // called automatically during the data is added on this page
    connectedCallback(){
    // (eventName, callback, thisArg) 
    registerListener("parentPublisher",this.showDetails, this);
    }


    // holding the data that comes from publisher : data parameter holds the data 
    // that comes from other publised component
    // and assign it to a property : newMessage
    showDetails(data){
        this.newMessage=data;
    }

}