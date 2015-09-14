$(document).ready(function() {
  $("form#places-been").submit(function(event) {
    event.preventDefault();

    var inputtedLocality = $("input#locality").val();
    var inputtedTimePeriod = $("input.newTimePeriod").val();
    var inputtedLandmark = $("input.newLandmark").val();


    var newPlace = { locality: inputtedLocality, timePeriod: inputtedTimePeriod, landmark: inputtedLandmark };

    $("ul#places").append("<li><span class='place'>" + newPlace.locality + "</span></li>");

    $(".place").last().click(function(){
      $("#show-details").show();
      $("#show-details h2").text(newPlace.locality);
      $(".locality").text(newPlace.locality);
      $(".timePeriod").text(newPlace.timePeriod);
      $(".landmark").text(newPlace.landmark);
    });

    $("input#locality").val("");
    $("input.newTimePeriod").val("");
    $("input.newLandmark").val("");

  });
});
