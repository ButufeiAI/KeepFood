const notesChart = {
    series: [20, 20, 20, 20, 20],
    notes: {
        chart: {
            height: 200,
            type: 'donut',
            toolbar: {
                show: false,
            },
            offsetY: -10,
            events: {
                rendered: function () {
                    // Adding the center text
                    var chartElement = document.querySelector("#donutChart");
                    var innerText = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">' +
                        '<span style="font-size: 24px; font-weight: bold;">Total</span><br>' +
                        '<span style="font-size: 16px;">abb</span>' +
                        '</div>';
                    chartElement.innerHTML += innerText;
                }
            },
        },
        plotOptions: {
            pie: {
                startAngle: -100,
                endAngle: 100,
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            show: false
        },
        colors: ['#0C4B5E', '#FFC107', '#1B84FF', '#AB47BC', '#FD3995'],

        labels: ['Documents', 'Video', 'Music', 'Photos', 'Other'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        grid: {
            padding: {
                bottom: -60  // Reduce padding from the bottom
            }
        }
    }
}

export { notesChart }