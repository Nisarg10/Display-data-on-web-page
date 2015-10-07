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
    var marker;
     var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("map"),mapProp);

    for (i = 0; i < json.length; i++) {
        
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(Number(json[i].Latitude), Number(json[i].Longitude),
            map: map
        });
            
      marker.setMap(map);  
    }
}