import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PostService {
 

  constructor(private http:Http)
  { }

  
  
  public api:string="http://searchqa.worldbank.org/api/procnotices?format=xml&id=OP00036397&apilang=es&fl=*";
  
  getData():Observable<any> {
    return this.http.get(this.api)
        .map((res:Response)=>res.json())
        .catch(this.handleError);
  }
 
 private handleError(error:any) {
  let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); 
  return Observable.throw(errMsg);
}

}
