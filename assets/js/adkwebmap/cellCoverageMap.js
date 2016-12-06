var map, placeSearch = [], summitSearch = [];

map = L.map("map", {
                zoom: 8,
                center: [43.9504005, -74.283802],minZoom: 6,
                maxZoom: 16,
                layers: [att,blueline]
    
            });
mapquestOSM.addTo(map);

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
    "AT&T": att,
    "Verizon": verizon            
};

var layerControl = L.control.layers(baseLayers, overlays, {
    collapsed: isCollapsed
}).addTo(map);

/*            var sidebar = L.control.sidebar("sidebar", {
    closeButton: true,
    position: "left"
}).addTo(map);
*/
  L.control.locate().addTo(map);

// Highlight search box text on click
$("#searchbox").click(function () {
    $(this).select();
});

// Typeahead search functionality
$(document).one("ajaxStop", function () {
    $("#loading").hide();

    var placeBH = new Bloodhound({
        name: "place",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: placeSearch,
        limit: 10
    });

    var summitBH = new Bloodhound({
        name: "summit",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: summitSearch,
        limit: 10
    });

    placeBH.initialize();
    summitBH.initialize();
    

    // instantiate the typeahead UI
    $("#searchbox").typeahead({
        minLength: 3,
        highlight: true,
        hint: false
    }, {
        name: "place",
        displayKey: "name",
        source: placeBH.ttAdapter(),
        templates: {
            header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/place.png' width='18' height='21'>&nbsp;Place</h4>"
        }
    }, {
        name: "summit",
        displayKey: "name",
        source: summitBH.ttAdapter(),
        templates: {
            header: "<h4 class='typeahead-header'><img src='assets/img/adkwebmap/summit.png' width='18' height='21'>&nbsp;Summit</h4>"
        }
    }).on("typeahead:selected", function (obj, datum) {
        if (datum.source === "place") {
            map.setView([datum.lat, datum.lng], 13);
        };
        if (datum.source === "summit") {
            map.setView([datum.lat, datum.lng], 13);
        };
        
        if ($(".navbar-collapse").height() > 50) {
            $(".navbar-collapse").collapse("hide");
        };
    }).on("typeahead:opened", function () {
        $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
        $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
    }).on("typeahead:closed", function () {
        $(".navbar-collapse.in").css("max-height", "");
        $(".navbar-collapse.in").css("height", "");
    });
    $(".twitter-typeahead").css("position", "static");
    $(".twitter-typeahead").css("display", "block");
});

