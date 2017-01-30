import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { PhotoViewer } from 'ionic-native';
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
  templateUrl: 'test.html'
})
export class TestPage {
  shaObj: any;
  constructor(public nav: NavController) {
    PhotoViewer.show('https://hybapps.com/themes_market/files/large/9ba05622a9d0c46a158965b7cb9357aa.png');
           
           //var converter = new showdown.Converter();
  }

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "this.content",
      image: "assets/img/home_header.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/home_header.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/home_header.jpg",
    }
  ];
}

