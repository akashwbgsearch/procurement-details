import { Component,ElementRef,Input } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shashank';
  @Input() api:string ;

  constructor(private http:Http,eRef:ElementRef)
  {
    this.api=eRef.nativeElement.getAttribute('Urlvalue');
    //console.log("the value is::"+this.Urlvalue);
    
  }
  //public api:string=this.Urlvalue;

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
