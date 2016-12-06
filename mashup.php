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
    <title>Adridondack Mashup Map</title>

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
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand visible-xs" style="font-size:0.85em;" href="http://newcombny.com" target="_blank_">ADK Map Mashup</a>
        <a class="navbar-brand hidden-xs" href="http://newcombny.com" target="_blank_" >Adirondack Web Map Mashup</a>
      </div>
      <div class="navbar-collapse collapse">
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group has-feedback navbar-right">
              <input id="searchbox" type="text" placeholder="Type here to search" class="form-control">
              <span id="searchicon" class="fa fa-search form-control-feedback"></span>
          </div>
        </form>
        <ul class="nav navbar-nav">

          <li><a href="#aboutModal" data-toggle="modal"><i class="fa fa-question-circle" style="color: white"></i>&nbsp;&nbsp;About</a></li>
          <li class="dropdown">
            <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe" style="color: white"></i>&nbsp;&nbsp;Quick Zooms <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(blueline.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Full Extent</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(newcombCluster.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Newcomb</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(washingtonCountyCluster.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Washington County</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(longLakeCluster.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Long Lake</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(raquetteLakeCluster.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Raquette Lake</a></li>
            </ul>
          </li>
        </ul>
      </div><!--/.navbar-collapse -->
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
                      
                      
                      <h3 class="modal-title" ><strong>Welcome to the Adirondack Web Map Mashup!</strong></h3>
                </div>

                <div class="modal-body">
                     
                      
                      <p>More and more agencies, organizations are sharing their map data online with interactive web maps.  Because the data in these online maps are standardized and accessible, one can create new maps that combine multiple data sources in new ways-- a 'Mashup'.  This application combines map data from several sources to create single map showing businesses and attractions in the Adirondack Park, NY, USA.  Click on the icons below to learn more about the web maps that feed into this map. Additional data courtesy of the <a href="http://aatvny.org/content/Generic/View/18" target="_blank_">Adirondack Partnership</a> Economic Development Working Group</p>
                      <br><br>
                      <div class="row clearfix">
                        <div class="col-md-3 column helper">
                          <a href="http://frontierspatial.com/adkwebmaps/newcomb.php" target="_blank_"><img  width='100' src="assets/img/newcomb/newcombClusterORIG.png"></a>
                        </div>
                        <div class="col-md-3 column helper">
                          <a href="http://frontierspatial.com/adkwebmaps/longlake.php" target="_blank_"><img src='assets/img/longLake/LongLakeBearLogo.jpg' width='100'></a>
                        </div>
                        <div class="col-md-3 column helper">
                          <br>
                          
                          <a href="http://frontierspatial.com/adkwebmaps/longlake.php" target="_blank_"><img src='assets/img/longLake/raquetteLakeLoonLogo.jpg' width='110'></a>
                        </div>
                        <div class="col-md-3 column helper">
                        <br>
                          <a href="http://www.washingtonnycounty.com/maps/" target="_blank_"><img src='assets/img/washingtonCounty/wct_logo.png' width='110'></a>
                        </div>
                        
                      </div>
                     <h5><strong>Website Design & Map Inquiries</strong></h5>
                      <p>Mapping application by <a href="http://frontierspatial.com" target="_blank_">Frontier Spatial, LLC</a>.  Please direct any questions or issues regarding this map to <a href="mailto:steve@frontierspatial.com">steve@frontierspatial.com</a></p>


                  </div>
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
        <script type="text/javascript" src="assets/js/mashupMap.js"></script>
  </body>
</html>
