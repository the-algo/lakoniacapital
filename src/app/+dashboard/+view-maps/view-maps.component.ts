import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { RestServiceApiService } from '../../service/rest-service-api.service';
import { element } from 'protractor';

@FadeInTop()
@Component({
  selector: 'app-view-maps',
  templateUrl: './view-maps.component.html',
})
export class ViewMapsComponent implements OnInit {

  detailsObject: any[] = [];
  selectedUserDetails: any[] = [];
  selectedSubscriptionList: any []=[];
  uniqueSubscription:any[]=[];
  selectedMap: any;
  selectedUser: any;
  subLocationName:any;
  data: boolean = false;
  users: any = [
    { key: 1, value: 'User1' },
    { key: 2, value: 'User2' },
    { key: 3, value: 'User3' }
  ];
  id: number = null;


  constructor(private service: RestServiceApiService) {

    if (JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"))) {
      var data = JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));
      this.id = data.userRoleId;
      this.service.getMySubscriptions().subscribe(res => {
        this.detailsObject=res.result;
        console.log(res);
        for(let item of this.detailsObject){
            var latLongArray=item.subLocationPostions.split(',')
            item.lat=latLongArray[0]
            item.long=latLongArray[1]
            item.subExpiryDate=new Date(item.subExpiryDate).toDateString()
        }
        for(let item1 of this.detailsObject){
          if(!this.findUnique(item1.lat)){
            this.uniqueSubscription.push(item1);
          }
      }
      
      })
    }
  }
  findUnique(locationName){
    for(let item of this.uniqueSubscription){
      if(item.lat==locationName)
      return true;
    }
    return false;
  }

  ngOnInit() {
  }
  assign(item){
    this.selectedMap=item;
    this.selectedSubscriptionList=[];
    for(let obj of this.detailsObject){
      if(obj.lat==item.lat){
        this.selectedSubscriptionList.push(obj);
      }
    }
  }

  onUserSelected() {
    this.selectedUserDetails = [];

    this.detailsObject.forEach(element1 => {
      var element=element._id;
        this.selectedUserDetails.push(element);
      
    });

    this.data = true
  }

  onBack() {
    window.location.reload();
  }
}