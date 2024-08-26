import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
    {path : '', component:HomeComponent},
    {path : 'search/:searchTerms', component:  HomeComponent},
    {path : 'tags/:tag', component: HomeComponent},
    {path : 'food/:id', component: FoodPageComponent},
    {path : 'cart-page', component: CartPageComponent}
];
