<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: grey;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

<div class="tooltip">
	Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>
<div class="tooltip">
<img src="images/kenya1.jpg" width="146px" style="padding-left: 4%;padding-top: 1%;">
<span class="tooltiptext">Kenya</span>
</div> 
</body>

</body>
</html>