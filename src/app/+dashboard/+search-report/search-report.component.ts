import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
/* import { IMyDpOptions } from 'mydatepicker'; */
import Chart from 'chart.js';

@FadeInTop()
@Component({
  selector: 'app-search-report',
  templateUrl: './search-report.component.html',
})
export class ViewSearchReportComponent implements OnInit {

/*   public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd-mm-yyyy',
  }; */
  public model1: any;
  public model2: any;

  close_ology_map: any = {
    data: [90, 100, 150, 50, 80, 50, 100],
    label: 'Close-Ology Map',
    fill: false,
    backgroundColor: 'rgba(255, 206, 86, 0.8)',
    borderColor: 'rgba(255, 206, 86, 0.8)'
  }

  tax_calculator: any = {
    data: [40, 20, 20, 30, 50, 80, 10],
    label: 'Tax Calculator',
    fill: false,
    backgroundColor: 'rgba(255, 99, 132, 0.8)',
    borderColor: 'rgba(255, 99, 132, 0.8)'
  }

  hope_thetical_calculator: any = {
    data: [70, 75, 50, 15, 30, 30, 25],
    label: 'Hope-thetical Calculator',
    fill: false,
    backgroundColor: 'rgba(54, 162, 235, 0.8)',
    borderColor: 'rgba(54, 162, 235, 0.8)'
  }

  labels = [
    '12-03-2018',
    '13-03-2018',
    '14-03-2018',
    '15-03-2018',
    '16-03-2018',
    '17-03-2018',
    '18-03-2018'
  ];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  onClickFilter() {
/*     this.close_ology_map.data = [90, 100, 150, 50];
    this.tax_calculator.data = [40, 20, 20, 30];
    this.hope_thetical_calculator.data = [70, 75, 50, 15];

    this.labels = [
      '12-03-2018',
      '13-03-2018',
      '14-03-2018',
      '15-03-2018'
    ];
 */
    this.getData();
  }

  getData() {
    var chartData = [this.tax_calculator, this.hope_thetical_calculator, this.close_ology_map];
    var ctx = document.getElementById("myChart1");

    var options = {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 14,
          padding: 15
        }
      },

      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Users',
            fontSize: 16,
            fontStyle: "bold"
          },
          ticks: {
            beginAtZero: true
          }
        }],

        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Subscription For',
            fontSize: 16,
            fontStyle: "bold",
          },
          maxBarThickness: 40,
          ticks: {
            autoSkip: false
          }
        }],
      },
    }

    var myPieChart = new Chart(ctx, {
      type: 'bar',
      barValueSpacing: 2,
      data: {
        datasets: chartData,
        labels: this.labels

      },
      options: options
    });
  }
}
