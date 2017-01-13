import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";
import {SearchPage} from "../search/search";
import {ActivityPage} from "../activity/activity";
import {MyProfilePage} from "../my-profile/my-profile";
import {TestPage} from "../test/test";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html'
})
export class MainTabsPage {
  // set tabs
  public tabHome = HomePage;
  public tabSearch = SearchPage;
  public tabTest = TestPage;
  public tabActivity = ActivityPage;
  public tabMe = MyProfilePage;

  constructor(public nav: NavController) {
  }
}
