import {Component} from "@angular/core";
import {App, NavController} from "ionic-angular";
import {GatewayService} from "../../services/gateway-service";
import {HotelService} from "../../services/hotel-service";
import {RestaurantService} from "../../services/restaurant-service";
import {AttractionService} from "../../services/attraction-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";
import {AttractionDetailPage} from '../attraction-detail/attraction-detail';
import {RestaurantsPage} from "../restaurants/restaurants";
import {HotelsPage} from "../hotels/hotels";
import {AttractionsPage} from "../attractions/attractions";
import {OverseasPage}  from "../overseas/overseas";
import {OverseasService} from "../../services/overseas-service";
import { OverseasDetailPage } from '../overseas-detail/overseas-detail';
import {LeisurePage}  from "../leisure/leisure";
import {LeisureService} from "../../services/leisure-service";
import { LeisureDetailPage } from '../leisure-detail/leisure-detail';
import {HealingPage}  from "../healing/healing";
import {HealingService} from "../../services/healing-service";
import { HealingDetailPage } from '../healing-detail/healing-detail';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // restaurants
  public restaurants: any;
  // hotels
  public hotels: any;
  // attractions
  public attractions: any;
  // overseas
  public overseas: any;
  //leisures
  public leisures: any;
  //healing
  public healings: any;

  constructor(public app: App, public nav: NavController, public gatewayService: GatewayService,
              public hotelService: HotelService, public restaurantService: RestaurantService,
              public attractionService: AttractionService, public overseasService: OverseasService, public leisureService: LeisureService, public healingService: HealingService) {
    // set sample data
    this.restaurants = restaurantService.getAll();
    this.hotels = hotelService.getAll();
    this.attractions = attractionService.getAll();
    this.overseas = overseasService.getAll();
    this.leisures = leisureService.getAll();
    this.healings = healingService.getAll();
  }

   slides = [
    {
      id: "1",
      image: "assets/img/main_slide/1.png",
      //image: "../assets/img/home_header.jpg",
    },
    {
      id: "2",
      image: "assets/img/main_slide/2.png",
    },
    {
      id: "3",
      image: "assets/img/main_slide/3.png",
    }
  ];

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.app.getRootNav().push(RestaurantDetailPage, {id: id})
  }

  // view hotel detail
  viewHotel(id) {
    this.app.getRootNav().push(HotelDetailPage, {id: id})
  }

  // view attraction detail
  viewAttraction(id) {
    this.app.getRootNav().push(AttractionDetailPage, {id: id})
  }


  // view all coffie
  viewAllCoffie() {
    this.app.getRootNav().push(RestaurantsPage);
  }

  // view all hotels
  viewAllHotels() {
    this.app.getRootNav().push(HotelsPage);
  }

  // view all restaurants
  viewAllAttractions() {
    this.app.getRootNav().push(AttractionsPage);
  }

  // view all oversea
  viewAllOversea() {
    this.app.getRootNav().push(OverseasPage);
  }

  //해외여행 상세
  viewOversea(id) {
    this.app.getRootNav().push(OverseasDetailPage, {id: id})
  }

  // 레저 리스트
  viewAllLeisure() {
    this.app.getRootNav().push(LeisurePage);
  }
  
  //레저 상세
  viewLeisure(id) {
    this.app.getRootNav().push(LeisureDetailPage, {id: id})
  }

  // 힐링 리스트
  viewAllHealing() {
    this.app.getRootNav().push(HealingPage);
  }
  
  //힐링 상세
  viewHealing(id) {
    this.app.getRootNav().push(HealingDetailPage, {id: id})
  }

  // 메인 슬라이드 클릭시 해당 이벤트 페이지로 이동
  viewMainSlide(id) {
    alert("이벤트 "+id);
  }

  //특산품 영역 클릭시 상품 리스트로 이동
  viewProduct() {
    alert("상품");
  }
}
