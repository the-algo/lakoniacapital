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
      cardType: null,
      cardNo: null,
      expirationDate: null,
      cardHolderName: null,
      securityCode: null
    }
  };

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