import { FooItems } from "./FoodItems";

export class Cart{
   items:FooItems[] = [];

   get total():number{
    let totalPrice = 0;
    this.items.forEach(item=>{
        totalPrice += item.price;
    })
    return totalPrice;
   }
}