// Code to minimize Navbar button after clicking on a dropdown link (only to work in small screen when navbar buttonn shows up)


$(".navbar_itemx").on("click", function() {
  var navbutton_status = $(".navbuttonx").attr("aria-expanded");
  if (navbutton_status == "true") {
    setTimeout(function() {
      $(".navbuttonx").click()
    }, 100);

    if (this.getAttribute("href") != "#Contact_Me") {
      var offset = $(this.getAttribute("href")).offset();
      $('html, body').animate({
        scrollTop: offset.top - 70,
        scrollLeft: offset.left
      }, 200);
    }

  }

});
