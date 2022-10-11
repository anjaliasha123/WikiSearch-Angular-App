import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemList = []
  constructor(private wiki: WikipediaService){

  }

  onTerm(data: string){
    this.wiki.search(data)
    .subscribe(
      (response: any)=>{
        console.log(response);
        this.itemList = response.query.search;
      }
    );
  }
}
