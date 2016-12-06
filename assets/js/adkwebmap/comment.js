function initRegistration() {
  map.addEventListener('click', onMapClick);
  document.body.style.cursor = 'crosshair';
  return false;
}

function cancelRegistration() {
  newFeedback.clearLayers();
  document.body.style.cursor = 'default';
  map.removeEventListener('click', onMapClick);
}

function onMapClick(e) {
    var commentIcon = L.icon({
    iconUrl: 'assets/img/adkwebmap/comment-map-icon.png',
    iconSize: [24, 28],
    iconAnchor: [12, 28],
    popupAnchor: [0, -25]
  });
  var markerLocation = new L.LatLng(e.latlng.lat, e.latlng.lng);
  var marker = new L.Marker(markerLocation, {
    icon: commentIcon
  });
  newFeedback.clearLayers();
  newFeedback.addLayer(marker);

  var form =  '<form id="inputform" action="data/adkwebmap/feedback_insert.php" method="post" enctype="multipart/form-data" class="well">'+
        '<div class="form-group">' +
        '<label><strong>Screen Name:&nbsp;</strong></label>'+
        '<input type="text" class="span3" placeholder="&nbsp;Required" id="name" name="name" />'+
        '</div>' +
        '<fieldset>'+
        '<div class="form-group">' +
        '<label><strong>Email:</strong> <i>never shared</i>&nbsp;</label>'+
        '<input type="text"  placeholder="&nbsp;Optional" id="email" name="email" />'+
        '</div>' +
        '<div class="form-group">' +
        '<label><strong>Comment:&nbsp;</strong></label>'+
        '<textarea class="col-sm-12 col-lg-12" rows="8" placeholder="&nbsp;Required" id="comment" name="comment"></textarea>'+
        '</div>' +
        '</fieldset>'+
        '<input style="display: none;" type="text" id="lat" name="lat" value="'+e.latlng.lat.toFixed(6)+'" />'+
        '<input style="display: none;" type="text" id="lng" name="lng" value="'+e.latlng.lng.toFixed(6)+'" /><br><br>'+
        '<div class="row">'+
          '<div class="col-sm-6 col-lg-6" style="text-align:center;"><button type="button" class="btn" onclick="cancelRegistration()">Cancel</button></div>'+
          '<div class="col-sm-6 col-lg-6" style="text-align:center;"><button type="button" class="btn btn-primary" onclick="initForm(); $(\'#inputform\').submit();">Submit</button></div>'+
        '</div>'+
        '</form>';

/*var form =  '<form id="inputform" action="data/adkwebmap/feedback_insert.php" method="post" enctype="multipart/form-data" class="well">'+
        '<label><strong>Screen Name:</strong></label>'+
        '<input type="text" class="span3" placeholder="Required" id="name" name="name" />'+
        '<label><strong>Email:</strong> <i>optional, never shared</i></label>'+
        '<input type="text" class="span3" placeholder="Required" id="email" name="email" />'+
        '<label><strong>Comment:</strong></label>'+
        '<textarea class="span3" rows="5" placeholder="Required" id="comment" name="comment"></textarea>'+
        '<input style="display: none;" type="text" id="lat" name="lat" value="'+e.latlng.lat.toFixed(6)+'" />'+
        '<input style="display: none;" type="text" id="lng" name="lng" value="'+e.latlng.lng.toFixed(6)+'" /><br><br>'+
        '<div class="row-fluid">'+
          '<div class="col-sm-6 col-lg-6" style="text-align:center;"><button type="button" class="btn" onclick="cancelRegistration()">Cancel</button></div>'+
          '<div class="col-sm-6 col-lg-6" style="text-align:center;"><button type="button" class="btn btn-primary" onclick="initForm(); $(\'#inputform\').submit()">Submit</button></div>'+
        '</div>'+
        '</form>';*/
  marker.bindPopup(form, {
    closeButton: false
  }).openPopup();
}

// Begin form submission
function initForm() {
  function validateForm(formData, jqForm, options) {
    var form = $('#inputform');
    if ($("#name").val().length == 0) {
      alert('Name is required!');
      return false;
    }
/*    if ($("#email").val().length == 0) {
      alert('Email is required!');
      return false;
    }*/
    if ($("#comment").val().length == 0) {
      alert('Comment is required!');
      return false;
    }
    else {
      return true;
    }
  }

  var options = { beforeSubmit: validateForm, success: successMsg, resetForm: true };
    $('#inputform').submit(function() {
        $(this).ajaxSubmit(options);
        return false;

    })


  function successMsg() {
    cancelRegistration();
    feedback.clearLayers();
    $('#insertSuccessModal').modal('show'); 
  }
};


var comment = new L.GeoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: commentIcon,
            title: 'click to see comments' 
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.name + "</br>" + feature.properties.date + "</br>" + feature.properties.comment, { autoPanPadding: new L.Point(5, $('.navbar').height()+5)
            });
        }
    }
});

$.getJSON("data/adkwebmap/comments2geojson.php", function (data) {
    comment.addData(data);
});

var commentGroup = new L.LayerGroup([comment]);
// Feedback Layers

feedback = new L.FeatureGroup();
newFeedback = new L.LayerGroup();