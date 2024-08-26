import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  public searchTerm = "";
  constructor(private route:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerms']){

        this.searchTerm = params['searchTerms'];
      }
    })
  }
  search(): void{
    if(this.searchTerm){
      this.router.navigateByUrl('/search/' + this.searchTerm);
    }
  }
}
