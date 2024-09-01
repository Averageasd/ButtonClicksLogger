import { Component } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'buttonClicksLogger';
  buttonClickId: number = 1;
  buttonClicks: string[] = [];
  secretMessage: string = 'secret message';
  showSecretMessage: boolean = false;
  constructor() {}

  onShowSecret() {
    this.showSecretMessage = !this.showSecretMessage;
    this.buttonClicks.push(this.getButtonClickLog());
    this.incrementButtonClickId();
  }

  getButtonClickLog() {
    return `${this.buttonClickId}:Clicked at ${this.getFormattedDate(Date.now())}`;
  }

  getFormattedDate(dateAsMilisecs: number){
    return formatDate(dateAsMilisecs,"yyyy-mm-dd hh:mm:ss", "en-US");
  }

  incrementButtonClickId() {
    this.buttonClickId += 1;
  } 

  isFifthOrHigher(buttonClick: string) {
    return parseInt(buttonClick.split(':')[0]) >= 5;
  }
}
