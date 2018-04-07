import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { RestServiceApiService } from '../../service/rest-service-api.service';
import { Router } from '@angular/router';

@FadeInTop()
@Component({
  selector: 'app-renew-map',
  templateUrl: './renew-map.component.html',
})
export class RenewMapComponent implements OnInit {

  detailsObject: any[] = [];
  selectedUserDetails: any[] = [];
  selectedSubscriptionList: any []=[];
  uniqueSubscription:any[]=[];
  selectedMap: any;
  selectedUser: any;
  subLocationName:any;
  data: boolean = false;
  id: number = null;
  todayDate: string;

  constructor(private service: RestServiceApiService,private router: Router) {

    if (JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"))) {
      var data = JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));
      this.id = data.userRoleId;
      this.service.getMySubscriptions().subscribe(res => {
        this.detailsObject=res.result;
        console.log(res);
        }
      
      )}
  }


  ngOnInit() {}

  onClickRenew(id: number) {
    this.router.navigate(['/dashboard/renew-map', id])
  }

}
