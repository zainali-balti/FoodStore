import { Injectable } from '@angular/core';
import { Cart } from '../../shared/Food/Cart';
import { Food } from '../../shared/Food/model';
import { FooItems } from '../../shared/Food/FoodItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();

addToCart(food:Food):void{

  let checkCart = this.cart.items.find(item=> item.food.id === food.id);
  if(checkCart){
    this.changeQuantity(food.id, checkCart.quantity+1);
    return;
  }
  this.cart.items.push(new FooItems(food)); 
}

removeFromCart(foodId:number):void{
  this.cart.items = 
  this.cart.items.filter(items=> items.food.id  !== foodId);
}
changeQuantity(foodId:number , quantity:number){
  let cartItems = this.cart.items.find(item=> item.food.id == foodId);
  if(!cartItems) return;
   cartItems.quantity = quantity; 
}
getCart():Cart{
  return this.cart;
}
}
