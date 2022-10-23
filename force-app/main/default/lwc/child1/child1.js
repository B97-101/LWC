import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {

    handleClick1(){
        // Trying to Effect the parent component after the child button click
        // There is child to parent communication going on
        //  This is where we use CustomEvent API

        // // Creating a custom event. name of this particular custom event is clicked.
        //  const myEvent = new CustomEvent('clicked');
        // //  Dispatch Event so the parent can use this custom event.
        // this.dispatchEvent(myEvent)

        // OR
        this.dispatchEvent(new CustomEvent('clicked'));

    }
}