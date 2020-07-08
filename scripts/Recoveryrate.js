
function recoveryanalysisslot2() {
  // body...
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL RECOVERY'],
   
              ['101',4952,1782],
              ['102',5206,1823],
              ['103',5384,1857],
              ['104',5533,1905],
              ['105',5811,1936],
              ['106',6070,1971],
              ['107',6190,2013],
              ['108',6366,2039],
              ['109',6673,2089],
              ['110',6941,2109],
              ['111',7188,2148],
              ['112',7577,2236],
              ['113',7886,2287],
              ['114',8067,2414],
              ['115',8250,2504]

        ]);

        var options = {
          title: '101 + DAYS comparison between total cases and recoverd cases in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('recoverylinegraph'));

        chart.draw(data, options);
      }
}





function recoveryanalysis() {
	// body...
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['DAY', 'TOTAL CASES', 'TOTAL RECOVERY'],
          ['1',  2,     0],['2',  2,     0],
          ['3',  3,     0],['4',  6,     0],
          ['5',  6,     0],['6',  6,     0],
          ['7',  6,     0],['8',  14,     0],
          ['9',  15,     0],['10',  24,     0],
          ['11',  27,     0],['12',  30,     0],
          ['13',  30,     0],['14',  37,     0],
          ['15',  41,     0],['16',  49,     0],
          ['17',  58,     0],['18',  80,     0],
          ['19',  109,     0],['20',  121,     0],
          ['21',  125,     0],['22',  141,     0],
          ['23',  157,     3],['24',  171,     3],
          ['25',  178,     5],['26',  183,     5],
          ['27',  188,     5],['28',  190,     5],
          ['29',  196,     7],['30',  208,     7],
          ['31',  216,     7],['32',  225,     19],
          ['33',  234,     19],['34',  246,     19],
          ['35',  262,     26],['36',  270,     33],
          ['37',  281,     35],['38',  296,     40],
          ['39',  303,     40],['40',  320,     55],
          ['41',336,60],['42',343,64],
['43',355,72],['44',363,80],
['45',374,90],['46',384,95],
['47',396,110],['48',411,116],
['49',435,118],['50',465,133],
['51',490,139],['52',535,148],
['53',582,156],['54',607,163],
['55',621,168],['56',649,210],
['57',672,222],['58',700,234],
['59',715,242],['60',737,264],
['61',758,267],['62',781,267],
['63',830,284],['64',887,296],
['65',912,319],['66',963,341],
['67',1029,349],['68',1109,358],
['69',1161,363],['70',1192,363],
['71',1214,366],['72',1286,385],
['73',1348,388],['74',1471,391],
['75',1618,404],['76',1745,421],
['77',1888,447],['78',1962,461],
['79',2021,465],['80',2093,482],
['81',2216,553],['82',2340,592],
['83',2474,643],['84',2600,706],
['85',2767,752],['86',2862,849],
['87',2989,873],['88',3094,1048],
['89',3215,1092],['90',3305,1164],
['91',3457,1221],['92',3594,1253],
['93',3727,1286],['94',3860,1326],
['95',4044,1353],['96',4257,1459],
['97',4374,1550],['98',4478,1586],
['99',4738,1607],['100',4797,1680],
          

        ]);

        var options = {
          title: '100 DAYS comparison between total cases and recoverd cases in kenya',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('recoverylinegraph2'));

        chart.draw(data, options);
      }
}

function showslot2() {
  recoveryanalysis();
  document.getElementById('recoverylinegraph2').style.display="block";
  document.getElementById('showless2').style.display="block";
  document.getElementById('showmore2').style.display="none";
}

function showless2() {
  document.getElementById('recoverylinegraph2').style.display="none";
  document.getElementById('showless2').style.display="none";
  document.getElementById('showmore2').style.display="block";
  
}
