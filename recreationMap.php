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
    <title>Adirondack Regional Geographic Information System</title>

    <link rel="stylesheet" href="lib/bootstrap-3.1.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="lib/font-awesome-4.0.3/css/font-awesome.min.css">    <link rel="stylesheet" href="lib/leaflet-0.7.2/leaflet.css">
    <link rel="stylesheet" href="lib/leaflet-sidebar/L.Control.Sidebar.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/sidebar.css">
    <link href="lib/leaflet-control-osm-geocoder/Control.OSMGeocoder.css" rel="stylesheet" type="text/css"></link>
    <link href="lib/MarkerCluster.css" rel="stylesheet" type="text/css"></link>
    <link href="lib/MarkerCluster.Default.css" rel="stylesheet" type="text/css"></link>
    <link rel="apple-touch-icon" href="assets/img/favicon-152.png">
    <link rel="shortcut icon" sizes="196x196" href="assets/img/favicon-196.png">

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
        <a class="navbar-brand" href="#">ARGIS</a>
      </div>
      <div class="navbar-collapse collapse">
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group has-feedback navbar-right">
              <input id="searchbox" type="text" placeholder="Search" class="form-control">
              <span id="searchicon" class="fa fa-search form-control-feedback"></span>
          </div>
        </form>
        <ul class="nav navbar-nav">
          <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="$('#aboutModal').modal('show'); return false;"><i class="fa fa-question-circle" style="color: white"></i>&nbsp;&nbsp;About</a></li>
          <li class="dropdown">
            <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe" style="color: white"></i>&nbsp;&nbsp;Tools <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(boroughs.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom To Full Extent</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="$('#legendModal').modal('show'); return false;"><i class="fa fa-picture-o"></i>&nbsp;&nbsp;Show Legend</a></li>
              <li class="divider hidden-xs"></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="$('#loginModal').modal('show'); return false;"><i class="fa fa-user"></i>&nbsp;&nbsp;Login</a></li>
            </ul>
          </li>
          <li class="dropdown">
              <a class="dropdown-toggle" id="downloadDrop" href="#" role="button" data-toggle="dropdown"><i class="fa fa-cloud-download" style="color: white"></i>&nbsp;&nbsp;Download <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="data/boroughs.geojson" download="boroughs.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Boroughs</a></li>
                <li><a href="data/subways.geojson" download="subways.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Subway Lines</a></li>
                <li><a href="data/DOITT_THEATER_01_13SEPT2010.geojson" download="theaters.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Theaters</a></li>
                <li><a href="data/DOITT_MUSEUM_01_13SEPT2010.geojson" download="museums.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Museums</a></li>
              </ul>
          </li>
          <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="sidebar.toggle(); return false;"><i class="fa fa-list" style="color: white"></i>&nbsp;&nbsp;Sidebar</a></li>
        </ul>
      </div><!--/.navbar-collapse -->
    </div>

    <div id="map"></div>
    <div id="sidebar">
      <h2>leaflet-sidebar</h2>
      <p>A <a href="https://github.com/turbo87/leaflet-sidebar/">responsive sidebar plugin</a> for <a href="http://leafletjs.com/">Leaflet</a>, a JS library for interactive maps.</p>
      <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <div id="loading">
      <div class="loading-indicator">
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-info" style="width: 100%"></div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Welcome to the BootLeaf template!</h4>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" id="aboutTabs">
              <li class="active"><a href="#about" data-toggle="tab"><i class="fa fa-question-circle"></i>&nbsp;About the project</a></li>
              <li><a href="#contact" data-toggle="tab"><i class="fa fa-envelope"></i>&nbsp;Contact us</a></li>
              <li><a href="#disclaimer" data-toggle="tab"><i class="fa fa-exclamation-circle"></i>&nbsp;Disclaimer</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe"></i>&nbsp;Metadata <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#boroughs-tab" data-toggle="tab">Boroughs</a></li>
                  <li><a href="#subway-lines-tab" data-toggle="tab">Subway Lines</a></li>
                  <li><a href="#theaters-tab" data-toggle="tab">Theaters</a></li>
                  <li><a href="#museums-tab" data-toggle="tab">Museums</a></li>
                </ul>
              </li>
            </ul>
            <div class="tab-content" id="aboutTabsContent" style="padding-top: 10px;">
              <div class="tab-pane fade active in" id="about">
                <p>A simple, responsive template for building web mapping applications with <a href="http://getbootstrap.com/">Bootstrap 3</a>, <a href="http://leafletjs.com/" target="_blank">Leaflet</a>, and <a href="http://twitter.github.io/typeahead.js/" target="_blank">typeahead.js</a>. Open source, MIT licensed, and available on <a href="https://github.com/bmcbride/bootleaf" target="_blank">GitHub</a>.</p>
                <div class="panel panel-primary">
                  <div class="panel-heading">Features</div>
                  <ul class="list-group">
                    <li class="list-group-item">Fullscreen mobile-friendly map template with responsive navbar and modal placeholders</li>
                    <li class="list-group-item">jQuery loading of external GeoJSON files</li>
                    <li class="list-group-item">Elegant client-side multi-layer feature search with autocomplete using <a href="http://twitter.github.io/typeahead.js/" target="_blank">typeahead.js</a></li>
                    <li class="list-group-item">Integration of Bootstrap tables into Leaflet popups</li>
                    <li class="list-group-item">Logic for minimizing layer control and switching to modal popups on small screens</li>
                    <li class="list-group-item">Responsive sidebar functionality via the <a href="https://github.com/turbo87/leaflet-sidebar/" target="_blank">leaflet-sidebar</a> plugin</li>
                    <li class="list-group-item">Marker icons included in layer control</li>
                  </ul>
                </div>
              </div>
              <div id="disclaimer" class="tab-pane fade text-danger">
                <p>The data provided on this site is for informational and planning purposes only.</p>
                <p>Absolutely no accuracy or completeness guarantee is implied or intended. All information on this map is subject to such variations and corrections as might result from a complete title search and/or accurate field survey.</p>
              </div>
              <div class="tab-pane fade" id="contact">
                <form id="contact-form">
                  <div class="well well-sm">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="first-name">First Name:</label>
                          <input type="text" class="form-control" id="first-name">
                        </div>
                        <div class="form-group">
                          <label for="last-name">Last Name:</label>
                          <input type="text" class="form-control" id="last-email">
                        </div>
                        <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="text" class="form-control" id="email">
                        </div>
                      </div>
                      <div class="col-md-8">
                        <label for="message">Message:</label>
                        <textarea class="form-control" rows="8" id="message"></textarea>
                      </div>
                      <div class="col-md-12">
                        <p>
                          <button type="submit" class="btn btn-primary pull-right" data-dismiss="modal">Submit</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="boroughs-tab">
                <p>Borough data courtesy of <a href="http://www.nyc.gov/html/dcp/html/bytes/meta_dis_nyboroughwi.shtml" target="_blank">New York City Department of City Planning</a></p>
              </div>
              <div class="tab-pane fade" id="subway-lines-tab">
                <p><a href="http://spatialityblog.com/2010/07/08/mta-gis-data-update/#datalinks" target="_blank">MTA Subway data</a> courtesy of the <a href="http://www.urbanresearch.org/about/cur-components/cuny-mapping-service" target="_blank">CUNY Mapping Service at the Center for Urban Research</a></p>
              </div>
              <div class="tab-pane fade" id="theaters-tab">
                <p>Theater data courtesy of <a href="https://data.cityofnewyork.us/Recreation/Theaters/kdu2-865w" target="_blank">NYC Department of Information & Telecommunications (DoITT)</a></p>
              </div>
              <div class="tab-pane fade" id="museums-tab">
                <p>Museum data courtesy of <a href="https://data.cityofnewyork.us/Recreation/Museums-and-Galleries/sat5-adpb" target="_blank">NYC Department of Information & Telecommunications (DoITT)</a></p>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" id="legendModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Map Legend</h4>
          </div>
          <div class="modal-body">
            <p>Map Legend goes here...</p>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            <form id="contact-form">
              <fieldset>
                <div class="form-group">
                  <label for="name">Username:</label>
                  <input type="text" class="form-control" id="username">
                </div>
                <div class="form-group">
                  <label for="email">Password:</label>
                  <input type="password" class="form-control" id="password">
                </div>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary pull-right" data-dismiss="modal">Login</button>
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
    <script type="text/javascript" src="lib/leaflet.markercluster.js"></script>
    <!-- LAYERS -->
        <script type="text/javascript" src="assets/js/overlays.js"></script>
        <script type="text/javascript" src="assets/js/icons.js"></script>
        <script type="text/javascript" src="assets/js/blueline.js"></script>
        <script type="text/javascript" src="assets/js/attractionsMap.js"></script>
  </body>
</html>
