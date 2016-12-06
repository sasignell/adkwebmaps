$.ajax({
    type: "GET",
    url: "proxy.php?a=" + "http://www.northcountrypublicradio.org/upnorth/comcal/index/2014/09/3/0/0/0",
    dataType: "text",

    success: function(data) {
          var elements = $("<div>").html(data)[0].getElementsByClassName("venue");
          for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].lastChild.nodeValue;
               console.log(theText)
               $("#map").append(theText + '<br>');// Do something here
          }
     },
  error: function() {
    alert("Error tripped");
  }
});

