import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-renew-details',
  templateUrl: './renew-details.component.html',
})
export class RenewDetailsComponent implements OnInit {

  detailsObject: MapDetailsModel[] = [];
  selectedUserDetails: MapDetailsModel[] = [];
  selectedMap: MapDetailsModel;
  selectedUser: number;
  data: boolean = false;
  users: any = [
    { key: 1, value: 'User1' },
    { key: 2, value: 'User2' },
    { key: 3, value: 'User3' }
  ];

  todayDate: string;

  constructor() { }

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
        userId: 2,
        userName: "User2",
        mapId: 3,
        locationName: "Midland",
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
