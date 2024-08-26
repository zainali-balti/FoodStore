import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/Food/model';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundPageComponent } from "../not-found-page/not-found-page.component";


@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [
    CommonModule,
    NotFoundPageComponent
],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{

  food! :Food;
  constructor(private route: ActivatedRoute,
     private foodService:FoodService , 
    private cartService:CartService,
     private router:Router){
    route.params.subscribe((params)=>{
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
    
  }
  

}
