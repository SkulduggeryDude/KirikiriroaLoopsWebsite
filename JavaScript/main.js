//Code for the dropdown search function taken from w3schools
//Function called when user clicks on search button in navbar
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); //Reveals search bar and list
  }
  //Takes the user input from the search bar and if content doesn't match an item it makes it hidden
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }