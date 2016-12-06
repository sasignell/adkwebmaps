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
        <title>Cellphone Coverage Map | adkwebmaps</title>

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
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Cell Coverage</a>
            </div>
            <div class="navbar-collapse collapse">
                <form class="navbar-form navbar-right" role="search">
                    <div class="form-group has-feedback navbar-right">
                        <input id="searchbox" type="text" placeholder="Search towns & summits" class="form-control">
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
                     <li class="dropdown">
                        <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-wrench" style="color: white"></i>&nbsp;&nbsp;Tools <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" onclick="map.fitBounds(blueline.getBounds()); return false;"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom To Full Extent</a></li>
                        </ul> 
                    </li>
                    <li><a href="#cellCoverageAboutModal" data-toggle="modal"><i class="fa fa-info-circle" style="color: white"></i>&nbsp;&nbsp;About</a></li>
                    <!-- <li><a href="#helpModal" data-toggle="modal"><i class="fa fa-question-circle" style="color: white"></i>&nbsp;&nbsp;Help</a></li> -->
                   
               
                </ul>
            </div><!--/.navbar-collapse -->
        </div>

        <div id="map"></div>

        <div id="loading" style="display:block;">
            <div class="loading-indicator">
                <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-info" style="width: 100%"></div>
                </div>
            </div>
        </div>
<!-- CELL COVERAGE ABOUT MODAL -->

        <div class="modal fade" id="cellCoverageAboutModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Cellphone Coverage Map</h4>
                    </div>

                    <div class="modal-body">
                         <div class="panel-group">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_" href="#about-thismap">
                                        About this map
                                    </a>
                                </div>
                                <div id="about-thismap" class="panel-collapse collapse in">
                                    <div class="panel-body" style="padding: 0px 15px;">
                                        <h5><b>Cellphone Coverage in the Adirondack Park</b></h5>
                                        <p>Many areas in the Adirondack Park do not have cell service.  Use this map to see where your phone (and adkwebmap.com!) will work.   </p>

                                    </div>
                                </div>
                            </div>


                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion_" href="#data-sources">
                                        Data Sources
                                    </a>
                                </div>
                                <div id="data-sources" class="panel-collapse collapse">
                                    <div class="panel-body" style="padding: 0px 15px;">
                                       <p>Maps created by georeferencing screenshots taken from phone company websites.  Last Updated: 2/3/2014 </p><h5><b><a href="http://www.att.com" target="_blank_">AT&T</a></b>  </h5>
                                       <p><a href="http://www.att.com/maps/wireless-coverage.html#fbid=35-efmT32Pp" target="_blank_">Data Link</a></p>
                                       <hr>
                                       <h5><b><a href="http://verizonwireless.com" target="_blank_">Verizon Wireless </b></a></h5>
                                       <p><a href="http://vzwmap.verizonwireless.com/dotcom/coveragelocator/default.aspx?requestfrom=webagent" target="_blank_">Data Link</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>

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
        <script type="text/javascript" src="assets/js/summit.js"></script>
        <script type="text/javascript" src="assets/js/places.js"></script>       
        <script type="text/javascript" src="assets/js/blueline.js"></script>
        <script type="text/javascript" src="assets/js/cellCoverageMap.js"></script>
   <?php include_once("../php/frontierspatial.com/analytics.php"); ?>
    </body>
</html>