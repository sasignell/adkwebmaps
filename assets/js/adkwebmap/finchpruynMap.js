    
            var map, leantoSearch=[], parkingSearch=[],campsiteSearch=[];

            map = L.map("map", {
                zoom: 11,
                center: [43.87, -74.18],minZoom: 6,
                maxZoom: 17,
                layers: [mapquestHYB,finch, slt,adksnowmobile,blueline ]
    
            });


            map.attributionControl.setPrefix('Website by <a href="http://frontierspatial.com" target="_blank">Frontier Spatial | </a>Bootleaf template by <a href="http://bryanmcbride.com" target="_blank">Bryan McBride</a>');
            // Larger screens get expanded layer control
            if (document.body.clientWidth <= 767) {
                var isCollapsed = true;
            } else {
                var isCollapsed = false;
            };

            var baseLayers = {
                "Terrain": mapquestOSM,
                "Imagery": mapquestHYB,
                "Imagery, no labels": mapquestOAM
            };

            var overlays = {
                "<img src='assets/img/adkwebmap/leanto.png' width='18' height='21'>&nbsp;Lean-to": leantoCluster,
                "<img src='assets/img/adkwebmap/campsite.png' width='18' height='21'>&nbsp;Primitive Campsite": campsiteCluster,
                "<img src='assets/img/adkwebmap/parking.png' width='18' height='21'>&nbsp;Parking Area": parkingCluster,
                "<img src='assets/img/adkwebmap/slt.png' width='18' height='21'>&nbsp;Hiking Trail": slt,
                "<img src='assets/img/adkwebmap/snowmobilesolid.png' width='18' height='21'>&nbsp;Snowmobile Trail": adksnowmobile,
                "<img src='assets/img/adkwebmap/blueline.png' width='18' height='21'>&nbsp;Park Boundary": blueline,
                "<strong>APA Land Classification</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/adkwebmap/wilderness.png'>&nbsp;<strong>Wilderness</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/adkwebmap/wildforest.png'>&nbsp;<strong>Wild Forest</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/adkwebmap/primitive.png'>&nbsp;<strong>Primitive</strong></br>&nbsp;&nbsp;&nbsp;&nbsp;<img height='21' width='18' src='assets/img/adkwebmap/pending.png'>&nbsp;<strong>Pending</strong>":finch,

                "Public Land": publicLand

                
            };
            L.control.locate().addTo(map);
            
            var layerControl = L.control.layers(baseLayers, overlays, {
                collapsed: isCollapsed
            }).addTo(map);

/*            var sidebar = L.control.sidebar("sidebar", {
                closeButton: true,
                position: "left"
            }).addTo(map);
*/
            // Highlight search box text on click
            $("#searchbox").click(function () {
                $(this).select();
            });

            // Typeahead search functionality
         $(document).one("ajaxStop", function () {
                $("#loading").hide();
   
                
            });

