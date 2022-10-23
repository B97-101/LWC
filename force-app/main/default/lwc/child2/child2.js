import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {

    inputValue2;

    handleChange2(event){
        //!!!!!When we use child to parent communication
        //!!!!!event.detail.value
        this.inputValue2 = event.detail.value
        // same component     - > event.target.value
        // pass data to parent -> event.detail.value
    }

    handleClick2(){
        // I want to send the CHILD DATA(inputValue2) to PARENT 
        // after buttion click using custom event
        // {detail : this.inputValue2} means sending inputValue2 to parent using detail object

        // 1. create custom event : clicked2
        // 2. sends inputValue2 using detail object 
        const myEvent = new CustomEvent('clicked2',{detail : this.inputValue2})
        // 3. dispatching the event
        this.dispatchEvent(myEvent)

        // OR
        // this.dispatchEvent(new CustomEvent('clicked2',{detail : this.inputValue2}))
    }
}