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

  constructor(public app: App, public nav: NavController, public gatewayService: GatewayService,
              public hotelService: HotelService, public restaurantService: RestaurantService,
              public attractionService: AttractionService) {
    // set sample data
    this.restaurants = restaurantService.getAll();
    this.hotels = hotelService.getAll();
    this.attractions = attractionService.getAll();
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

  // 메인 슬라이드 클릭시 해당 이벤트 페이지로 이동
  viewMainSlide(id) {
    alert("이벤트 "+id);
  }

  //특산품 영역 클릭시 상품 리스트로 이동
  viewProduct() {
    alert("상품");
  }
}
