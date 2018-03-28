import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { RestServiceApiService } from '../../service/rest-service-api.service';
import { Router } from '@angular/router';

@FadeInTop()
@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.component.html',
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
export class CreateMapComponent implements OnInit {

  subscriptionList: any = [];
  public model = {
    subDetail: [
      {
        _id: '',
        itemName: "Close-Ology Map",
        itemPeriod: 0,
        itemAmount: 0,
        status: false
      },
      {
        _id: '',
        itemName: "Hope-thetical Calculator",
        itemPeriod: 0,
        itemAmount: 0,
        status: false
      },
      {
        _id: '',
        itemName: "Tax Effect Calculator",
        itemPeriod: 12,
        itemAmount: 0,
        status: false
      }
    ],
    total: 0,
    location: null,
    latitude: null,
    longitude: null,
    paymentDetails: {
      cardType: '0',
      cardNo: '',
      expirationDate: '',
      cardHolderName: '',
      securityCode: ''
    }
  };

  public finalDetails: any = {
    subDetail: [],
    subLocationName: '',
    subLocationPostions: '',
    paymentDetail: {}
  };

  err: boolean = false;
  result: any;
  erMsg: string = null;
  errStatus: boolean = true;

  constructor(private service: RestServiceApiService, private router: Router) {
    this.service.getSubscriptionList().subscribe(res => {
      if (!res.error) {
        var details = res.result;
        this.subscriptionList = details;

        for (var i = 0; i < this.subscriptionList.length; i++) {
          this.model.subDetail[i]._id = this.subscriptionList[i]._id;
        }

      }
    })
  }

  ngOnInit() {
  }



  status: boolean = false;

  selectedMonth: string = '0';
  selectedYear: string = '0';

  minLength: number = 0;
  maxLength: number = 0;

  cardStatus: boolean = true;
  cardNoStatus: boolean = true;
  expirationDateStatus: boolean = true;
  cardholderNameStatus: boolean = true;
  securityCodeStatus: boolean = true;

