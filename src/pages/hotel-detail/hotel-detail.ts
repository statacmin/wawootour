import {Component} from "@angular/core";
import {NavController, Platform} from "ionic-angular";
import {HotelService} from "../../services/hotel-service";
import { NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TestPage } from '../test/test';

declare var google: any;
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-hotel-detail',
  templateUrl: 'hotel-detail.html'
})
export class HotelDetailPage {
  // hotel info
  public hotel: any;
  // default rating
  public rating = 0;
  // Map
  public map: any;
  // rating values
  public ratingValues = [0, 0, 0, 0, 0];

  constructor(public nav: NavController, public hotelService: HotelService, public platform: Platform, private navParams: NavParams, public modalCtrl: ModalController) {
    // set sample data
    let id = navParams.get('id');
    this.hotel = hotelService.getItem(id);

    // when platform ready, init map
    platform.ready().then(() => {
      console.log('ready');
      // init map
      this.initializeMap();
    });

    // process reviews data
    for (let key in this.hotel.reviews) {
      this.ratingValues[this.hotel.reviews[key].rating - 1]++;
    }
  }

  presentModal() {
    let modal = this.modalCtrl.create(TestPage, { id: 'hotel' });
    modal.present();
  }
  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // rate function
  rate(stars) {
    this.rating = stars;
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(this.hotel.location.lat, this.hotel.location.lon);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
  }
}
