import {Injectable} from "@angular/core";
import {HEALING} from "./mock-healings";

@Injectable()
export class HealingService {
  private healing:any;

  constructor() {
    this.healing = HEALING;
  }

  getAll() {
    return this.healing;
  }

  getItem(id) {
    for (var i = 0; i < this.healing.length; i++) {
      if (this.healing[i].id === parseInt(id)) {
        return this.healing[i];
      }
    }
    return null;
  }

  remove(item) {
    this.healing.splice(this.healing.indexOf(item), 1);
  }
}