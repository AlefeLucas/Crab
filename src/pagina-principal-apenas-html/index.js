var collapsed = false;
var searchBar = document.getElementById("search");

function collapseSidebar() {
  if (collapsed) {
    document.getElementById("sidebar").style.width = "325px";
    document.getElementById("header").style.marginLeft = "325px";
    document.getElementById("content").style.marginLeft = "325px";
    document.getElementById("profile-section").style.padding = "25px";
    document.getElementById("float-collapse").style.marginLeft = "305px";
    document.getElementById("float-collapse-image").src = "images/icon-material-keyboard-arrow-left.png";
    document.getElementById("float-collapse-image").alt = "Imagem de seta para a esquerda";
  } else {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("profile-section").style.padding = "0";
    document.getElementById("float-collapse").style.marginLeft = "0";
    document.getElementById("float-collapse-image").src = "images/icon-material-keyboard-arrow-right.png";
    document.getElementById("float-collapse-image").alt = "Imagem de seta para a direita";
  }
  collapsed = !collapsed;
}

window.onscroll = function() {
  if ((this.searchBar.getBoundingClientRect().top + this.document.body.scrollTop) == 0) {
    if (!this.searchBar.classList.contains("box-shadow")) {
      this.searchBar.classList.add("box-shadow");
    }
  } else {
    this.searchBar.classList.remove("box-shadow");
  }
}