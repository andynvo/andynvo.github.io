/* Scripts for 'Portfolio' page */

// On load, populate all "a.expand" elements with "Read more ˅"
$('document').ready(function(){
    $('a.expand').html("Show more &#x02C5;");
});

// Expand and collapse abstracts & change clickable link
$(document).on('click', 'a.expand', function() {
  $(this).parent().siblings('p.abstract').slideToggle();
  if ($(this).text()==="Show less ^") {
    $(this).html("Show more &#x02C5;");
  } else {
    $(this).html("Show less ^");
  }
});
