
function deathanalysisslot2() {
  // body...
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL DEATHS'],
           ['101',4952,128],
           ['102',5206,130],
           ['103',5384,132],
           ['104',5533,137],
           ['105',5811,141],
           ['106',6070,143],
           ['107',6190,144]


         

        ]);

        var options = {
          title: '101 + DAYS comparison between total cases and deaths in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('deathlinegraph'));

        chart.draw(data, options);
      }
}
function showslot2() {
  deathanalysis();
  document.getElementById('deathlinegraph2').style.display="block";
  document.getElementById('showless2').style.display="block";
  document.getElementById('showmore2').style.display="none";
}

function showless2() {
  document.getElementById('deathlinegraph2').style.display="none";
  document.getElementById('showless2').style.display="none";
  document.getElementById('showmore2').style.display="block";
  
}



function deathanalysis() {
	// body...
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL DEATHS'],
           ['1',  2,     0],['2',  2,     0],['3',  3,     0],
           ['4',  6,     0],['5',  6,     0],['6',  6,     0],
          ['7',  6,     0],['8',  14,     0], ['9',  15,     0],
          ['10',  24,     0],['11',  27,     0],
          ['12',  30,     1],['13',  30,     1],
          ['14',  37,     1],['15',  41,     1],
          ['16',  49,     1],['17',  58,     1],
          ['18',  80,     1],['19',  109,     3],
          ['20',  121,     4],['21',  125,     4],
          ['22',  141,     4],['23',  157,     6],
          ['24',  171,     6],['25',  178,     6],
          ['26',  183,     7],['27',  188,     7],
          ['28',  190,     7],['29',  196,     8],
          ['30',  208,     9],['31',  216,     9],
          ['32',  225,     11],['33',  234,     11],
          ['34',  246,     11],['35',  262,     12],
          ['36',  270,     14],['37',  281,     14],
          ['38',  296,     14],['39',  303,     14],
          ['40',  320,     14],['41',  336,      14],
          ['42',  343,      14],['43',  355,    14],
          ['44',  363,    14],['45',  374,    14],
          ['46',  384,    15],['47',  396,    17],
          ['48',  411,    21],['49',  435,     22],
          ['50',  465,     24],['51',  490,     24],
          ['52',  535,     24],['53',  582,     26],
          ['54',  607,     29],['55',  621,     29],
          ['56',  649,     30],['57',  672,     32],  
          ['58',  700,     33],['59',  715,     36],
          ['60',  737,     40],['61',  758,     42],
          ['62',  781,     45],['63',  830,     50],
          ['64',  887,     50],['65',  912,     50],
          ['66',  963,     50],['67',  1029,     50],
          ['68',  1109,     50],['69',  1161,     50],
          ['70',  1192,     50],['71',  1214,     51],
          ['72',  1286,     52],['73',  1348,     52],
          ['74',  1471,     55],['75',  1618,     58],
          ['76',  1745,     62],['77',  1888,     63],
          ['78',  1962,     64],['79',  2021,     69],
          ['80',  2093,     71],['81',  2216,     74],
          ['82',  2340,     78],['83',  2474,     79],
          ['84',  2600,     83],['85',  2767,     84],
          ['86',  2862,     85],['87',  2989,     88],
          ['88',  3094,     89],['89',  3215,     92],
          ['90',  3305,     96],['91',  3457,     100],
          ['92',  3594,     103],['93',  3727,     104],
          ['94',  3860,     105],['95',  4044,     107],
          ['96',  4257,     117],['97',  4374,     119],
          ['98',  4478,     121],['99',  4738,     123],
          ['100',  4797,     125],         

        ]);

        var options = {
          title: '100 DAYS comparison between total cases and deaths in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('deathlinegraph2'));

        chart.draw(data, options);
      }
}
