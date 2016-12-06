<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Hiking & Climbing Map | adkwebmaps</title>

<!-- CORE CSS -->
<?php include("../php/adkwebmaps/coreCSS.php"); ?>

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

  <body>
  
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"style="color:white;">
          Info & Tools
          <!-- <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span> -->
        </button>
        <a class="navbar-brand visible-xs" style="font-size:0.9em;" href="http://newcombny.com" target="_blank_">Hiking & Climbing</a>
        <a class="navbar-brand hidden-xs" href="http://newcombny.com" target="_blank_" >ADK Hiking & Climbing Map</a>
      </div>
      <div class="navbar-collapse collapse">
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group has-feedback navbar-right">
              <input id="searchbox" type="text" placeholder="Type here to search" class="form-control">
              <span id="searchicon" class="fa fa-search form-control-feedback"></span>
          </div>
        </form>
        <ul class="nav navbar-nav">

          <li class="dropdown">  
            <a href="#"  
                  class="dropdown-toggle"  
                  data-toggle="dropdown">  
                  <i class="fa fa-globe" style="color: white" ></i>&nbsp;&nbsp;adkwebmaps  
                  <b class="caret"></b>  
            </a>  
            <ul class="dropdown-menu">  
              <li><a href="index.php">Home</a></li>
              <li><a href="hikingMap.php">Hiking & Climbing</a></li>  
              <li><a href="ADKmashupMap.php">Attractions</a></li>
              <li><a href="longlakeMap.php">Long/Raquette Lake</a></li>  
              <li><a href="newcombMap.php">Newcomb/Finch Purchase</a></li> 
              <li><a href="cellCoverageMap.php">Cell Service</a></li>
              <li><a href="hamletViz.php">Hamlets Visualization</a></li> 
            </ul>  
          </li>
          <li><a href="#aboutModal" data-toggle="modal"><i class="fa fa-question-circle" style="color: white"></i>&nbsp;&nbsp;About</a></li>
          
          <li class="dropdown">
            <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe" style="color: white"></i>&nbsp;&nbsp;Tools<b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(campground.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom to Full Extent</a></li>
              <li><a href="#legendModal" data-toggle="modal"><i class="fa fa-picture-o"></i>&nbsp;&nbsp;Legend</a></li>
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
                      
                      
                      <h3 class="modal-title" ><strong>Adirondack Hiking & Climbing Map</strong></h3>
                </div>

                <div class="modal-body">
                     
                      
                      <p>This application was developed for those interested in hiking or rock climbing in the Adirondack Park, NY.</p>
                      <br>

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
                    
                  </div>
                 </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


<!-- CORE JS -->
<?php include("../php/adkwebmaps/coreJS.php"); ?>
        
<!-- LAYERS -->
        <script type="text/javascript" src="assets/js/overlays.js"></script>
        <script type="text/javascript" src="assets/js/icons.js"></script>

        <script type="text/javascript" src="assets/js/adktrailPts.js"></script>
        <script type="text/javascript" src="assets/js/summit.js"></script>
        <script type="text/javascript" src="assets/js/places.js"></script>
        <script type="text/javascript" src="assets/js/leanto.js"></script>
        <script type="text/javascript" src="assets/js/hikingCampsite.js"></script>
        <script type="text/javascript" src="assets/js/parking.js"></script>
        <script type="text/javascript" src="assets/js/campground.js"></script>
        <script type="text/javascript" src="assets/js/cliffs.js"></script>
        <script type="text/javascript" src="assets/js/hikingMap.js"></script>       
        
   <?php include_once("../php/frontierspatial.com/analytics.php"); ?>
    </body>
</html>