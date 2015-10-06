$(document).ready(function(){
	$('#button').click(function(){
		
			$.getJSON("welcome/DataFile.json",
				function (json) {
				alert("Nisarg chutiya");
				var tr;
				for (var i = 0; i < json.length; i++) {
					tr = $('<tr/>');
					tr.append("<td>" + json[i].city + "</td>");
					tr.append("<td>" + json[i].Latitude + "</td>");
					tr.append("<td>" + json[i].Longitude + "</td>");
					$('table').append(tr);
				}
    });
	});
});		