import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RGBtoHEXProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RGBtoHEXProvider {

  private red: string;
  private green: string;
  private blue: string;

  constructor(public http: Http) {
    console.log('Hello RGBtoHEXProvider Provider');
  }

  setRGBData(red: string, green: string, blue: string) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  getHEX() {
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('http://localhost:3000/toHEX/'+this.red+'/'+this.green+'/'+this.blue)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
