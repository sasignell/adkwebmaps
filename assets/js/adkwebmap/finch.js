var finch = new L.GeoJSON(null, {
                style: function (feature) {
                    if (feature.properties.landclass === "Primitive Area") {
                        return {
                            clickable: false,
                            weight: 4,
                            color: 'deepskyblue',
                            opacity: 1,
                            //dashArray: 8,
                            fill: true,
                            fillOpacity: 0.15
                        };
                    };
                    if (feature.properties.landclass === "Wilderness Area") {
                        return {
                            clickable: false,
                            weight: 5,
                            color: 'greenyellow',
                            opacity: 1,
                            fill: true,
                            fillOpacity: 0.15
                        };
                    };
                    if (feature.properties.landclass === "Wild Forest") {
                        return {
                            
                            clickable: false,
                            weight: 4,
                            //dashArray: 6,
                            color: 'orangered',
                            opacity: 1,
                            fill: true,
                            fillOpacity: 0.15
                        };
                    };
                    if (feature.properties.landclass === "Pending") {
                        return {
                            
                            clickable: false,
                            weight:3,
                            //dashArray: "3,16",
                            color: 'darkgray',
                            opacity: 1,
                            fill: true,
                            fillOpacity: 0.45
                        };
                    };
                },

                onEachFeature: function (feature, layer) {
                    

                    if (feature.properties) {
                        
                        layer.bindPopup(
                            "<strong>Classification:&nbsp;" + feature.properties.landclass ,  {
                            closeButton: false
                        });
                    }

                }
            });


            $.getJSON("data/adkwebmap/finch.geojson", function (data) {
                finch.addData(data);
            });