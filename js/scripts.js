$(document).ready(function() {
  $("form#interests").submit(function(event) {
    $("#Africa_text").hide();
    $("#Europe_text").hide();
    $("#America_text").hide();
    $("#Sorry_text").hide();
    var continent = $("input:radio[name=continent]:checked").val();

    if (continent === 'Africa'){
      $("#Africa_text").show();
    }
    else if (continent === 'Europe'){
      $("#Europe_text").show();
    }
    else if (continent === 'America'){
      $("#America_text").show();
    }
    else
      $("#Sorry_text").show();
    // var weather = $("input:radio[name=weather]:checked").val();
    // var type = $("input:radio[name=type]:checked").val();
    // var transportation = $("input:radio[name=transportation]:checked").val();
    // var price = $("input:radio[name=price]:checked").val();
    //
    // if (continent === 'Africa' && "weather" === 'Dry' && "price" === 'Affordable' && "type" === 'Nature' && "transportation" === 'Boat' || 'Plane'){
    //   $("#Africa_text").show();
    // }
    // else if (continent === 'Europe' && "weather" === 'Humid' && "type" === 'History' && "price" === 'Expensive' && "transportation" === 'Boat' || 'Plane'){
    //   $("#Europe_text").show();
    // }
    // else if (continent === 'America' && "weather" === 'Dry' || 'Humid' && "type" === 'Fun' && "price" === 'Expensive' && "transportation" === 'Plane' || 'Car'){
    //   $("#America_text").show();
  event.preventDefault();


});
});
