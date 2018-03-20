import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { ActivatedRoute } from '@angular/router';

@FadeInTop()
@Component({
  selector: 'app-renew-selected-map',
  templateUrl: './renew-selected-map.component.html',
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in '))
    ])
  ]
})
export class RenewSelectedMapComponent implements OnInit {

  //detailsObject: MapDetailsModel;
  //selectedUserDetails: MapDetailsModel[] = [];
  //selectedMap: MapDetailsModel;
  detailsObject: any;
  selectedUser: number;
  data: boolean = false;
  selectedMapId: number = null;


  public model = {
    subscriptionFor: [
      {
        type: "Close-Ology Map",
        period: '0',
        amount: 0,
        status: false
      },
      {
        type: "Hope-thetical Calculator",
        period: '0',
        amount: 0,
        status: false
      },
      {
        type: "Tax Effect Calculator",
        period: '1 Year',
        amount: 0,
        status: false
      }
    ],
    total: 0,
    location: null,
    latitude: null,
    longitude: null,
    paymentDetails: {
      cardType: null,
      cardNo: null,
      expirationDate: null,
      cardHolderName: null,
      securityCode: null
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.selectedMapId = param["id"];
    })

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
          amount: [2, 6],
          expirationDate: ["12-08-2017", "12-03-2018"]
        },
        payment: {
          mode: "Visa",
          dateOfPayment: "12-07-2017",
          debitCardNo: "1234 5678 9000",
          cardHolderName: "Adam Sam",
          totalAmount: 8
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
          amount: [2],
          expirationDate: ["25-02-2018"]
        },
        payment: {
          mode: "Visa",
          dateOfPayment: "12-07-2017",
          debitCardNo: "1234 5678 9000",
          cardHolderName: "Adam Sam",
          totalAmount: 2
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
          amount: [6, 0.50],
          expirationDate: ["28-02-2017", "28-01-2018"]
        },
        payment: {
          mode: "Visa",
          dateOfPayment: "12-07-2017",
          debitCardNo: "1234 5678 9000",
          cardHolderName: "Adam Sam",
          totalAmount: 6.50
        }
      }
    ]


    obj.forEach(element => {
      if (element.mapId == this.selectedMapId) {
        this.detailsObject = element;
      }
    });

    console.log(this.detailsObject);

    if (this.detailsObject) {
      this.model.total = this.detailsObject.payment.totalAmount;
      this.model.location = this.detailsObject.locationName;
      this.model.latitude = this.detailsObject.latitude;
      this.model.longitude = this.detailsObject.longitude;

      //this.model.paymentDetails.cardNo = this.detailsObject.payment.debitCardNo;
      //this.model.paymentDetails.cardHolderName = this.detailsObject.payment.cardHolderName;
      //this.model.paymentDetails.cardType = this.detailsObject.payment.mode;
      //this.model.paymentDetails.expirationDate

      this.detailsObject.subscription.for.forEach((element, index) => {
        if (element == "Close-Ology Map") {
          this.model.subscriptionFor[0].period = this.detailsObject.subscription.period[index];
          this.model.subscriptionFor[0].amount = this.detailsObject.subscription.amount[index];
          this.model.subscriptionFor[0].status = true;
        } else if (element == "Hope-thetical Calculator") {
          this.model.subscriptionFor[1].period = this.detailsObject.subscription.period[index];
          this.model.subscriptionFor[1].amount = this.detailsObject.subscription.amount[index];
          this.model.subscriptionFor[1].status = true;
        } else if (element == "Tax Effect Calculator") {
          this.model.subscriptionFor[2].period = this.detailsObject.subscription.period[index];
          this.model.subscriptionFor[2].amount = this.detailsObject.subscription.amount[index];
          this.model.subscriptionFor[2].status = true;
        }
      });

      console.log(this.model);
    }

    //this.detailsObject = obj;
  }

  status: boolean = false;

  selectedMonth: string = '0';
  selectedYear: string = '0';

  years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040]

  public steps = [
    {
      key: 'step1',
      title: 'Subscription Details',
      valid: false,
      checked: false,
      submitted: false,
    },
    /*     {
          key: 'step2',
          title: 'Map Details',
          valid: false,
          checked: false,
          submitted: false,
        }, */
    {
      key: 'step2',
      title: 'Confirm Details',
      valid: true,
      checked: false,
      submitted: false,
    },
    {
      key: 'step3',
      title: 'Payment',
      valid: true,
      checked: false,
      submitted: false,
    },
  ];

  public activeStep = this.steps[0];

  setActiveStep(steo) {
    this.activeStep = steo
  }

  prevStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.steps[idx - 1]
    }
  }

  nextStep() {
    this.activeStep.submitted = true;
    //if (!this.activeStep.valid) {
    //  return;
    //}
    this.activeStep.checked = true;
    //if (this.steps.every(it => (it.valid && it.checked))) {
    //  this.onWizardComplete(this.model)
    //} else {
    let idx = this.steps.indexOf(this.activeStep);
    this.activeStep = null;
    while (!this.activeStep) {
      idx = idx == this.steps.length - 1 ? 0 : idx + 1;
      if (!this.steps[idx].valid || !this.steps[idx].checked) {
        this.activeStep = this.steps[idx]
        //    }
      }
    }
  }


  onWizardComplete(data) {
  }


  private lastModel;

  // custom change detection
  ngDoCheck() {
    if (!this.lastModel) {
      // backup model to compare further with
      this.lastModel = Object.assign({}, this.model)
    } else {
      if (Object.keys(this.model).some(it => this.model[it] != this.lastModel[it])) {
        // change detected
        // this.steps.find(it => it.key == 'step1').valid = !!(this.model.email && this.model.firstname && this.model.lastname);
        // this.steps.find(it => it.key == 'step2').valid = !!(this.model.country && this.model.city && this.model.postal);
        // this.lastModel = Object.assign({}, this.model)
      }
    }
  }

  selectedExpirationDate() {
    this.model.paymentDetails.expirationDate = null;

    this.model.paymentDetails.expirationDate = this.selectedMonth + "-" + this.selectedYear;
  }

  changePrice(type: string, period: string) {

    let per: number;

    if (period === "0")
      per = 0;
    else if (period === "1 Month")
      per = 1;
    else if (period === "6 Months")
      per = 6;
    else if (period === "1 Year")
      per = 12;

    if (type === "Map") {

      this.model.subscriptionFor[0].amount = 2 * per;

      if (this.model.subscriptionFor[0].amount === 0)
        this.model.subscriptionFor[0].status = false
      else
        this.model.subscriptionFor[0].status = true
    } else if (type === "Hope") {
      this.model.subscriptionFor[1].amount = 1 * per;

      if (this.model.subscriptionFor[1].amount === 0)
        this.model.subscriptionFor[1].status = false
      else
        this.model.subscriptionFor[1].status = true
    } else if (type === "Tax") {
      if (this.model.subscriptionFor[2].status)
        this.model.subscriptionFor[2].amount = 0.5;
      else
        this.model.subscriptionFor[2].amount = 0;

    }

    this.model.total = this.model.subscriptionFor[0].amount + this.model.subscriptionFor[1].amount + this.model.subscriptionFor[2].amount;
  }

  onClickSave() {
    this.status = true;
    console.log(this.model);
  }

}


/* class MapDetailsModel {
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
} */