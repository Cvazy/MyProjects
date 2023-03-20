var xValues = ["Italy", "France", "USA"];
var yValues = [32, 44, 24];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
];

Chart.defaults.font.size = 14;
Chart.defaults.color = '#BFC3CF';

new Chart('FirstChart', {
    type: 'doughnut',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
        }
    }
});