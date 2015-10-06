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
                    }
                });
            });
        });