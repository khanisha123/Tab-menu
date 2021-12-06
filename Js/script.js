function openCity(evt, cityName) {
    let i;
    let tablinks;

   let linkContent = document.getElementsByClassName("linkContent");

    for (i = 0; i < linkContent.length; i++) {
        linkContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }