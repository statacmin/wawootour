import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {HealingService} from "../../services/healing-service";
import {HealingDetailPage} from "../healing-detail/healing-detail";

/*
  Generated class for the Healing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-healing',
  templateUrl: 'healing.html'
})
export class HealingPage {
// list of healing
  public healings;

  constructor(public nav: NavController, public healingService: HealingService) {
    this.healings = healingService.getAll();
  }

  // view healing detail
  viewHealing(id) {
    this.nav.push(HealingDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
