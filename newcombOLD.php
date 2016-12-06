<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="description" content="">
    <meta name="Steve Signell, Frontier Spatial, LLC" content="">
    <title>Newcomb Web Map</title>

    <link rel="stylesheet" href="lib/bootstrap-3.1.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="lib/font-awesome-4.0.3/css/font-awesome.min.css">    
    <link rel="stylesheet" href="lib/leaflet-0.7.2/leaflet.css">
    <link rel="stylesheet" href="lib/leaflet-sidebar/L.Control.Sidebar.css">
    <link rel="stylesheet" href="lib/Leaflet.label-master/dist/leaflet.label.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/sidebar.css">
    <link rel="stylesheet" href="//rawgithub.com/domoritz/leaflet-locatecontrol/gh-pages/src/L.Control.Locate.css" />
    <link href="lib/MarkerCluster.css" rel="stylesheet" type="text/css">
    <link href="lib/MarkerCluster.Default.css" rel="stylesheet" type="text/css">
    
    <link rel="stylesheet" href="lib/Leaflet.label-master/dist/leaflet.label.css">


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="assets/js/html5shiv.js"></script>
        <script src="assets/js/respond.min.js"></script>
    <![endif]-->
  </head>



  <body>
  
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="navbar-header">
        <!-- <button type="button" style="color:white;" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          Search/Zoom
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span> 
        </button>-->
        <a class="navbar-brand" href="http://newcombny.com" target="_blank_" >Newcomb, NY </a>
        <button type="button" class="btn btn-default navbar-btn" <a href="#aboutModal" data-toggle="modal"><i class="fa fa-question-circle" style="color: black"></i>&nbsp;&nbsp;About</button>
        <button type="button" class="btn btn-default navbar-btn" <a href="#legendModal" data-toggle="modal"><i class="fa fa-picture-o" style="color: black"></i>&nbsp;&nbsp;Legend</button>
        
        <button type="button" class="btn btn-default navbar-btn">

        

