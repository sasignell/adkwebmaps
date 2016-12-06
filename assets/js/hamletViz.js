    
            var map, leantoSearch=[], parkingSearch=[],campsiteSearch=[];

            map = L.map("map", {
                zoom: 8,
                center: [43.92, -74.],minZoom: 6,
                maxZoom: 17,
                layers: [ARGISblueline ],
                zoomControl: false
    
            });
            topo.addTo(map);
            map.attributionControl.setPrefix('Website by <a href="http://frontierspatial.com" target="_blank">Frontier Spatial | </a>Bootleaf template by <a href="http://bryanmcbride.com" target="_blank">Bryan McBride</a>');
            // Larger screens get expanded layer control
            if (document.body.clientWidth <= 767) {
                var isCollapsed = true;
            } else {
                var isCollapsed = false;
            };




            var baseLayers = {
                "Streets": mapquestOSM,
                "Terrain": topo,     
                "Imagery": mapquestHYB
            };

            var overlays = {
                "<img src='assets/img/leanto.png' width='18' height='21'>&nbsp;Lean-to": leantoCluster,
                "<img src='assets/img/campsite.png' width='18' height='21'>&nbsp;Primitive Campsite": campsiteCluster,
                "<img src='assets/img/slt.png' width='18' height='21'>&nbsp;Hiking Trail": slt,
                "<img src='assets/img/snowmobilesolid.png' width='18' height='21'>&nbsp;Snowmobile Trail": adksnowmobile,
                "APA Land Classes<br><img class='hidden-xs' src='assets/img/apaLandClassLegend.jpg'>": apaLandClass

                
            };

            L.control.zoom({position: 'topleft'
            }).addTo(map);

            L.control.locate({position: 'topleft'
            }).addTo(map);

        
            var layerControl = L.control.layers(baseLayers, overlays, {
                position: 'topright',
                collapsed: isCollapsed
            }).addTo(map);

/*            var sidebar = L.control.sidebar("sidebar", {
                closeButton: true,
                position: "left"
            }).addTo(map);

            sidebar.show();*/
            // Highlight search box text on click
            $("#searchbox").click(function () {
                $(this).select();
            });

            // Typeahead search functionality
         $(document).one("ajaxStop", function () {
                $("#loading").hide();
   
                
            });

