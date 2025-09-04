/* "Med School Notes" scripts */

// Left-side menu
$(document).on('click', 'a.expand', function() {
  $(this).siblings('ul').slideToggle();
});

$(document).on('click', 'a.toc-1', function() {
  $(this).css({
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
