import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
import { fireEvent } from 'c/pubsub';


export default class ParentPublisher extends LightningElement {

    // using wire service to get salesforce data
    // and holding the data in pageRef
    @wire(CurrentPageReference) pageRef;

    handleChange(event){
        // (pageRef, eventName, payload). payload = data
        fireEvent(this.pageRef,"parentPublisher",event.target.value)
    }
}