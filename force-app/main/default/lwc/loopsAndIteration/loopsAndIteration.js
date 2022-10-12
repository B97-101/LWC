import { LightningElement } from 'lwc';

export default class LoopsAndIteration extends LightningElement {
    cityList =['Dallas','New York', 'Houston'];

    customerList = [
        {
         id:1,
         name: "Jim Carrey",
         phone: "+999 888 77 66",
         email: "jim@carrey.com",
         imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU"
        },
        {
          id:2,
          name: "Jack Bauer",
          phone: "+888 777 66 55",
          email: "jack@bauer.com",
          imgURL:
          "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        },
        {
          id:3,
          name: "Chuck Norris",
          phone: "+777 666 55 44",
          email: "chuck@norris.com",
          imgURL:
          "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        },
        // Adding another customer
        {
            id: 4,
            name: "Jason Fox",
            phone: "+1501 111 11 11",
            email: "jfox@gmail.com",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNE9FlTX-CYgJbi6oKv6VcNog5pl_fWrT_A&usqp=CAU"
        }
      ];    
      
      
}