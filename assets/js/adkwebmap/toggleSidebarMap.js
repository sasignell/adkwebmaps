<script>

		$(document).ready(function() {
        $("[rel=tooltip]").tooltip();
        if (document.body.clientWidth <= 767) {
            $("#map").css("class", "col-sm-12 col-lg-12");
            $("#sidebar").css("display", "none");
        };
    });
    $(window).resize(function() {
        $(".tt-dropdown-menu").css("max-height", $("#container").height()-$(".navbar").height()-20);
        if (document.body.clientWidth <= 767) {
            $("#map").css("class", "col-sm-12 col-lg-12");
            $("#sidebar").css("display", "none");
        } else {
            $("#map").css("class", "col-sm-9 col-lg-9");
            $("#sidebar").css("display", "block");
        };
    });

    $("#toggle").click(function() {
        $("#toggle i").toggleClass("fa fa-check-square-o fa fa-globe");
        $("#map").toggleClass("col-sm-9 col-lg-9 col-sm-12 col-lg-12");
        $("#sidebar").toggle();
        if (document.body.clientWidth <= 767) {
            $("#map").toggle();
        };
        map.invalidateSize();
        return false;
    });
    // Placeholder hack for IE
    if (navigator.appName == "Microsoft Internet Explorer") {
        $("input").each( function () {
            if ($(this).val() == "" && $(this).attr("placeholder") != "") {
                $(this).val($(this).attr("placeholder"));
                $(this).focus(function () {
                    if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
                });
                $(this).blur(function () {
                    if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
                });
            }
        });
    }
</script>