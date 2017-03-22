import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service';

@Component({
  providers: [PeopleService],
  selector: 'page-speech',
  templateUrl: 'speech.html'
})
export class SpeechPage {

  public people: any;

  constructor(public navCtrl: NavController, public peopleService: PeopleService) {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }

}
