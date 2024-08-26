import { Component, OnInit } from '@angular/core';
import { Tags } from '../shared/Food/Tags';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  tags:Tags[] = [];
  constructor(private foodService:FoodService){
  }
  ngOnInit(): void {
    this.tags = this.foodService.getALLTags();
    }
}
