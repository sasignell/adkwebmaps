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
    <title>Long Lake Web Map</title>
<?php include_once("../php/adkwebmaps/coreCSS.php"); ?>
 
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="assets/js/html5shiv.js"></script>
        <script src="assets/js/respond.min.js"></script>
    <![endif]-->
    
  </head>



  <body>
  
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style="color:white;">
          Tools & Info
          <!-- <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span> -->
        </button>
        <a class="navbar-brand visible-xs" style="font-size:0.85em;" href="http://mylonglake.com" target="_blank_">Long/Raquette Lake, NY</a>
        <a class="navbar-brand hidden-xs" href="http://mylonglake.com" target="_blank_">Long/Raquette Lake, NY</a>
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
          <li><a href="#legendModal" data-toggle="modal"><i class="fa fa-picture-o"style="color: white"></i>&nbsp;&nbsp;Legend</a></li>
          <li class="dropdown">
            <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe" style="color: white"></i>&nbsp;&nbsp;Zooms <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(longLakeBoundary.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom To Full Extent</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.setView([43.971,-74.42],16); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom To Long Lake</a></li>
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.setView([43.81266,-74.65698],16); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom To Raquette Lake</a></li>
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
                <div class="modal-header " style="text-align:center">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <a href="#" target="_blank_"><img  class="pull-right" width='80' src="assets/img/longLake/raquetteLakeLoonLogo.jpg"></a>
                      <a href="#" target="_blank_"><img  class="pull-left" width='60' src="assets/img/longLake/LongLakeBearLogo.jpg"></a>
                      <h2 class="modal-title">Welcome to the Long Lake/Raquette Lake Web Map!</h2>
                </div>

                <div class="modal-body">
                     
                      <p>This application was developed to introduce the world to all the wonderful amenities and attractions in Long Lake and Raquette Lake, NY.  The information in this map is managed by the Town of Long Lake. For more information please contact the <a href="mailto:deerland@frontiernet.net">Long Lake Town Recreation Department</a></p>
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
                  <div class="col-xs-6 column">
                    <p><img height='18' width='18' src='assets/img/longLake/longLakeBoundary.png'>&nbsp;<strong>Township Boundary</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/snowmobileTrail.png'>&nbsp;<strong>Snowmobile Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/hikingTrail.png'>&nbsp;<strong>Hiking Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/nfct.png'>&nbsp;<strong>Northern Forest Canoe Trail</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Arts and Crafts.png'>&nbsp;<strong>Arts and Crafts</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Bank.png'>&nbsp;<strong>Bank</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Bar.png'>&nbsp;<strong>Tavern</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Baseball Diamond.png'>&nbsp;<strong>Baseball Diamond</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Basketball Court.png'>&nbsp;<strong>Basketball Court</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Beach.png'>&nbsp;<strong>Beach</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Boat & Canoe.png'>&nbsp;<strong>Boat Rentals / Marina</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Campground.png'>&nbsp;<strong>Campground</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Cemetery.png'>&nbsp;<strong>Cemetery</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Church.png'>&nbsp;<strong>Church</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Float Plane.png'>&nbsp;<strong>Float Plane</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Food & Spirits.png'>&nbsp;<strong>Food & Spirits</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Gas.png'>&nbsp;<strong>Gas</strong></p>
                  </div>
                  <div class="col-xs-6 column">
                    <p><img height='25' width='22' src='assets/img/longLake/Groceries.png'>&nbsp;<strong>Groceries</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Ice Cream.png'>&nbsp;<strong>Ice Cream</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Library.png'>&nbsp;<strong>Library</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Lodging.png'>&nbsp;<strong>Lodging</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Post Office.png'>&nbsp;<strong>Post Office</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Repairs.png'>&nbsp;<strong>Repairs</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/School.png'>&nbsp;<strong>School</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Skating Rink.png'>&nbsp;<strong>Skating Rink</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Snack Bar.png'>&nbsp;<strong>Snack Bar</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Soccer Field.png'>&nbsp;<strong>Soccer Field</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Specialty Shop.png'>&nbsp;<strong>Specialty Shop</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Tennis Courts.png'>&nbsp;<strong>Tennis Courts</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Town Facility.png'>&nbsp;<strong>Town Facility</strong></p>
                    <p><img height='25' width='22' src='assets/img/longLake/Trailhead.png'>&nbsp;<strong>Trail Head</strong>
                    </p>
                  </div>
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

<?php include_once("../php/adkwebmaps/coreJS.php"); ?>

    <!-- LAYERS -->
        <script type="text/javascript" src="assets/js/overlays.js"></script>
        <script type="text/javascript" src="assets/js/icons.js"></script>
        <script type="text/javascript" src="assets/js/blueline.js"></script>
        <script type="text/javascript" src="assets/js/longLakeMap.js"></script>
        <?php include_once("../php/frontierspatial.com/analytics.php"); ?>
  </body>
</html>
