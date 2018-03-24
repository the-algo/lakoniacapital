import {
  Component, OnInit, trigger,
  state,
  style,
  transition,
  animate, OnChanges, Input, DoCheck,
} from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";

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

  ngOnInit() {
  }

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
      cardType: '0',
      cardNo: '',
      expirationDate: '',
      cardHolderName: '',
      securityCode: ''
    }
  };

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
      if (this.model.subscriptionFor[0].status || this.model.subscriptionFor[1].status || this.model.subscriptionFor[2].status) {
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
      /* 
            if (this.model.paymentDetails.cardType !== '0') {
              this.cardStatus = true;
      
              if (this.model.paymentDetails.cardNo.length >= this.minLength && this.model.paymentDetails.cardNo.length <= this.minLength && (this.model.paymentDetails.cardNo !== null && this.model.paymentDetails.cardNo !== '')) {
                this.cardNoStatus = true;
      
                if (this.model.paymentDetails.expirationDate !== null && this.model.paymentDetails.expirationDate !== '') {
                  this.expirationDateStatus = true;
      
                  if (this.model.paymentDetails.cardHolderName !== null && this.model.paymentDetails.cardHolderName !== '') {
                    this.cardholderNameStatus = true;
      
                    if (this.model.paymentDetails.securityCode !== null && this.model.paymentDetails.securityCode !== '') {
                      this.securityCodeStatus = true;
      
                      console.log("Valid");
      
                    } else {
                      this.securityCodeStatus = false;
                      return;
                    }
                  } else {
                    this.cardholderNameStatus = false;
                    return;
                  }
                } else {
                  this.expirationDateStatus = false;
                  return;
                }
              } else {
                this.cardNoStatus = false;
                return;
              }
            } else {
              this.cardStatus = false;
              return;
            } */

      this.activeStep.submitted = true;
      this.activeStep.checked = true;
      this.activeStep.valid = true;

      console.log(this.model);

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
      console.log("Valid");
      this.status = true;
      for (var i = 0; i < 1; i++) {
        if (this.steps[i].valid && this.steps[i + 1].valid) {
          this.nextBtnStatus = true;
        } else {
          this.nextBtnStatus = false
        }
      }
      console.log(this.model);
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