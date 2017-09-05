import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service';
import {TextToSpeech} from '@ionic-native/text-to-speech'
import {SpeechRecognition} from '@ionic-native/speech-recognition';

@Component({
  providers: [PeopleService],
  selector: 'page-speech',
  templateUrl: 'speech.html'
})
export class SpeechPage {

  public people: any;

  public ttsText: string;

  public speechtext: Array<string>;
  public serverResponseText: string = "LED 2 - Küche - Farbe Weiß - OK";
  public serverRequestText: string = "Setze LED 2 in der Küche auf die Farbe Weiß";


  ttsOptions: any;

  constructor(public navCtrl: NavController, public peopleService: PeopleService, private tts: TextToSpeech, private speech: SpeechRecognition) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load()
      .then(data => {
        this.people = data;
      });
  }

  async speakText(): Promise<any> {
    try {
      this.ttsOptions = {
        text: this.ttsText,
        locale: 'de-DE'
      };
      await this.tts.speak(this.ttsOptions);
      console.log('Successfully spoke: ' + this.ttsText);
    } catch (e) {
      console.log('error');
    }
  }

  listenForSpeech(): void {
    this.speech.startListening()
      .subscribe(data => this.speechtext = data,
        error => console.log('error: ' + error))
  }

  // async isSpeechSupported(): Promise<boolean> {
  //   const isAvailable = await this.speech.isRecognitionAvailable();
  //   this.isSupported = isAvailable;
  //   console.log('isAvailable: ' + isAvailable);
  //   return isAvailable;
  // }
  //
  // async getPermission(): Promise<void> {
  //   try {
  //     const permission = await this.speech.requestPermission();
  //     console.log('permission: ' + permission)
  //     return permission;
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  //
  // async hasPermission(): Promise<boolean> {
  //   try {
  //     const hasPermission = await this.speech.hasPermission();
  //     this.hasPermissionText = hasPermission;
  //     console.log('hasPermission: ' + hasPermission);
  //     return hasPermission;
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  //
  // async getSupportedLanguages(): Promise<Array<string>> {
  //   try {
  //     const getSupportedLanguages = await this.speech.getSupportedLanguages();
  //     this.getSupportedLanguagesArray = getSupportedLanguages;
  //     console.log('hasPermission: ' + getSupportedLanguages);
  //     return getSupportedLanguages;
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

}
