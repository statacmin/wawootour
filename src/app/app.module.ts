import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// import services
import {FoodCategoryService} from '../services/food-category-service';
import {FoodService} from '../services/food-service';
import {GatewayService} from '../services/gateway-service';
import {HotelService} from '../services/hotel-service';
import {RestaurantService} from '../services/restaurant-service';
import {ActivityService} from '../services/activity-service';
import {AttractionService} from '../services/attraction-service';
import {OverseasService} from '../services/overseas-service';
import {ContactService} from '../services/contact-service';
import {LeisureService} from '../services/leisure-service';
import {HealingService} from '../services/healing-service';
// end import services
// end import services

// import pages
import { ActivityPage} from '../pages/activity/activity';
import { AttractionDetailPage} from '../pages/attraction-detail/attraction-detail';
import { AttractionsPage} from '../pages/attractions/attractions';
import { FindFriendPage} from '../pages/find-friend/find-friend';
import { HomePage} from '../pages/home/home';
import { HotelDetailPage} from '../pages/hotel-detail/hotel-detail';
import { HotelsPage} from '../pages/hotels/hotels';
import { LoginPage} from '../pages/login/login';
import { MainTabsPage} from '../pages/main-tabs/main-tabs';
import { ModalFilterPage} from '../pages/modal-filter/modal-filter';
import { MyProfilePage} from '../pages/my-profile/my-profile';
import { RegisterPage} from '../pages/register/register';
import { RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import { RestaurantsPage} from '../pages/restaurants/restaurants';
import { SearchPage} from '../pages/search/search';
import { SettingPage} from '../pages/setting/setting';
import { WelcomePage} from '../pages/welcome/welcome';
import { TestPage } from '../pages/test/test';
import { OverseasPage } from '../pages/overseas/overseas';
import { OverseasDetailPage } from '../pages/overseas-detail/overseas-detail';
import { LeisurePage } from '../pages/leisure/leisure';
import { LeisureDetailPage } from '../pages/leisure-detail/leisure-detail';
import { HealingPage } from '../pages/healing/healing';
import { HealingDetailPage } from '../pages/healing-detail/healing-detail';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    FindFriendPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
    TestPage,
    OverseasPage,
    OverseasDetailPage,
    LeisurePage,
    LeisureDetailPage,
    HealingPage,
    HealingDetailPage
],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    FindFriendPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage,
    TestPage,
    OverseasPage,
    OverseasDetailPage,
    LeisurePage,
    LeisureDetailPage,
    HealingPage,
    HealingDetailPage
],
  providers: [
    FoodCategoryService,
    FoodService,
    GatewayService,
    HotelService,
    RestaurantService,
    ActivityService,
    AttractionService,
    OverseasService,
    ContactService,
    LeisureService,
    HealingService
    /* import services */
]
})
export class AppModule {}
