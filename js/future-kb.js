$(function() {
  // Admin toolbar
  const openDropdown = document.querySelector('.open-dropdown')
  const userDropdown = document.querySelector('.user-dropdown')

  openDropdown.addEventListener('click', () => {
    userDropdown.classList.toggle('active');
  });

  document.addEventListener("click", (e) => {
    let targetElement = e.target;

    do {
      if (targetElement == userDropdown || targetElement == openDropdown) {
        return;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);

    userDropdown.classList.remove('active');
  });


  $('#categories').tabs();
})