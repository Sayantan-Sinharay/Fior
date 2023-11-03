const navbarToggle = $(".navbar-container__toggle");

const navbarMenu = $(".navbar-container__menu");

navbarToggle.click(() => {
  navbarMenu.toggleClass("active");
  navbarToggle.children().toggleClass("fa-x");
});
