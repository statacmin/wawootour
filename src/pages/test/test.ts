import {Component} from "@angular/core";
import {NavController, ViewController, NavParams} from "ionic-angular";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

//import { showdown } from 'showdown';
//import * as $ from 'showdown';

//declare var showdown: any;

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})

export class TestPage {
  public slides1 = [];
  @ViewChild(Slides) slides: Slides;

  constructor(public nav: NavController, public viewCtrl: ViewController, private navParams: NavParams) {
    let id = navParams.get('id');

    this.slides1 = [
      {
       image: "assets/img/"+id+"/thumb/img_1.jpg",

      },
      {
        image: "assets/img/"+id+"/thumb/img_2.jpg",
      },
      {
        image: "assets/img/"+id+"/thumb/img_3.jpg",
      },
      {
        image: "assets/img/"+id+"/thumb/img_4.jpg",
      }
    ];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  slideChanged() {
   let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
    alert(currentIndex);
  }
}

