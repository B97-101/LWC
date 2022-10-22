import { api, LightningElement } from 'lwc';

export default class SetterChild1 extends LightningElement {

    calculatedAge=10;

    @api
    get customerAge(){
        return this.calculatedAge*2;
    }

    set customerAge(value){
        // calculationg age times 2
        // We can use this setter to hold and use the value that comes from parent
        this.calculatedAge = value*2;

    }
}
/*When setter is used in LWC?
We can use is when we have parent child relationship 
Setter is especially useful to update this values THAT IS COMING FROM PARENT
In this example, the value that comes from parent is 15 
And we are using setter to HOLD the 15 in the setter parameter
In this case value = 15
------
1. in setter we UPDATE the calculatedAge.we mulliplied the 15 by 2 and updated the calculatedAge property. calucatedAge=30
2. then the getter is used to READ the calucalatedAge property. we double that calculatedAge and returning it in getter



*/