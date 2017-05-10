import {Component} from "@angular/core";
import {FormBuilder, AbstractControl, FormGroup} from "@angular/forms";
import {NavController} from "ionic-angular";
import {RGBtoHEXProvider} from "../../providers/rgb-to-hex-provider";

@Component({
  providers: [RGBtoHEXProvider],
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  public colorSet: any;

  public colorForm: FormGroup;
  public inputRed: AbstractControl;
  public inputGreen: AbstractControl;
  public inputBlue: AbstractControl;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public rgbtohex: RGBtoHEXProvider) {
    this.colorForm = formBuilder.group({inputRed: ['0'], inputGreen: ['0'], inputBlue: ['0']});
    this.inputRed = this.colorForm.controls['inputRed'];
    this.inputGreen = this.colorForm.controls['inputGreen'];
    this.inputBlue = this.colorForm.controls['inputBlue'];
  }

  public checkColor() {
    this.colorSet = this.RGBtoHEX();
  }

  private RGBtoHEX(): string {
    return "#" + this.componentToHex(this.inputRed.value) + this.componentToHex(this.inputGreen.value) + this.componentToHex(this.inputBlue.value);
  }

  private componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  public sendColorToLightbulb() {
   // this.rgbtohex.sendColor(this.colorSet).then(data => console.log(data), error => console.log(error))
  }
}
