var gallonToLiter = function(gallon) {
  return gallon * 3.785411784;
};

var literToGallon = function(liter) {
  return liter / 3.785411784;
};

var cupToLiter = function(cup) {
  return cup * 0.2365882365;
};

var literToCup = function(liter) {
  return liter / 0.2365882365;
};

var ozToMl = function(oz) {
  return oz * 29.5735296;
};

var mlToOz = function(ml) {
  return ml / 29.5735296;
};



$(function() {
  $("form#gallonToLiter").submit(function(event){
    event.preventDefault();

    var gallon = parseInt($("input#gallon").val());

    result = gallonToLiter(gallon);
    $(".output").text(gallon + " gallon(s) is/are " + result + " liters.")
  });
});
