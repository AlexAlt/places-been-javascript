$(document).ready(function() {
  $("#add-landmark").click(function(){
    $("#newLandmarks").append(
                  '<div class="form-group new-landmark">' +
                    '<label for="newLandmark">Landmarks</label>'+
                    '<input type="text" class="form-control newLandmark">'+
                  '</div>');
  });

  $("form#places-been").submit(function(event) {
    event.preventDefault();

    var inputtedLocality = $("input#locality").val();
    var inputtedTimePeriod = $("input.newTimePeriod").val();

    var newPlace = { locality: inputtedLocality, timePeriod: inputtedTimePeriod, landmarks: [] };

    $(".new-landmark").each(function() {
      var inputtedLandmark = $(this).find("input.newLandmark").val();

      var newLandmark = { title: inputtedLandmark };
      newPlace.landmarks.push(newLandmark);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.locality + "</span></li>");

    $(".place").last().click(function(){
      $("#show-details").show();
      $("#show-details h2").text(newPlace.locality);
      $(".locality").text(newPlace.locality);
      $(".timePeriod").text(newPlace.timePeriod);

      $("ul.landmark").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $("ul.landmark").append("<li>" + landmark.title + "</li>");
      });
    });

    $("input#locality").val("");
    $("input.newTimePeriod").val("");
    $("input.newLandmark").val("");

  });
});
