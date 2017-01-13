import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OverseasService} from "../../services/overseas-service";
import {OverseasDetailPage} from "../overseas-detail/overseas-detail";

/*
  Generated class for the Overseas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-overseas',
  templateUrl: 'overseas.html'
})

export class OverseasPage {

  // 해외여행 리스트
  public overseas;

  constructor(public nav: NavController, public overseasService: OverseasService) {
    this.overseas = overseasService.getAll();
  }

  // view restaurant detail
  viewOverseas(id) {
    this.nav.push(OverseasDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}