  years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040]

  public steps = [
    {
      key: 'step1',
      title: 'Subscription Details',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step2',
      title: 'Map Details',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step3',
      title: 'Confirm Details',
      valid: true,
      checked: false,
      submitted: false,
    },
    {
      key: 'step4',
      title: 'Payment',
      valid: true,
      checked: false,
      submitted: false,
    },
  ];

  public activeStep = this.steps[0];

  nextBtnStatus: boolean = true;

  setActiveStep(steo) {
    this.activeStep = steo
  }

  prevStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.steps[idx - 1]
    }

    this.nextBtnStatus = true;
  }

  nextStep() {
    if (this.activeStep.key === "step1") {
      if (this.model.subDetail[0].status || this.model.subDetail[1].status || this.model.subDetail[2].status) {
        this.activeStep.submitted = true;
        this.activeStep.checked = true;
        this.activeStep.valid = true;
      } else {
        this.activeStep.submitted = false;
        this.activeStep.checked = false;
        this.activeStep.valid = false;

        alert("Please select atleast one Subscription Package")
        return;
      }
    } else if (this.activeStep.key === "step2") {
      if (this.model.location && this.model.latitude && this.model.longitude) {
        this.activeStep.submitted = true;
        this.activeStep.checked = true;
        this.activeStep.valid = true;
      } else {
        this.activeStep.submitted = false;
        this.activeStep.checked = false;
        this.activeStep.valid = false;

        alert("Please provide the Location, Latitude and Longitude")
        return;
      }
    } else if (this.activeStep.key === "step3") {

      if (this.steps[0].valid && this.steps[1].valid) {
        this.activeStep.submitted = true;
        this.activeStep.checked = true;
        this.activeStep.valid = true;
      }

      if (this.status)
        this.nextBtnStatus = true;
      else
        this.nextBtnStatus = false;

    } else if (this.activeStep.key === "step4") {
      /*       this.activeStep.submitted = true;
            this.activeStep.checked = true;
            this.activeStep.valid = true; */
      this.finalDetails.paymentDetail = this.model.paymentDetails;

      this.service.createNewSubscription(this.finalDetails).subscribe(res => {
        console.log(res);
      })

      return;

    }





    //this.activeStep.submitted = true;
    //if (!this.activeStep.valid) {
    //  return;
    //}
    //this.activeStep.checked = true;
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

    /*     if (period === "0")
          per = 0;
        else if (period === "1 Month")
          per = 1;
        else if (period === "6 Months")
          per = 6;
        else if (period === "1 Year")
          per = 12; */

    per = parseInt(period);

    if (type === "Map") {

      this.model.subDetail[0].itemAmount = 2 * per;
      this.model.subDetail[0].itemPeriod = per;

      if (this.model.subDetail[0].itemAmount === 0)
        this.model.subDetail[0].status = false
      else
        this.model.subDetail[0].status = true
    } else if (type === "Hope") {
      this.model.subDetail[1].itemAmount = 1 * per;
      this.model.subDetail[1].itemPeriod = per;

      if (this.model.subDetail[1].itemAmount === 0)
        this.model.subDetail[1].status = false
      else
        this.model.subDetail[1].status = true
    } else if (type === "Tax") {
      if (this.model.subDetail[2].status)
        this.model.subDetail[2].itemAmount = 0.5;
      else
        this.model.subDetail[2].itemAmount = 0;

    }

    this.model.total = this.model.subDetail[0].itemAmount + this.model.subDetail[1].itemAmount + this.model.subDetail[2].itemAmount;
  }

  onClickSave() {
    var subDetail = [];

    if (this.model.paymentDetails.cardType !== '0') {
      this.cardStatus = true;
    } else {
      this.cardStatus = false;
    }

    if (this.model.paymentDetails.cardNo.length >= this.minLength && this.model.paymentDetails.cardNo.length <= this.maxLength && (this.model.paymentDetails.cardNo !== null && this.model.paymentDetails.cardNo !== '')) {
      this.cardNoStatus = true;
    } else {
      this.cardNoStatus = false;
    }

    if ((this.selectedMonth !== null && this.selectedMonth !== '0') && (this.selectedYear !== null && this.selectedYear !== '0')) {
      this.expirationDateStatus = true;
    } else {
      this.expirationDateStatus = false;
    }

    if (this.model.paymentDetails.cardHolderName !== null && this.model.paymentDetails.cardHolderName !== '') {
      this.cardholderNameStatus = true;
    } else {
      this.cardholderNameStatus = false;
    }

    if (this.model.paymentDetails.securityCode.length >= 3 && this.model.paymentDetails.securityCode.length <= 4 && this.model.paymentDetails.securityCode !== null && this.model.paymentDetails.securityCode !== '') {
      this.securityCodeStatus = true;
    } else {
      this.securityCodeStatus = false;
    }

    if (this.cardStatus && this.cardNoStatus && this.expirationDateStatus && this.cardholderNameStatus && this.securityCodeStatus) {
      this.status = true;
      for (var i = 0; i < 1; i++) {
        if (this.steps[i].valid && this.steps[i + 1].valid) {
          this.nextBtnStatus = true;
        } else {
          this.nextBtnStatus = false
        }
      }
      this.activeStep.submitted = true;
      this.activeStep.checked = true;
      this.activeStep.valid = true;


      for (var i = 0; i < this.model.subDetail.length; i++) {
        if (this.model.subDetail[i].status) {
          this.model.subDetail[i].itemAmount = this.model.subDetail[i].itemAmount / this.model.subDetail[i].itemPeriod;
          subDetail.push(this.model.subDetail[i]);
        }
      }
      this.finalDetails.subDetail = subDetail;
      this.finalDetails.subLocationName = this.model.location;
      this.finalDetails.subLocationPostions = this.model.latitude + ", " + this.model.longitude;
      this.finalDetails.paymentDetail = this.model.paymentDetails;

      this.service.createNewSubscription(this.finalDetails).subscribe(res => {
        if (!res.error) {
          this.result = res.result;
          this.errStatus = res.error;

          setTimeout(() => {
            this.result = null;
            if (!this.errStatus) {
              this.errStatus = false;
              this.router.navigate(['/dashboard/view-maps']);
              return;
            }
            this.errStatus = true;

          }, 2000);
        }
      })
    }

  }

  onCardSelected() {
    if (this.model.paymentDetails.cardType === "AmericanExpress") {
      this.minLength = 15;
      this.maxLength = 15;
    } else if (this.model.paymentDetails.cardType === "Mastercard") {
      this.minLength = 16;
      this.maxLength = 16;
    } else if (this.model.paymentDetails.cardType === "Maestrocard") {
      this.minLength = 16;
      this.maxLength = 19;
    } else if (this.model.paymentDetails.cardType === "Visa") {
      this.minLength = 13;
      this.maxLength = 19;
    } else {
      this.minLength = 0;
      this.maxLength = 0;
    }
  }

  lettersOnly(event: any) {
    const pattern = /[a-zA-Z ]/;
    //const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.charCode == 0) {

    } else
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
  }

  numbersOnly(event: any) {
    const pattern = /[0-9 ]/;
    //const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.charCode == 0) {

    } else
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
  }

}