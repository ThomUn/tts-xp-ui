import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service';
import {TextToSpeech} from '@ionic-native/text-to-speech'
import {SpeechRecognition} from '@ionic-native/speech-recognition'

@Component({
  providers: [PeopleService],
  selector: 'page-manual',
  templateUrl: 'manual.html'
})
export class ManualPage {

  public people: any;

  public ttsText: string;
  public speechtext: Array<string>;

  public serverResponseText: string = "LED 2 - Wohnzimmer - Farbe Hellblau - OK";

  ttsOptions: any;

  constructor(private tts: TextToSpeech) {
  [...]
  }


  async speakText(): Promise<any> {
    try {
      this.ttsOptions = {
        text: this.ttsText,
        locale: 'de-DE'
      };
      await this.tts.speak(this.ttsOptions);
    } catch (e) {
      console.log('error');
    }
  }

  // listenForSpeech(): void {
  //   this.speech.startListening()
  //     .subscribe(data => this.speechtext = data,
  //       error => console.log('error: ' + error))
  // }

}
