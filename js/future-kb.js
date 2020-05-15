$(function() {
  // Admin toolbar
  const openDropdown = $('.open-dropdown')
  const userDropdown = $('.user-dropdown')

  openDropdown.on('click', function(e) {
    e.preventDefault()
    userDropdown.toggleClass('active');
  });

  // Header
  const openNav = $('a.open-user-nav')
  const closeNav = $('a.close-user-nav')
  const userNav = $('.user-nav')

  openNav.on('click', function(e) {
    e.preventDefault()
    userNav.addClass('active');
  });
  
  closeNav.on('click', function(e) {
    e.preventDefault()
    userNav.removeClass('active');
  });

  $('#categories, #topics').tabs();

  // Author Page
  sidebar = $('aside.sidebar');
  windowWidth = $(window).width()

  if(windowWidth >= 1280) {
    $(document).scroll(function() {
      if ($(document).scrollTop() >= 350) {
        sidebar.addClass('fixed');
      } else {
        sidebar.removeClass('fixed');
      }
    });
  }
  
})