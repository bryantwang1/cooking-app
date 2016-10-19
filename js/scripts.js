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
    $(".output").text(gallon + " gallon(s) is/are " + result + " liter(s).")
  });

  $("form#literToGallon").submit(function(event){
    event.preventDefault();

    var liter = parseInt($("input#liter1").val());

    result = literToGallon(liter);
    $(".output").text(liter + " liter(s) is/are " + result + " gallon(s).")
  });

  $("form#cupToLiter").submit(function(event){
    event.preventDefault();

    var cup = parseInt($("input#cup").val());

    result = cupToLiter(cup);
    $(".output").text(cup + " cup(s) is/are " + result + " liter(s).")
  });

  $("form#literToCup").submit(function(event){
    event.preventDefault();

    var liter = parseInt($("input#liter2").val());

    result = literToCup(liter);
    $(".output").text(liter + " liter(s) is/are " + result + " cup(s).")
  });

  $("form#ozToMl").submit(function(event){
    event.preventDefault();

    var floz = parseInt($("input#floz").val());

    result = ozToMl(floz);
    $(".output").text(floz + " fluid ounce(s) is/are " + result + " milliliter(s).")
  });

  $("form#mlToOz").submit(function(event){
    event.preventDefault();

    var milliliter = parseInt($("input#milliliter").val());

    result = mlToOz(milliliter);
    $(".output").text(milliliter + " milliliter(s) is/are " + result + " fluid ounce(s).")
  });
});
