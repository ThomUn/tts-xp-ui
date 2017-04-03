import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {SpeechPage} from '../pages/speech/speech';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {SpeechRecognition} from '@ionic-native/speech-recognition'
import {TextToSpeech} from '@ionic-native/text-to-speech'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SpeechPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SpeechPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech,
    SpeechRecognition
  ]
})
export class AppModule {
}
