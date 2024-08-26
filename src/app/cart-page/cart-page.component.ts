import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/Food/Cart';
import { CartService } from '../services/cart/cart.service';
import { FooItems } from '../shared/Food/FoodItems';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NotFoundPageComponent } from "../not-found-page/not-found-page.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NotFoundPageComponent
],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  cart! : Cart;
  constructor(private cartService:CartService , private foodService: FoodService){
    this.setCart()
    let food = foodService.getAll();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItems:FooItems){
    this.cartService.removeFromCart(cartItems.food.id);
    this.setCart();
  }
  changeQuatity(cartItems:FooItems, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItems.food.id,quantity);
    this.setCart();
  }
  ngOnInit(): void {
    this.setCart();
  }
}
