 var verizon = new L.TileLayer.WMS("http://frontierspatial.com:8080/geoserver/adk/wms", {
  layers: 'adk:verizon',
  format: 'image/png',
  transparent: true,
  opacity: 0.3,
  zIndex: 100
});   