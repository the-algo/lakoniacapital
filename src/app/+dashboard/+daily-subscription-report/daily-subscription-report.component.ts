import { Component, OnInit, OnDestroy } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import Chart from 'chart.js';

@FadeInTop()
@Component({
  selector: 'app-daily-subscription-report',
  templateUrl: './daily-subscription-report.component.html',
})
export class ViewDailySubscriptionReportComponent implements OnInit, OnDestroy {
  public chartjsData: any;

  constructor() { }

  ngOnInit() {

    var ctx = document.getElementById("myChart1");

    var data = {
      datasets: [{
        data: [40, 70, 90],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1

      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Tax Effect Calculator',
        'Hope-thetical Calculator',
        'Close-Ology Map'
      ]
    };

    var options = {
      legend: {
        position: 'bottom',
        display: false,
        labels: {
          fontSize: 16,
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
      data: data,
      options: options
    });
  }

  ngOnDestroy() { }
}
