var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

Chart.defaults.font.size = 14;
Chart.defaults.color = '#BFC3CF';

new Chart('ThirdChart', {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            label: 'Diagram',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(54, 162, 235, 0.6)',
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
    }
});