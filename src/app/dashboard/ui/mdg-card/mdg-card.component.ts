import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-mdg-card',
  standalone: false,
  templateUrl: './mdg-card.component.html',
  styleUrl: './mdg-card.component.scss'
})
export class MdgCardComponent implements OnInit, OnDestroy {

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  private chart: ApexCharts | undefined;

  chartData = {
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    revenue: [12000, 15000, 13000, 18000, 20000, 21000, 25000, 24000, 23000, 22000, 20000, 19000],
    activeUsers: [3.2, 3.5, 3.3, 4.1, 4.3, 4.8, 5.2, 5.0, 4.9, 4.7, 4.5, 4.4]
  };

  ngOnInit(): void {

    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'line',
        height: 400
      },
      series: [
        {
          name: 'Revenue',
          type: 'column',
          data: this.chartData.revenue
        },
        {
          name: 'Active Users',
          type: 'column',
          data: this.chartData.activeUsers
        }
      ],
      stroke: {
        width: [0, 4]
      },
      // title: {
      //   text: 'Monthly Revenue & Active Users'
      // },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: this.chartData.categories,
      xaxis: {
        type: 'category'
      },
      yaxis: [
        {
          title: {
            text: 'Revenue'
          }
        },
        {
          opposite: true,
          title: {
            text: 'Active Users'
          }
        }
      ]
    };

    this.chart = new ApexCharts(this.chartContainer.nativeElement, options);
    this.chart.render();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

}
