import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  NgApexchartsModule,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { Daterangepicker } from '../../../../shared/daterangepicker/daterangepicker';
import { RouterLink} from '@angular/router'
import { routes } from '../../../../core/routes/routes';
  export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive | any;
  colors: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
  labels:  any;
  stroke: ApexStroke | any;
  grid: ApexGrid | any;
  tooltip: ApexTooltip | any;
  title: ApexTitleSubtitle | any;
};
@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule,Daterangepicker,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  AllRoutes = routes
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public categoryChart: Partial<ChartOptions>;
  public salesChart: Partial<ChartOptions>;
  public statisticChart: Partial<ChartOptions>;
  constructor(){
    this.chartOptions={
    series: [{
    name: 'Revenue',
    data: [4, 2, 3.5, 3, 2, 2.8, 3.2]
  }],
  chart: {
    height: 220,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val:any) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#F8F8F8',
          colorTo: '#F8F8F8',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: true,
    },
    labels: {
      show: true,
      formatter: function (val:any) {
        return val + "k";
      }
    },
    
  
  },
  colors: ['#0d76e1d9']
  }
  this.categoryChart={
      series: [30, 20, 15, 35], // Percentages for each section
      chart: {
          type: 'donut',
          height: 175,
      },
      labels: [ 'Delivery', 'Reservation', 'Take Away', 'Dine'], // Labels for the data
      colors: ['#14B51D', '#FFA80B', '#0D76E1', '#A91CFF'], // Colors from the image
      stroke: {
        width: 0, // Explicitly set stroke width to zero
      },
      plotOptions: {
          pie: {
              donut: {
                  size: '60%',
                  labels: {
                      show: true, // Enable donut labels
                      name: {
                        show: true,
                        offsetY: -10, // Position the label name
                        fontSize: '14px',
                      },
                      value: {
                        show: true,
                        offsetY: 10, // Position the series value
                        color: '#333',
                        fontSize: '24px', // Make the value prominent
                        formatter: function (value:any) {
                                    // Format the value (e.g., add the '%' sign)
                          return value + '%'; 
                        }
                      },
                      total: {
                          show: false,
                          label: 'Leads',
                          formatter: function (w:any) {
                              return '589';
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
      },
      // label: {
      //   show: false,
      // }
  }
  this.salesChart={
      series: [40],
      labels:['Sales'],
      chart: {
        height: 340,
        type: 'radialBar',
        offsetY: -30,
         sparkline: {
        enabled: true // Removes all default padding and extra space
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: '16px',
            offsetY: 0
          },
          value: {
            offsetY: -40,
            fontSize: '22px',
            color: undefined,
            formatter: function (val:any) {
              return val + "%";
            }
          },
          
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    grid: {
      padding: {
      bottom: 0,
      top: -20
    }
    },
    colors: ["#FFA80B"],
    }
    this.statisticChart={
      series: [{
        labels: ['Orders'],
        data: [40, 35, 45, 44, 63,  50, 84]
      }],
      chart: {
        height: 260,
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: true
        },
        y: {
          title: {
            formatter: function (seriesName:any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: [1.5],
      },
      fill: {
        type: "gradient",     // or 'gradient'
        opacity: 0.2,      // reduce area darkness (0 = no fill, 1 = solid)
        
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#4da5ff",
              opacity: 0.8
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0
            }
          ]
        }
      },
      title: {
        text: undefined,
      },
      grid: {
        borderColor: 'transparent',
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: false } },
        padding: {
            left: 2,
            right: -3,
            top: -50
          }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            fontSize: '12px',
          }
        }
      },
      yaxis: {
      min: 0,
      forceNiceScale: true,
      labels: {
        show: false
      }
    },
      colors: ["#4da5ff"],
    }
  }
  ngOnInit():void{
    document.body.classList.add('custom-rangePicker')
  }
  ngOnDestroy():void{
    document.body.classList.remove('custom-rangePicker')
  }
}
