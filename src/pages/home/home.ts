import {Component} from "@angular/core";
import {FormBuilder, AbstractControl, FormGroup} from "@angular/forms";
import {NavController} from "ionic-angular";
import {RGBtoHEXProvider} from '../../providers/rgb-to-hex-provider'

@Component({
  providers: [RGBtoHEXProvider],
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public colorSet: any;

  public colorForm: FormGroup;
  public inputRed: AbstractControl;
  public inputGreen: AbstractControl;
  public inputBlue: AbstractControl;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public rgbtohex: RGBtoHEXProvider) {
    this.colorForm = formBuilder.group({inputRed: [''], inputGreen: [''], inputBlue: ['']});
    this.inputRed = this.colorForm.controls['inputRed'];
    this.inputGreen = this.colorForm.controls['inputGreen'];
    this.inputBlue = this.colorForm.controls['inputBlue'];
  }

  public setColor() {
    this.rgbtohex.setRGBData(this.inputRed.value, this.inputGreen.value, this.inputBlue.value);
    this.rgbtohex.load()
      .then(data => {
        console.log(data)
        this.colorSet = data;
      });
  }


}
