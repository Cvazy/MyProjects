var xValues = ["China", "India", "United States", "Indonesia", "Brazil",
    "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"];
var yValues = [1379302771, 1281935911, 326625791, 260580739, 207353391,
    204924861, 190632261, 157826578, 142257519, 126451398];
var barColors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)'];

Chart.defaults.font.size = 14;
Chart.defaults.color = '#BFC3CF';

new Chart('SecondChart', {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            label: 'Population',
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
    }
});