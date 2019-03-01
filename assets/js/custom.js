var $navbar = $('.navbar');
var navbar_offset = $navbar.innerHeight();

$('#navbar-main li.nav-item a.nav-link').off('click').on('click', function(event) {
  // Store requested URL hash.
  var hash = this.hash;

  // If we are on the homepage and the navigation bar link is to a homepage section.
  if ( hash && $(hash).length && ($("#homepage").length > 0)) {
    // Prevent default click behavior.
    event.preventDefault();

    // // Use jQuery's animate() method for smooth page scrolling.
    // // The numerical parameter specifies the time (ms) taken to scroll to the specified hash.
    $('html, body').animate({
      scrollTop: $(hash).offset().top - navbar_offset
    }, 800);
    // history.replaceState(null, null, hash);
  }
});

$(document).on('scroll',function(e)
{
  $('section').each(function()
  {
    if ( $(this).offset().top < window.pageYOffset + 80
      && $(this).offset().top + $(this).height() > window.pageYOffset + 80
    ) {
      var data = $(this).attr('id');
      if (window.location.hash !== '#' + data) {
        history.replaceState(null, null, '#' + data);
      }
    }
  });
});
