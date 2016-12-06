// TILE Layers

/*var waCoMapBox = L.mapbox.tileLayer("http://a.tiles.mapbox.com/v3/paulggerard.hepk65nb");*/

 var att = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:att',
  format: 'image/png',
  transparent: true,
  opacity: 0.7,
  zIndex: 100
});  

var verizon = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:verizon',
  format: 'image/png',
  transparent: true,
  opacity: 0.3,
  zIndex: 100
});   

var apaLandClass =  L.esri.tiledMapLayer("http://tiles1.arcgis.com/tiles/8krRUWgifzA4cgL3/arcgis/rest/services/Adirondack_Park_State_and_Private_Land_Class_Features_withAnno/MapServer", {
  opacity: 0.50,
  zIndex:0,
  attribution: 'Land Class map courtesy of <a href="http://tiles.arcgis.com/tiles/8krRUWgifzA4cgL3/arcgis/rest/services/Adirondack_Park_State_and_Private_Land_Class_Features_withAnno/MapServer">NYS Adirondack Park Agency</a>'
});

var topo = new L.TileLayer("http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png", {
    maxZoom: 19,
    attribution: 'Basemap Courtesy of <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ESRI</a>'
  });

var mapquestOSM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
    maxZoom: 19,
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});
var mapquestOAM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
    maxZoom: 18,
    subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
    attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
});

var nysdop = new L.TileLayer("http://www.orthos.dhses.ny.gov/ArcGIS/rest/services/2009/MapServer/tile/{z}/{y}/{x}.png", {
    maxZoom: 19,
    attribution: 'Imagery courtesy of <a href="http://www.orthos.dhses.ny.gov/" target="_blank">NYS DHSES</a>'
});

var mapquestHYB = L.layerGroup([L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
    maxZoom: 18,
    subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"]
}), L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png", {
    maxZoom: 19,
    subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
    attribution: 'Labels courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors. '
})]);

// WMSOverlay Layers
////SNOWMOBILE TRAILS

var adksnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:adksnowmobiletrails',
  format: 'image/png',
  transparent: true,
  zIndex:2

});
var nysnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
  layers: 'longlake:nyminusllsnowmb',
  format: 'image/png',
  transparent: true,
  zIndex:2

});

var llsnowmobile = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/longlake/wms", {
  layers: 'longlake:snowmobiletrails',
  format: 'image/png',
  transparent: true,
  zIndex:2

});

var slt = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/ny/wms", {
  layers: 'ny:dec_hiking',
  format: 'image/png',
  transparent: true,
  zIndex:2

});

var slt_edits = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:dec_roads_trails_edits',
  format: 'image/png',
  transparent: true,
  zIndex:2

});

var ARGISblueline = new L.TileLayer.WMS("http://aprgis.org:8080/geoserver/argis/wms", {
  layers: 'argis:blueline',
  format: 'image/png',
  transparent: true,
  zIndex:2

});

var publicLand = new L.TileLayer.WMS("http://aprgis.org:8080/geoserver/argis/wms", {
  layers: 'argis:publicland',
  format: 'image/png',
  transparent: true,

});

var leantoWMS = new L.TileLayer.WMS("http://aprgis.org:8080/geoserver/argis/wms", {
  layers: 'argis:leantos',
  format: 'image/png',
  transparent: true,
  zIndex:2

});

var adkContours = new L.tileLayer(
    'https://api.mapbox.com/styles/v1/frontierspatial/civduc18e007w2imoy69vpgis/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJvbnRpZXJzcGF0aWFsIiwiYSI6InRtR1IxUVUifQ.puOgx3mlZrcsVdN2mpPU2A', {
        tileSize: 512,
        zoomOffset: -1,
        zIndex: -10,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.adirondackatlas.org">Adirondack Atlas</a>'
    }); 
var  adkSatelliteLabels = new L.tileLayer(
    'https://api.mapbox.com/styles/v1/frontierspatial/civshd25r00052kqup9fivt7m/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJvbnRpZXJzcGF0aWFsIiwiYSI6InRtR1IxUVUifQ.puOgx3mlZrcsVdN2mpPU2A', {
        tileSize: 512,
        zoomOffset: -1,
        zIndex: -10,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.adirondackatlas.org">Adirondack Atlas</a>'
    }); 
var adkSatellite =  new L.tileLayer(
    'https://api.mapbox.com/styles/v1/frontierspatial/cinpyr24h005gc3mb2rhpxltj/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJvbnRpZXJzcGF0aWFsIiwiYSI6InRtR1IxUVUifQ.puOgx3mlZrcsVdN2mpPU2A', {
        tileSize: 512,
        zoomOffset: -1,
        zIndex: -10,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.adirondackatlas.org">Adirondack Atlas</a>'
    }); 

