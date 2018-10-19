var ruby = 0;
var css = 0;
var cSharp = 0;
var dont = 0; //it's all about the money
var birb = 0;

$(document).ready(function() {
  $(".tracks").submit(function(event) {
    // First set of data
    var data1 = $("input:radio[name=data1]:checked").val();
    if (data1 === "Ruby") {
      ruby += 1
      }

    if (data1 === "CSS") {
        css += 1
      }

    if (data1 === "C#") {
        cSharp += 1
      }

    if (data1 === "dont") {
          dont += 1
        }
    // Second set of data
    var data2 = $("input:radio[name=data2]:checked").val();
    if (data2 === "Ruby") {
      ruby += 1
      }

    if (data2 === "CSS") {
        css += 1
      }

    if (data2 === "C#") {
        cSharp += 1
      }

    if (data2 === "dont") {
        dont += 1
      }
    //Third set of data
    var data3 = $("input:radio[name=data3]:checked").val();
    if (data3 === "Ruby") {
      ruby += 1
      }

    if (data3 === "CSS") {
        css += 1
      }

    if (data3 === "C#") {
        cSharp += 1
      }

    if (data3 === "dont") {
        dont += 1
      }
    //Fourth set of data
    var data4 = $("input:radio[name=data4]:checked").val();
    if (data4 === "Ruby") {
      ruby += 1
      }

    if (data4 === "CSS") {
        css += 1
      }

    if (data4 === "C#") {
        cSharp += 1
      }

    if (data4 === "dont") {
        dont += 1
      }

    // Easter egg data
    var birbData = $("input:radio[name=birbData]:checked").val();
    if (birbData === "birb") {
      birb += 1
    }

    if (ruby > css && ruby > cSharp && ruby > dont) {
      $("#questions").hide();
      $("#header-content").hide();
      $(".header-text-p").hide();
      $("#ruby").show();
      $("#try-again").show();
    }

    if (css > ruby && css > cSharp && css > dont) {
      $("#questions").hide();
      $("#header-content").hide();
      $(".header-text-p").hide();
      $("#css").show();
      $("#try-again").show();
    }

    if (cSharp > css && cSharp > ruby && cSharp > dont) {
      $("#questions").hide();
      $("#header-content").hide();
      $(".header-text-p").hide();
      $("#cSharp").show();
      $("#try-again").show();
    }

    if (dont > css && dont > cSharp && dont > ruby) {
      $("#questions").hide();
      $("#header-content").hide();
      $(".header-text-p").hide();
      $("#dont").show();
      $("#try-again").show();
    }

    if (birb > css && birb > ruby && birb > cSharp && birb > dont) {
      $("#questions").hide();
      $("#header-content").hide();
      $(".header-text-p").hide();
      $("#birb").show();
    }

    $('input[type="radio"]').prop('checked', false);
    event.preventDefault();
  });

  // Reset
  $("#again").click(function(event) {
    ruby = 0;
    css = 0;
    cSharp = 0;
    dont = 0;

    $("#questions").show();
    $("#trying-again").show();
    $("#try-again").hide();
    $("#ruby").hide();
    $("#css").hide();
    $("#cSharp").hide();
    $("#dont").hide();

    event.preventDefault();
  });
});
