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
    <title>adkwebmaps</title>
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
        <a class="navbar-brand "  href="index.php" target="_blank_">adkwebmaps</a>
        
      </div>
      <div class="navbar-collapse collapse">
<!--         <form class="navbar-form navbar-right" role="search">
          <div class="form-group has-feedback navbar-right">
              <input id="searchbox" type="text" placeholder="Type here to search" class="form-control">
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

<!-- PAGE CONTENT  -->       
<div class="container">
	<div class="row clearfix">
		<h2>adkwebmaps</h2>
		<p>adkwebmaps is a clearinghouse for interactive maps & data visualizations relating to the Adirondack Park, NY, USA.  Click on the links below to view a map. </p>
		
		<div class="col-md-12 column" style="text-align:center" style="margin-top:20px;">
			<div class="row">
				<div class="col-md-2 ">
					<a href="newcombMap.php"><div class="thumbnail" >
						<img alt="" src="assets/img/newcomb/newcombClusterORIG.png" width="100px"/>
						<div class="caption" >
							<p><b>
								Newcomb, NY Interactive Map
							</b></p>
						</div>
					</div></a>
				</div>

				<div class="col-md-2">
					<a href="ADKmashupMap.php">
					<div class="thumbnail">
						<img alt="" src="assets/img/ADKmashupMapScreenCapture.jpg" width="125px"/>
						<div class="caption" >
							<p><b>
								Adirondack Attractions Mashup
							</b></p>
						</div>
					</div>
					</a>
				</div>
				<div class="col-md-2">
					<a href="hamletViz.php">
					<div class="thumbnail">
						<img alt="" src="assets/img/hamletVizScreenCapture.jpg" width="125px"/>
						<div class="caption" >
							<p><b>
								Hamlets & Recreational Assets Data Visualization
							</b></p>
						</div>
					</div></a>
				</div>
				<div class="col-md-2" >
					<a href="longlakeMap.php">
					<div class="thumbnail">
						<img  alt="" src="assets/img/longLake/LongLakeBearLogo.jpg" width="75px"/>
						<div class="caption" >
							<p><b>
								Long/Raquette Lake, NY Interactive Map
							</b></p>
						</div>
					</div></a>
				</div>
				<div class="col-md-2">
					<a href="hikingMap.php">
					<div class="thumbnail">
						<img alt="" src="assets/img/hikingMapScreenCapture.jpg" width="125px"/>
						<div class="caption" >
							<p><b>
								Hiking & Rock Climbing
							</b></p>
						</div>
					</div></a>
				</div>
				<div class="col-md-2">
					<a href="../npt">
					<div class="thumbnail">
						<img alt="" src="assets/img/npt.jpg" width="125px"/>
						<div class="caption" >
							<p><b>
								Northville-Placid Trail Asset Management System
							</b></p>
						</div>
					</div></a>
				</div>

			</div>
			<div class="row">
				<div class="col-md-2">
					<a href="cellCoverageMap.php">
					<div class="thumbnail">
						<img alt="" src="assets/img/cellCoverageMapScreenCapture.jpg" width="125px"/>
						<div class="caption" >
							<p><b>
								Cellphone Coverage
							</b></p>
						</div>
					</div></a>
				</div>

				
			</div>
	


			</div>

		</div>
	</div>
</div>
    
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
        
        <?php include_once("../php/frontierspatial.com/analytics.php"); ?>
  </body>
</html>
