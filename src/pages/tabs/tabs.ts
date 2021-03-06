import {Component} from "@angular/core";
import {HomePage} from "../led/home";
import {ManualPage} from "../manual/manual";
import {AboutPage} from "../about/about";
import {SpeechPage} from "../speech/speech";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ManualPage;
  tab3Root: any = SpeechPage;
  tab4Root: any = AboutPage;

  constructor() {

  }
}
