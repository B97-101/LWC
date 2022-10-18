import { LightningElement, track } from 'lwc';

export default class DecoratorParent extends LightningElement {

    // primitives do not require @track for being reactive
    myName;

    // creating a person object
    //@track makes objects or arrays REACTIVE
    @track
    person = {
        fName:'John',
        age:20
    }


    // creating familyMembers array with 2 default members
    // adding @track to make this array REACTIVE
    @track
    familyMembers=[
        {
            fName:'Sam',
            id:0
        },
        {
            fName:'Nancy',
            id:1
        }
    ]
    handleChange(event){
        this.myName = event.target.value;
    }
    handleNameChange(event){
        // assigning user input to person's fName
        this.person.fName=event.target.value
    }
    handleAgeChange(event){
        this.person.age=event.target.value
    }

    newId=2
    handleFamilyMember(event){
        //1. get the first name input value 
        // and assing it to a property
        const newName = event.target.value
        //2. create a new person that has fName and id
        const newFamilyMember = {
            fName:newName,
            id:this.newId
        }
        // 3. add the newFamilyMember in the familyMembersArray
        this.familyMembers.push(newFamilyMember);
        // 4. increment the id for each new family member 
        this.newId++;
    }
}