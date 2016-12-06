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
        <title>adkwebmaps</title>

<!-- CORE CSS -->
<?php include("../php/adkwebmaps/coreCSS.php"); ?>
        
        <link href="assets/css/sidebar.css" rel="stylesheet" type="text/css">
        <link href="assets/css/main.css" rel="stylesheet" type="text/css">
        <link href="assets/css/hamletViz.css" rel="stylesheet" type="text/css">
        

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
        <a class="navbar-brand visible-xs" style="font-size:0.95em;" href="http://newcombny.com" target="_blank_">Hamlets Viz</a>
        <a class="navbar-brand hidden-xs" href="http://newcombny.com" target="_blank_" >Hamlets & Recreational Assets</a>
      </div>
      <div class="navbar-collapse collapse">
<!--         <form class="navbar-form navbar-right" role="search">
          <div class="form-group has-feedback navbar-right">
              <input id="searchbox" type="text" placeholder="Search" class="form-control">
              <span id="searchicon" class="fa fa-search form-control-feedback"></span>
          </div>
        </form> -->
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
        </ul>
      </div><!--/.navbar-collapse -->
    </div>


    <div class="row" id="container">
        <div class="col-sm-4 col-lg-4" id="sidebar" style="padding: 10px; overflow: auto;">
            <!-- <div class="input-group well well-sm" style="margin-bottom: 10px;">
                <input id="searchbox" type="text" class="form-control" placeholder="Search">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
            </div> -->
<!-- Tabs    -->         
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="tabbable" id="tabs-335898">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#hamlets" data-toggle="tab">Hamlets</a>
                            </li>
                            <li class="">
                                <a href="#townships" data-toggle="tab">Townships</a>
                            </li>
                            <li>
                                <a href="#watersheds" data-toggle="tab">Watersheds</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="hamlets">
                                <div >
                                    <div id="control"> 
                                        <select type='select' onchange='update(value);' >
                                           <option value='percentpublic' name='percentpublic' selected='true' >Percent Public Land</option>
                                           <option value='wilderness' name='wilderness'  >Percent Wilderness</option>
                                           <option value='wildforest' name='wildforest'>Percent Wild Forest</option>
                                           <option value='water' name='water'>Percent Water</option>
                                           <option value='snowmb' name='snowmb'>Snowmobile Trails (mi.)</option>
                                           <option value='hiking' name='hiking'>Hiking Trails (mi.)</option>

                                           <option value='bike' name='bike'>Biking Trails (mi.)</option>
                                           <option value='horse' name='horse'>Horse Trails (mi.)</option>
                                           <option value='leanto' name='leanto'>Lean-tos</option>
                                           <br>
                                        </select>
                                        <label ><input type="checkbox" id="sortcheck" style="margin-left:15px; font-size:16px;"> Sort</label>
                                    </div>                        
                                    <div id="chart"></div>
                                    <!-- <table id="wstation-list" class='table table-striped table-bordered table-condensed'>
                                    </table> -->
                                </div> 
                            </div>
                            <div class="tab-pane " id="townships">
                                <div ><h4>In development...</h4>
                                    <table id="gage-list" class='table table-striped table-bordered table-condensed'>
                                    </table>
                                </div> 
                            </div>
                            <div class="tab-pane" id="watersheds">
                                <div><h4>In development...</h4>
                                </br>
                                    <table id="county-list" class='table table-striped table-bordered table-condensed'>
                                    </table>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-8 col-lg-8" id="map">
            <div id="loading" style="display: block;">
                <div class="loading-indicator">
                    <div class="progress progress-striped active">
                        <div class="progress-bar progress-bar-info" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- HAMLETS ABOUT MODAL -->

        <div class="modal fade" id="aboutModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Hamlets & the Distribution of Public Recreational Assets</h4>
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
                                        <h5><b>Adirondack Hamlets and the Distribution of Public Recreational Assets</b></h5>
                                        <p>Conversations about public land in the Adirondack Park invariably include debate over the proper ratio of public vs. private lands.  Some claim there is already more than enough public land, while others say there can never be too much.    </p>
                                        <p>We wanted to see how public lands and recreational assets like trails and lean-tos were actually distributed among the hamlets within the park.  We summarized various statistics within a 10-mile buffer around each hamlet in the park, excluding those whose buffer went outside the park boundary.  </p>
                                        <p>Use the drop down menu to toggle between variables and see the values change. </p>
                                        <p> <b>Note: these results are representative of what's in the data, not necessarily what exists in reality!</b></p>

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
                                       <h5><b><a href="http://apa.ny.gov" target="_blank_">NYS Adirondack Park Agency</a></b>  </h5>
                                       <ul>
                                            <li>Park Boundary</li>
                                            <li>Public Land </li>
                                            <li>Hamlets</li>
                                        </ul>

                                       <p><a href="http://apa.ny.gov/gis/index.html" target="_blank_">Data Link</a></p>
                                       <hr>
                                       <h5><b><a href="http://dec.ny.gov" target="_blank_">NYS Department of Environmental Conservation </b></a></h5>
                                           <ul>
                                                <li>Lean-tos</li>
                                                <li>Campsites </li>
                                                <li>Hiking Trails</li>
                                            </ul>

                                       <p><a href="http://aprgis.org/argis" target="_blank_">Data Link</a></p>
                                       <hr>
                                       <h5><b><a href="http://nysparks.com" target="_blank_">NYS Office of Parks, Recreation & Historic Preservation </b></a></h5>
                                           <ul>
                                                <li>Snowmobile Trails</li>
                                            </ul>

                                       <p><a href="https://gis.ny.gov/gisdata/inventories/details.cfm?DSID=427" target="_blank_">Data Link</a></p>
                                       <hr>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

