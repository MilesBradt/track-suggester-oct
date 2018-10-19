$(document).ready(function() {
  $(".tracks").submit(function(event) {
    event.preventDefault();
    var part1 = $("input:radio[name=part1]:checked").val();
    console.log(part1);

    $('input[type="radio"]').prop('checked', false);
  });
});
