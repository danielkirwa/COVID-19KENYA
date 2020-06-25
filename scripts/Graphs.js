function bargraph() {
	// body...
	 google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "CASES", { role: "style" } ],
        ["Total cases", 5384, "blue"],
        ["Total active", 3395, "teal"],
        ["Total recovery", 1857, "green"],
        ["Total deaths", 132, "red"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "TOTAL CASES IN KENYA OF COVID-19",
        width: 500,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
}
function piechart(argument) {
	// body...
	google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
      	
        var data = google.visualization.arrayToDataTable([
          ['Task', 'New cases'],
          ['NEW CASES',     178,],
          ['RECOVERD',      34],
          ['DEATHS',  2]
        ]);

        var options = {
          title: ' Daily COVID-19 report',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
}
function loaddate() {
	// body...
	var today = new Date();

	var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
	document.getElementById('currentdate').innerHTML = date;
	
}
