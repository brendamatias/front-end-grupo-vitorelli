$(document).ready(function() {
  $.get("http://localhost:3000/produtos", function(data) {
    console.log(data);
  });
});
