function recoveryanalysis() {
	// body...
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL RECOVERY'],
          ['1',  2,     0],
          ['2',  0,     0],
          ['3',  1,     0],
          ['4',  3,     0],
          ['5',  0,     0],
          ['6',  0,     0],
          ['7',  0,     0],
          ['8',  8,     0],
          ['9',  1,     0],
          ['10',  9,     0],
          ['11',  3,     0],
          ['12',  3,     1],
          ['13',  0,     0],
          ['14',  7,     0],
          ['15',  4,     0],
          ['16',  8,     0],
          ['17',  9,     0],
          ['18',  22,     0],
          ['19',  29,     0],
          ['20',  12,     0],
          ['21',  4,     0],
          ['22',  16,     0],

          

        ]);

        var options = {
          title: 'comparison between total cases and active cases in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('recoverylinegraph'));

        chart.draw(data, options);
      }
}
