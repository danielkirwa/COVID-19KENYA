function counter() {
  // body...

}

function recoveryanalysis() {
	// body...
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL RECOVERY'],
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
          ['12',  30,     0],
          ['13',  30,     0],
          ['14',  37,     0],
          ['15',  41,     0],
          ['16',  49,     0],
          ['17',  58,     0],
          ['18',  80,     0],
          ['19',  109,     0],
          ['20',  121,     0],
          ['21',  125,     0],
          ['22',  141,     0],
          ['23',  157,     3],
          ['24',  171,     3],
          ['25',  178,     5],
          ['26',  183,     5],
          ['27',  188,     5],
          ['28',  190,     5],
          ['29',  196,     7],
          ['30',  208,     7],
          ['31',  216,     7],
          ['32',  225,     19],
          ['33',  234,     19],
          ['34',  246,     19],
          ['35',  262,     26],
          ['36',  270,     33],
          ['37',  281,     35],
          ['38',  296,     40],
          ['39',  303,     40],
          ['40',  320,     55],
          

        ]);

        var options = {
          title: 'comparison between total cases and recoverd cases in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('recoverylinegraph'));

        chart.draw(data, options);
      }
}
