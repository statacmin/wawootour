import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {LeisureService} from "../../services/leisure-service";
import {LeisureDetailPage} from "../leisure-detail/leisure-detail";

/*
  Generated class for the Leisure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-leisure',
  templateUrl: 'leisure.html'
})
export class LeisurePage {
  // list of leisures
  public leisures;

  constructor(public nav: NavController, public leisureService: LeisureService) {
    this.leisures = leisureService.getAll();
  }

  // view restaurant detail
  viewLeisure(id) {
    this.nav.push(LeisureDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
