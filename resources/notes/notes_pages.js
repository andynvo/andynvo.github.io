/* Scripts for notes pages */

// Change hide-show label
$(document).ready(function() {
  var defLabel = "Read more ˅";
  $("a.read-more").html(defLabel);
  $("a.read-more").click(function(){
    if ($(this).html() == defLabel) {
      $(this).html("Show less ˄");
    } else {
      $(this).html(defLabel);
    }
  });
});

// Hide-show extra content
$(document).ready(function(){
  $("a.read-more").click(function(){
    $(this).parent().next().slideToggle("slow");
  });
});

