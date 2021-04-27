// Code to minimize Navbar button after clicking on a dropdown link (only to work in small screen when navbar buttonn shows up)
for (i = 0; i < document.querySelectorAll(".navbar_itemx").length; i++) {
  document.querySelectorAll(".navbar_itemx")[i].addEventListener("click",
    function() {
      var navbutton_status = document.querySelector(".navbuttonx").getAttribute("aria-expanded");
      //  console.log(navbutton_status);
      if (navbutton_status == "true") {
        setTimeout(function() {
          document.querySelector(".navbuttonx").click()
        }, 100);
      }
      //  console.log(document.querySelector(".navbuttonx"));
    }
  );
}
