/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var extern = document.getElementsByTagName("link")[0].import;
var absatz = extern.getElementsByTagName("div")[0];
window.addEventListener("load", function() {
  document.getElementsByTagName("html")[0].replaceChild(extern.getElementsByTagName("body")[0], document.getElementsByTagName("body")[0]);
}, false);