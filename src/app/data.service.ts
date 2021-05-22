import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Department } from './department';

export class DataService {
  
  constructor(private url: string, public http: Http) { }

  public get() {
    return this.http.get(this.url)
      .pipe(
        map(
          response => response.json()
        )
      )
  }

}



