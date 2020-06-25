function deathanalysis() {
	// body...
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL DEATHS'],
           ['1',  2,     0],
          ['2',  2,     0],
          ['3',  3,     0],
          ['4',  6,     0],
          ['5',  6,     0],
          ['6',  6,     0],
          ['7',  6,     0],
          ['8',  14,     0],
          ['9',  15,     0],
          ['10',  24,     0],
          ['11',  27,     0],
          ['12',  30,     1],
          ['13',  30,     1],
          ['14',  37,     1],
          ['15',  41,     1],
          ['16',  49,     1],
          ['17',  58,     1],
          ['18',  80,     1],
          ['19',  109,     3],
          ['20',  121,     4],
          ['21',  125,     4],
          ['22',  141,     4],
          ['23',  157,     6],
          ['24',  171,     6],
          ['25',  178,     6],
          ['26',  183,     7],
          ['27',  188,     7],
          ['28',  190,     7],
          ['29',  196,     8],
          ['30',  208,     9],
          ['31',  216,     9],
          ['32',  225,     11],
          ['33',  234,     11],
          ['34',  246,     11],
          ['35',  262,     12],
          ['36',  270,     14],
          ['37',  281,     14],
          ['38',  296,     14],
          ['39',  303,     14],
          ['40',  320,     14],
          

        ]);

        var options = {
          title: 'comparison between total cases and deaths in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('deathlinegraph'));

        chart.draw(data, options);
      }
}
