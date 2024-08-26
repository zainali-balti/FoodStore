import { Injectable } from '@angular/core';
import { Food } from '../../shared/Food/model';
import { Tags } from '../../shared/Food/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=> food.id == id)!;
  }

  getALLTags(): Tags[]{

    return [
      {name: "pizza" , count : 4},
      {name: "burgur" , count : 1},
      {name: "beaf" , count : 1},
      {name: "pasta" , count : 1},
      {name: "karhai" , count : 1},
      {name: "chargha" , count : 1},
      {name: "FastFood" , count : 1},
      {name: "zinger" , count : 1},
    ];
  }
  getAllFoodByTags(tag: string): Food[] {
    return tag === "All" 
      ? this.getAll() 
      : this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAll():Food[]{
   return  [ 
    {
      id : 1,
      name: "FastFood",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/eight.avif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 2,
      name: "zinger",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new2.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 3,
      name: "pasta",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new1.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 4,
      name: "burgur",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 5,
      name: "karhai",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/seven.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 6,
      name: "mutton",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/first.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 7,
      name: "beaf",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/six.jpg',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 8,
      name: "chargha",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/third.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 9,
      name: "pizza",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/second.jpeg',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 10,
      name: "pizza",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new3.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 11,
      name: "pizza",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new5.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 12,
      name: "pizza",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new4.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    },
    {
      id : 13,
      name: "pizza",
      price: 2000,
      tags : ['ssa','sass'],
      fav : true,
      imageUrl:'images/new.jfif',
      stars : 5,
      origen: ['pakitan','itly'],
      cookTime : '10-20'
    }
   ];
    
  }
}
