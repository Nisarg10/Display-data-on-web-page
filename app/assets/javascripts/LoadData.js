 $(document).ready(function() {
 
            $('#button').click(function(){

                //start ajax request
                $.ajax({
                    url: "welcome/DataFile.json",
                    dataType: "text",
                    success: function(data) {

                        var json = $.parseJSON(data);
                        
                       	var tr;
				for (var i = 0; i < json.length; i++) {
					tr = $('<tr/>');
					tr.append("<td>" + json[i].city + "</td>");
					tr.append("<td>" + json[i].Latitude + "</td>");
					tr.append("<td>" + json[i].Longitude + "</td>");
					$('table').append(tr);
				}
                    intialize(json);

                    }
                });
            });
        });

function initialize(json){

    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    var marker,i;

    for( i = 0; i < json.length; i++ ) {
        var position = new google.maps.LatLng(json[i].Latitude, json[i].Longitude);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map
        });
}

