import { LightningElement } from 'lwc';

export default class Setter extends LightningElement {
    name='dog'
    age=2
    newAge=0;

    updateAge(event){
//      assigning user input to a js property
        console.log("1")
        this.newAge = event.target.value;
    }
    updateOriginalAge(){
        // When click on button, then original age will be updated
        // we are udating getter function which is age1
        // this.age = this.newAge;
        // the reason is we age able to change/modifiy the original value using getter and setter
        console.log("2")
        this.age1 = this.newAge;
    }


    get age1(){
        // getter is used to read the data without changing the original value
        // type of age is string because the value is coming from input. By default, the input results are string
        // Brother 2 years older
        console.log("3")
        return parseInt(this.age) + 2
    }
    set age1(value){
        // setter is used to update the values
        // or assign a new value
        // we can add some validation in setter
        console.log("4")
        if(value<0){
            // generate alert with message
            alert('Please enter a valid age. Age cannot be less than 0');
            // print log in the console
            console.log('Invalid age in setter age1');
        }else{
        this.age=value
        }
    }

}