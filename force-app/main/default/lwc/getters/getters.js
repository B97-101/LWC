import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    num1=10;
    num2=20;


    friendList = ['Ahmet', 'John', 'Sam', 'Tim'];

    // creating getters to read the sum of the numbers
    get sumOfNumbers(){
        return this.num1+this.num2;
    }

    // creating getter to read the only the first person
    get myBestFriend(){
        return this.friendList[0].toUpperCase();
    }

// creating 2 properties to hold 2 user inputs
    num3;
    num4;
    // to handle the first input field
    // the responsibity is assing user input to the num3 property
    handleNum1(event){
        this.num3 = event.target.value;
    }
// to handle the second field
// the responsibilty is assign sedond user input to the num4 property
    handleNum2(event){
        this.num4 = event.target.value;
    }
// using getter to calculate the sum of the 2 numbers
    get sumOfNums(){
//      This will concat, because html inputs returns string
//      return this.num3 + this.num4;
        return parseInt(this.num3) + parseInt(this.num4);
    }

    // getting the difference
    get differenceOfNums(){
        return parseInt(this.num3) - parseInt(this.num4);
    }

    // getting the product-multiplication
       get productOfNums(){
        return parseInt(this.num3) * parseInt(this.num4);
    }


    // getting the division
    get divisionOfNums(){
        return parseInt(this.num3) / parseInt(this.num4);
    }


}