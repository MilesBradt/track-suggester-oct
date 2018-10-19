var ruby = 0
var css = 0
var cSharp = 0
var dont = 0 //it's all about the money

$(document).ready(function() {
  $(".tracks").submit(function(event) {
    // First set
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
    // Second set
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

    console.log("Ruby " + ruby)
    console.log("CSS " + css)
    console.log("C# " + cSharp)
    console.log("It's all about the money " + dont)

    $('input[type="radio"]').prop('checked', false);
    event.preventDefault();
  });
});
