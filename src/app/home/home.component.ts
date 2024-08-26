import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/Food/model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NotFoundPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public foodImages:Food[] = [];

  constructor(private foodservice:FoodService, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerms']) {
        this.foodImages = this.foodservice.getAll().filter(foodImages => 
          foodImages.name.toLowerCase().includes(params['searchTerms'].toLowerCase())
        );
      }
      else if(params['tags']){
        this.foodImages = this.foodservice.getAllFoodByTags(params['tags'])
      } 
      else {
        this.foodImages = this.foodservice.getAll();
      }
    });
  }

}
