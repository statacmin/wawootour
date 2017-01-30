import {Injectable} from "@angular/core";
import {LEISURE} from "./mock-leisure";

@Injectable()
export class LeisureService {
  private leisure:any;

  constructor() {
    this.leisure = LEISURE;
  }

  getAll() {
    return this.leisure;
  }

  getItem(id) {
    for (var i = 0; i < this.leisure.length; i++) {
      if (this.leisure[i].id === parseInt(id)) {
        return this.leisure[i];
      }
    }
    return null;
  }

  remove(item) {
    this.leisure.splice(this.leisure.indexOf(item), 1);
  }
}