/* "Med School Notes" scripts */

// Left-side menu
$(document).on('click', 'a.expand', function() {
  $(this).siblings('ul').slideToggle();
});

$(document).on('click', 'a.toc-1', function() {
  $('a.toc-1').css({
    "background-color": "#DCDBDB",
    "color": "black",
  });
  $(this).css({
    "background-color": "#04AA6D",
    "color": "white",
  });
});

$(document).on('click', 'a', function() {
  $(this).addClass('is-active');
  $('#toc-links a').not(this).removeClass('is-active');
  $('#toc-links a').not(this).css({
    "font-weight": "400",
    "background-color": "#DCDBDB",
    "color": "black",
  });
  $(this).closest('ul').closest('li').children('a.expand').css({
    "font-weight": "700",
    "background-color": "#888",
    "color": "white",
  });
  $(this).closest('li.toc-1').children('a').css({
    "background-color": "#04AA6D",
    "color": "white",
  });
});

// iFrame
document.addEventListener('DOMContentLoaded', function () {
  const allLinks = document.querySelectorAll('a.notes');

  allLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Optional: Prevent default link behavior if it's an internal anchor link
      // event.preventDefault(); 
      window.scrollTo(0, 0);
    });
  });
});