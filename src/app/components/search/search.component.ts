import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr:string;
  dataArr;
  constructor(public searchService:SearchService) { 

    this.dataArr = [];

  }

  ngOnInit() {
  }

 

  searchMovie(){
    this.searchService.searchMovie(this.searchStr)
    .subscribe( res => {
      var data = res.json();
      this.dataArr = data.Search;
      console.log(this.dataArr);
      
    })
    
   
  }
}