<!--     <div class="row" id="container">

        <div id="sidebar" "col-sm-4 col-lg-4">
            <h4 style="padding-bottom: 3px;"><b>Hamlets & Public Recreational Assets</b></h4>
                
            <div id="control"> 
                <select type='select' onchange='update(value);' >
                   <option value='percentpublic' name='percentpublic' selected='true' >Percent Public Land</option>
                   <option value='wilderness' name='wilderness'  >Percent Wilderness</option>
                   <option value='wildforest' name='wildforest'>Percent Wild Forest</option>
                   <option value='water' name='water'>Percent Water</option>
                   <option value='snowmb' name='snowmb'>Snowmobile Trails (mi.)</option>
                   <option value='hiking' name='hiking'>Hiking Trails (mi.)</option>

                   <option value='bike' name='bike'>Biking Trails (mi.)</option>
                   <option value='horse' name='horse'>Horse Trails (mi.)</option>
                   <option value='leanto' name='leanto'>Lean-tos</option>
                   <br>
                </select>
                <label ><input type="checkbox" id="sortcheck" style="margin-left:15px; font-size:16px;"> Sort</label>
            </div>                        
            <div id="chart"></div>
        </div>
        <div class="col-sm-8 col-lg-8" id="map">
            <div id="loading" style="display: block;">
                <div class="loading-indicator">
                    <div class="progress progress-striped active">
                        <div class="progress-bar progress-bar-info" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>
</div>


    </div> -->
<!--         <div id="map"></div>

        <div id="sidebar">
            <h4 style="padding-bottom: 3px;"><b>List of Counties goes here...</b></h4> 
            <div id="list"></div>              
        </div> -->









<!-- CORE JS -->
<?php include("../php/adkwebmaps/coreJS.php"); ?>
        <script src="http://d3js.org/topojson.v1.min.js"></script>
        <script src="lib//colorbrewer/colorbrewer.js"></script>
        <script src="lib/d3.v3/d3.v3.js"></script>
        
        <script src="lib/esri-leaflet.js" type="text/javascript"></script>
        <script type="text/javascript" src="assets/js/overlays.js"></script>
        <script type="text/javascript" src="assets/js/icons.js"></script>
        <script type="text/javascript" src="assets/js/leanto.js"></script>
        <script type="text/javascript" src="assets/js/parking.js"></script>
        <script type="text/javascript" src="assets/js/campsite.js"></script>
        <script type="text/javascript" src="assets/js/hamletViz.js"></script>
        <script type="text/javascript" src="assets/js/hamletVizD3.js"></script>
<?php include_once("../php/frontierspatial.com/analytics.php"); ?>


    </body>
</html>