<!--           <li><a href="#aboutModal" data-toggle="modal"><i class="fa fa-question-circle" style="color: white"></i>&nbsp;&nbsp;About</a></li>
          <li><a href="#legendModal" data-toggle="modal"><i class="fa fa-picture-o"style="color: white"></i>&nbsp;&nbsp;Legend</a></li> -->
          <li class=" nav dropdown">
            <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe"></i>&nbsp;&nbsp;Zooms <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(newcombBoundary.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Full Extent</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.setView([43.97,-74.14],14); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Newcomb</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.setView([43.88,-74.25],13); if (!map.hasLayer(finch)) {
                    map.addLayer(finch);
                    }; return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Essex Chain Lakes</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.setView([44.08,-74.06],14); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Tahawus</a></li>

          </li>
        </ul>
      </button>
        <form class="navbar-form " role="search">
          <div class="form-group has-feedback ">
              <input id="searchbox" type="text" placeholder="Type here to search" class="form-control">
              <span id="searchicon" class="fa fa-search form-control-feedback"></span>
          </div>
        </form>

        
      </div>


    </div>

    <div id="map"></div>
    
    <div id="loading">
      <div class="loading-indicator">
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-info" style="width: 100%"></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="aboutModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header " >
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      
                      
                      <h3 class="modal-title" ><strong>Welcome to the Newcomb Web Map!</strong></h3>
                </div>

                <div class="modal-body">
                     
                      <a href="http://newcombny.com" target="_blank_"><img  class="pull-right" width='120' src="assets/img/newcomb/newcombClusterORIG.png"></a>
                      <p>This application was developed to introduce the world to all the wonderful amenities and attractions in Newcomb, NY.  The information in this map is managed by the Town of Newcomb. </p>
                      <br><br>
                     <h5><strong>Website Design & Map Inquiries</strong></h5>
                      <p>Mapping application by <a href="http://frontierspatial.com" target="_blank_">Frontier Spatial, LLC</a>.  Please direct any questions or issues regarding this map to <a href="mailto:steve@frontierspatial.com">steve@frontierspatial.com</a></p>


                  </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" id="legendModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Map Legend</h4>
                </div>
                <div class="modal-body">
                  <div class="row clearfix">
                  <div class="col-xs-4 column">
                    <p><strong>APA Land Classes</strong>
                    <img src='assets/img/apaLandClassLegend.jpg'></p>
                    <br>
                    <p><img height='18' width='18' src='assets/img/newcomb/newcombBoundary.png'>&nbsp;<strong>Township Boundary</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/snowmobileTrail.png'>&nbsp;<strong>Snowmobile Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/slt.png'>&nbsp;<strong>Hiking Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Ball Field.png'>&nbsp;<strong>Ball Field</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Beach.png'>&nbsp;<strong>Beach</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Bicycling.png'>&nbsp;<strong>Bicycling</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Boat Launch.png'>&nbsp;<strong>Boat Launch</strong></p>

                  </div>
                  <div class="col-xs-4 column">

                    <p><img height='25' width='22' src='assets/img/newcomb/Boating.png'>&nbsp;<strong>Boating</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Outfitter.png'>&nbsp;<strong>Boat & Bike Rentals</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Campground.png'>&nbsp;<strong>Campground</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Canoeing.png'>&nbsp;<strong>Canoeing</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Cross-Country Skiing.png'>&nbsp;<strong>Cross-Country Skiing</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Doctor.png'>&nbsp;<strong>Doctor</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Eco Center.png'>&nbsp;<strong>Eco Center</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Fire Tower.png'>&nbsp;<strong>Fire Tower</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Fitness Trail.png'>&nbsp;<strong>Fitness Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Float Plane Access.png'>&nbsp;<strong>Float Plane Access</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Golf Course.png'>&nbsp;<strong>Golf Course</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Groceries.png'>&nbsp;<strong>Groceries</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Hand Launch.png'>&nbsp;<strong>Hand Launch</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Hiking.png'>&nbsp;<strong>Hiking</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Historic Site.png'>&nbsp;<strong>Historic Site</strong></p>
                  </div>
                  <div class="col-xs-4 column">   
                    <p><img height='25' width='22' src='assets/img/newcomb/Horse Trail.png'>&nbsp;<strong>Horse Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Skating Rink.png'>&nbsp;<strong>Ice Skating</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Lodging.png'>&nbsp;<strong>Lodging</strong></p>     
                    <p><img height='25' width='22' src='assets/img/newcomb/Motorboat.png'>&nbsp;<strong>Motorboat</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Parking.png'>&nbsp;<strong>Parking</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Picnic.png'>&nbsp;<strong>Picnic</strong></p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Playground.png'>&nbsp;<strong>Playground</strong>
                    <p><img height='25' width='22' src='assets/img/newcomb/Post Office.png'>&nbsp;<strong>Post Office</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Restaurant.png'>&nbsp;<strong>Restaurant</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/School.png'>&nbsp;<strong>School</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Skiing.png'>&nbsp;<strong>Skiing</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Snowshoeing.png'>&nbsp;<strong>Snowshoeing</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Tennis Courts.png'>&nbsp;<strong>Tennis Courts</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Town Facility.png'>&nbsp;<strong>Town Facility</strong>
                    </p>
                    <p><img height='25' width='22' src='assets/img/newcomb/Trailhead.png'>&nbsp;<strong>Trailhead</strong>
                    </p>
                  </div>
                 </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
    <div class="modal fade" id="featureModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title text-primary" id="feature-title"></h4>
          </div>
          <div class="modal-body" id="feature-info"></div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <script src="lib/jquery-1.11.0.min.js"></script>
    <script src="lib/bootstrap-3.1.1/dist/js/bootstrap.min.js"></script>
    <script src="lib/typeahead/typeahead.bundle.min.js"></script>
    <script src="lib/leaflet-0.7.2/leaflet.js"></script>
    <script src="lib/leaflet-control-osm-geocoder/Control.OSMGeocoder.js"></script>
    <script src="lib/leaflet-sidebar/L.Control.Sidebar.js"></script>
   <script src="//rawgithub.com/domoritz/leaflet-locatecontrol/gh-pages/src/L.Control.Locate.js" ></script>

    <script type="text/javascript" src="lib/esri-leaflet.js"></script>
    <script type="text/javascript" src="lib/leaflet.markercluster.js"></script>
    <script type="text/javascript" src="lib/Leaflet.label-master/dist/leaflet.label.js"></script>
    <script src="lib/leaflet-control-osm-geocoder/Control.OSMGeocoder.js"></script>

    <!-- LAYERS -->
        <script type="text/javascript" src="assets/js/overlays.js"></script>
        <script type="text/javascript" src="assets/js/icons.js"></script>
        <script type="text/javascript" src="assets/js/blueline.js"></script>
        <script type="text/javascript" src="assets/js/newcomb.js"></script>
  </body>
</html>
