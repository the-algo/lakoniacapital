import { Component, OnInit, OnDestroy } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import Chart from 'chart.js';

@FadeInTop()
@Component({
  selector: 'app-user-subscription-report',
  templateUrl: './user-subscription-report.component.html',
})
export class ViewUserSubscriptionReportComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    var ctx = document.getElementById("myChart2");

    var data = {
      datasets: [{
        data: [25, 35, 40],
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
        labels: {
          fontSize: 15,
          padding: 15
        }
      },
      animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
          var ctx = this.chart.ctx;
          Chart.defaults.global.defaultFontSize = 14;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset) {

            for (var i = 0; i < dataset.data.length; i++) {
              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = '#000';
              //if (i == 3) { // Darker text color for lighter background
              //  ctx.fillStyle = '#444';
              //}
              //var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
              ctx.fillText(dataset.data[i] + "%", model.x + x + 5, model.y + y + 7);
              // Display percent in another line, line break doesn't work for fillText
              //ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }

    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });
  }

  ngOnDestroy() { }
}
