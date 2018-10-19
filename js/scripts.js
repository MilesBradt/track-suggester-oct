var ruby = 0
var css = 0
var cSharp = 0

$(document).ready(function() {
  $(".tracks").submit(function(event) {
    var part1 = $("input:radio[name=part1]:checked").val();
    if (part1 === "ruby") {
      ruby += 1
      }

    if (part1 === "CSS") {
        css += 1
      }

    if (part1 === "C#") {
        cSharp += 1
      }

    console.log("Ruby " + ruby)
    console.log("CSS " + css)
    console.log("C# " + cSharp)

    $('input[type="radio"]').prop('checked', false);
    event.preventDefault();
  });
});
