import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public ttl: number = 0;

  constructor(public navCtrl: NavController) {

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var today = new Date();
    var secondDate = new Date(2017,5,17);

    this.ttl = Math.round(Math.abs((today.getTime() - secondDate.getTime())/(oneDay)));
  }

}
