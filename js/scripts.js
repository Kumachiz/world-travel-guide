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

const toggleColourModeBtn = document.getElementById("colourModeBtn");
const currentColourMode = localStorage.getItem("colourMode");
const sysIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

getSavedColourMode(currentColourMode);
getColourModeBtnText(currentColourMode, sysIsDark);

toggleColourModeBtn.addEventListener("click", function () {
    toggleColourMode(sysIsDark);
    setAndSaveColourMode();
});

function getSavedColourMode(savedMode) {
    if (localStorage.getItem("overRideSysColour") == "true") {
        document.body.classList.remove('systemDarkPreference');
        document.body.classList.toggle(savedMode);
    }
}

function getColourModeBtnText(mode, currentSysIsDark) {
    if((mode == "dark") || (currentSysIsDark && mode != "light")){
        assignColourModeBtnTextLight();
    } else {
        assignColourModeBtnTextDark();
    }
}

function toggleColourMode(currentSysIsDark) {
    const hasSystemDarkClass = document.body.classList.contains('systemDarkPreference');
    const isDark = (hasSystemDarkClass && currentSysIsDark) || document.body.classList.contains('dark');

    document.body.classList.remove('systemDarkPreference');
    document.body.classList.toggle('dark', !isDark);
}

function setAndSaveColourMode() {
    let colourMode;
    if (document.body.classList.contains("dark")) {
        colourMode = "dark";
        assignColourModeBtnTextLight();
    } else {
        colourMode = "light";
        assignColourModeBtnTextDark();
    }
    localStorage.setItem("colourMode", colourMode);
    localStorage.setItem("overRideSysColour", "true")
}

function assignColourModeBtnTextLight() {
    toggleColourModeBtn.innerText = "Go Light 🌞"
}

function assignColourModeBtnTextDark() {
    toggleColourModeBtn.innerText = "Go Dark 🌚"
}
