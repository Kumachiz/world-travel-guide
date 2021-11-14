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
  event.preventDefault();

});
});