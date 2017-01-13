import {Injectable} from "@angular/core";
import {OVERSEAS} from "./mock-overseas";

@Injectable()
export class OverseasService {
  private overseas:any;

  constructor() {
    this.overseas = OVERSEAS;
  }

  getAll() {
    return this.overseas;
  }

  getItem(id) {
    for (var i = 0; i < this.overseas.length; i++) {
      if (this.overseas[i].id === parseInt(id)) {
        return this.overseas[i];
      }
    }
    return null;
  }

  remove(item) {
    this.overseas.splice(this.overseas.indexOf(item), 1);
  }
}