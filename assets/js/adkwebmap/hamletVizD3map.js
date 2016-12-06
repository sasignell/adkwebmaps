//Projections, bounds, geopaths, etc.

    mapsvg = d3.select(map.getPanes().overlayPane).append("svg"),
    mapg = mapsvg.append("g").attr("class", "leaflet-zoom-hide");


    function project(x) {
      var point = map.latLngToLayerPoint(new L.LatLng(x[1], x[0]));
      return [point.x, point.y];
    }
    var path = d3.geo.path().projection(project);

    var bounds = d3.geo.bounds(json),
        bottomLeft = project(bounds[0]),
        topRight = project(bounds[1]);

//Hamlet Buffers
    var feature = mapg.selectAll(".buffer")
        .data(json.features)
        .enter()
        .append("path")
        .attr("class", "buffer")
        .style("stroke-dasharray", ("3, 3"))//.attr("class", "flow")
        .style("stroke", "peru")
        
        .style("stroke-width",1)
        .style("stroke-opacity", 0.8)
        .style("fill-opacity",0.0)
        .attr("d", path);

//Hamlets, with color scaling

    var circles = mapg.selectAll(".hamlet")
    .data(json.features)
    .enter()
    .append("svg:circle")
    .attr("class","hamlet")
    .attr("cx", function(d){
        return path.centroid(d)[0];
    })
    .attr("cy", function(d){
        return  path.centroid(d)[1];
    })
    .attr("r", 10)
  .style("stroke-dasharray", ("3, 3"))//.attr("class", "flow")
        .style("stroke", "peru")
        
        .style("stroke-width",1)
        .style("fill-opacity",0.75)
        .style("fill", function(d) {
            return color(d.properties[value]) || "#ccc";
        })
        .attr("d", path)
        .call(maptooltip);


/*    var labels = mapg.selectAll("text")
    .data(json.features)
    .enter()
    .append("text")
    .text(function(d){
        return d.properties.hamlet;
    })
    .attr("x", function(d){
        return path.centroid(d)[0];
    })
    .attr("y", function(d){
        return  path.centroid(d)[1];
    })
    .attr("text-anchor","middle")
    .attr('font-size','6pt');*/

        map.on("viewreset", reset);
        reset();

        // Reposition the SVG to cover the features.
        function reset() {
          var bottomLeft = project(bounds[0]),
              topRight = project(bounds[1]);

        mapsvg .attr("width", topRight[0] - bottomLeft[0])
            .attr("height", bottomLeft[1] - topRight[1])
            .style("margin-left", bottomLeft[0] + "px")
            .style("margin-top", topRight[1] + "px");

        mapg   .attr("transform", "translate(" + -bottomLeft[0] + "," + -topRight[1] + ")");

        //feature.attr("d", path);
        circles.attr("cx", function(d){
          return path.centroid(d)[0];
      })
      .attr("cy", function(d){
          return  path.centroid(d)[1];
      });

      feature.attr("d", path)
/*        labels.attr("x", function(d){
          return path.centroid(d)[0];
      })
      .attr("y", function(d){
          return  path.centroid(d)[1];
      });*/
        }
      });





//update data from combobox onChange
function update(value) {
  d3.select("#sortcheck").property("checked", false)
  
  color.domain(d3.extent(json.features,
      function(d) { return d.properties[value]; }));

    y.domain(json.features.sort( function(a, b) { return d3.ascending(a.properties.hamlet, b.properties.hamlet); }));

    x.domain(d3.extent(json.features,
      function(d) { return d.properties[value]; })).nice();

    svg.selectAll(".bar").data(json.features)
      .transition().duration(duration)
      .style("fill", function(d) {
          return color(d.properties[value]) || "#ccc";
      })
      //.attr("x", function(d) { return x(d.properties[value]); })
      .attr("width", function(d) {
          return  x(d.properties[value]);
    });

  svg.select("g.x").transition().duration(duration).call(xAxis);

    mapg.selectAll("circle")
      .data(json.features)
      .call(maptooltip)
      .transition().duration(duration)
      .style("fill", function(d) {
          return color(d.properties[value]) || "#ccc";
    });
    

    d3.select("#sortcheck").on("change", change2);  
  
  function change2() {
  // Copy-on-write since tweens are evaluated after a delay.
  var y0 = y.domain(json.features.sort(this.checked
      ? function(a, b) { return b.properties[value] - a.properties[value]; }
      : function(a, b) { return d3.ascending(a.properties.hamlet, b.properties.hamlet); })
      .map(function(d) { return d.properties.hamlet; }))
      .copy();

  var transition = svg.transition().duration(750),
      delay = function(d, i) { return i * 50; };

  transition.selectAll(".bar")
      .delay(delay)
      .attr("y", function(d) { return y0(d.properties.hamlet); });

  transition.select(".y.axis")
      .call(yAxis)
    .selectAll("g")
      .delay(delay);
}
}

