import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpclient: HttpClient) { }

  search(term : string){

    return this.httpclient
    .get('https://en.wikipedia.org/w/api.php',
    {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }
    );

  }
}
