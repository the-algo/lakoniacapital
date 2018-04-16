import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { RestServiceApiService } from '../../service/rest-service-api.service';
import { Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { element } from 'protractor';

@FadeInTop()
@Component({
  selector: 'app-renew-map',
  templateUrl: './renew-map.component.html',
})
export class RenewMapComponent implements OnInit {

  detailsObject: any[] = [];
  selectedUserDetails: any[] = [];
  renewid: any[]=[];
  selectedMap: any;
  selectedSubscriptionList:any[]=[]
  selectedUser: any;
  subLocationName: any;
  data: boolean = false;
  users: any = [
    { key: 1, value: 'User1' },
    { key: 2, value: 'User2' },
    { key: 3, value: 'User3' }
  ];
  id: number = null;
  uniqueSubscription: any[] = []
  todayDate: string;

  // constructor(private router: Router) { }

  constructor(private router: Router, private service: RestServiceApiService) {
    if (JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"))) {
      var data = JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));
      this.id = data.userRoleId;
      this.service.getMySubscriptions().subscribe(res => {
        this.detailsObject = res.result;
       // console.log(res);
        for (let item of this.detailsObject) {
          var latLongArray = item.subLocationPostions.split(',')
          item.lat = latLongArray[0]
          item.long = latLongArray[1]
          item.subExpiryDate=new Date(item.subExpiryDate).toDateString()
          item.subActiveDate=new Date(item.subActiveDate).toDateString()
        }
        for (let item1 of this.detailsObject) {
          if (!this.findUnique(item1.lat)) {
            this.uniqueSubscription.push(item1);
          }
        }

      })
    }
  }
  findUnique(lat) {
    for (let item of this.uniqueSubscription) {
      if (item.lat == lat)
        return true;
    }
    return false;
  }

  ngOnInit() {
    var obj = [
      {
        userId: 1,
        userName: "User1",
        mapId: 1,
        locationName: "Texas",
        latitude: 30.1234567,
        longitude: 100.1234567,
        subscription: {
          for: ["Close-Ology Map", "Hope-thetical Calculator"],
          period: ["1 Month", "6 Months"],
          amount: [12, 1],
          expirationDate: ["12-08-2017", "12-03-2018"]
        },
        payment: {
          mode: "Visa",
          dateOfPayment: "12-07-2017",
          debitCardNo: "1234 5678 9000",
          totalAmount: 13
        }
      },

      {
        userId: 1,
        userName: "User1",
        mapId: 2,
        locationName: "Midland",
        latitude: 31.4567891,
        longitude: 101.3216547,
        subscription: {
          for: ["Close-Ology Map"],
          period: ["1 Month"],
          amount: [12],
          expirationDate: ["25-02-2018"]
        },
        payment: {
          mode: "Visa",
          dateOfPayment: "25-01-2018",
          debitCardNo: "9876 5432 1000",
          totalAmount: 12
        }
      },

      {
        userId: 1,
        userName: "User1",
        mapId: 3,
        locationName: "Karnes",
        latitude: 35.1122334,
        longitude: 100.9512345,
        subscription: {
          for: ["Hope-thetical Calculator", "Tax Effect Calculator"],
          period: ["6 Months", "1 Year"],
          amount: [1, 0.50],
          expirationDate: ["28-02-2017", "28-01-2018"]
        },
        payment: {
          mode: "Visa",
          dateOfPayment: "28-01-2017",
          debitCardNo: "1122 3344 5566",
          totalAmount: 1.50
        }
      }
    ]

    this.detailsObject = obj;
    
  }
  
  
  assign(item){
    this.selectedMap=item;
    this.selectedSubscriptionList=[];
    for(let obj of this.detailsObject){
      if(obj._id===item._id){
        this.selectedSubscriptionList.push(obj);
      }
    }
  }
    onUserSelected() {
      this.selectedUserDetails = [];
  
      this.detailsObject.forEach(element => {
        if (element._id === this.selectedUser) {
          this.selectedUserDetails.push(element);
  
        }
      });
      this.data = true
    }
    onClickRenew(item) {
      this.renewid=[];
      this.service.renewid=[];
      this.detailsObject.forEach(element1 =>{
        if(element1.lat===item.lat){
         // this.renewid.push(element1._id);
          this.service.renewid.push(element1);
        }
      });


      //  this.service.renewsubitem=item;
      this.router.navigate(['/dashboard/renew-mapp'])
  
    }
  
}

class MapDetailsModel {
  userId: number;
  mapId: number;
  locationName: string;
  latitude: number;
  longitude: number;
  subscription: {
    for: string[],
    period: string[],
    amount: number[],
    expirationDate: string[]
  };
  payment: {
    mode: string,
    dateOfPayment: string,
    debitCardNo: string,
    totalAmount: number
  }
}
