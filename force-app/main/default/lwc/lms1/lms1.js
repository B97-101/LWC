import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/MessageChannel__c';
import {MessageContext, publish} from 'lightning/messageService';


export default class Lms1 extends LightningElement {

    inputValue;
    @wire(MessageContext) context;

    handleChange(event){

        this.inputValue = event.target.value

    }

    publishMessage(){
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
        publish(this.context, SAMPLEMC, message)
        //this.context is the context of the current lightning web component with LMS
        //SAMPLEMC is the reference of the Message Channel
        //message is the data to publish
    }


}