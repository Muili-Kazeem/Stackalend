import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-revenue-contribution-card',
  standalone: false,
  templateUrl: './revenue-contribution-card.component.html',
  styleUrl: './revenue-contribution-card.component.scss'
})
export class RevenueContributionCardComponent implements OnInit, OnDestroy {

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  private chart: ApexCharts | undefined;

  chartData = {
    labels: ['Rent', 'Food', 'Transport', 'Utilities', 'Entertainment', 'Savings'],
    values: [1000, 600, 150, 200, 100, 300]
  };

  ngOnInit(): void {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'donut',
        height: 400
      },
      series: this.chartData.values,
      labels: this.chartData.labels,
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '20px',
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: '16px',
                offsetY: 10
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  return '$' + w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
        position: 'bottom'
      },
      colors: ['#4f46e5', '#16a34a', '#f97316', '#eab308', '#db2777', '#06b6d4']
    };

    this.chart = new ApexCharts(this.chartContainer.nativeElement, options);
    this.chart.render();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
