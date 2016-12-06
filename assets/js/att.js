 var att = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:attCoverage',
  format: 'image/png',
  transparent: true,
  opacity: 0.7,
  zIndex: 100
});   