import { Injectable } from '@angular/core';
import { HttpModule,Http,Headers } from '@angular/http';


@Injectable()
export class SearchService {
  searchUrl:string;
  constructor(public http:Http) {
    this.searchUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=90146850&s=";
   }

 
  
  searchMovie(str:string){
    console.log(str);  
    var url = this.searchUrl+str;
   return this.http.get(url);

  }
}
