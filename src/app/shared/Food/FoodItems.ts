import { Food } from "./model";

export class FooItems{
    constructor(food:Food){
        this.food = food;
    }
    food! : Food
    quantity: number = 1;

    get price():number{
        return this.food.price * this.quantity;
    }
}