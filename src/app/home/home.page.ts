import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public ApresentarSlides() {
    this.NavCtrl.navigateRoot("/slides");
  }

  constructor(public NavCtrl : NavController) {}

}
