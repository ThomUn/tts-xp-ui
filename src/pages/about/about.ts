import {Component} from "@angular/core";
import {SpeechRecognition} from '@ionic-native/speech-recognition'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public ttl: number = 0;

  public isSupported: boolean = true;
  public hasPermissionBoolean: boolean = true;
  public getSupportedLanguagesArray: Array<string>;

  constructor(private speech: SpeechRecognition) {

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var today = new Date();
    var secondDate = new Date(2017,4,17);

    this.ttl = Math.round(Math.abs((today.getTime() - secondDate.getTime())/(oneDay)));
  }

  async isSpeechSupported(): Promise<boolean> {
    const isAvailable = await this.speech.isRecognitionAvailable();
    if(isAvailable){
      document.getElementById('supportedCheck').style.visibility = 'visible';
    }
    console.log('isAvailable: ' + isAvailable);
    return isAvailable;
  }

  async getPermission(): Promise<void> {
    try {
      const permission = await this.speech.requestPermission();
      console.log('permission: ' + permission)
      return permission;
    } catch (e) {
      console.log(e)
    }
  }

  async hasPermission(): Promise<boolean> {
    try {
      const hasPermission = await this.speech.hasPermission();
      if(hasPermission){
        document.getElementById('permissionCheck').style.visibility = 'visible';
      }
      console.log('hasPermission: ' + hasPermission);
      return hasPermission;
    } catch (e) {
      console.log(e)
    }
  }

  async getSupportedLanguages(): Promise<Array<string>> {
    try {
      const getSupportedLanguages = await this.speech.getSupportedLanguages();
      this.getSupportedLanguagesArray = getSupportedLanguages;
      console.log('hasPermission: ' + getSupportedLanguages);
      return getSupportedLanguages;
    } catch (e) {
      console.log(e)
    }
  }

}
