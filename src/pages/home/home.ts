import {Component} from '@angular/core';

import {FormBuilder, AbstractControl, FormGroup} from '@angular/forms';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public colorSet: String;

  public colorForm: FormGroup;
  public inputRed: AbstractControl;
  public inputGreen: AbstractControl;
  public inputBlue: AbstractControl;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.colorForm = formBuilder.group({inputRed: [''], inputGreen: [''], inputBlue: ['']});
    this.inputRed = this.colorForm.controls['inputRed'];
    this.inputGreen = this.colorForm.controls['inputGreen'];
    this.inputBlue = this.colorForm.controls['inputBlue'];
  }

  public setColor(color: String) {
    this.colorSet = color;
  }
}
