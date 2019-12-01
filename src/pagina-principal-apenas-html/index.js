var collapsed = false;
var searchBar = document.getElementById("search");
var modal = document.getElementById("profile-modal");
var profile = document.getElementById("profile-section");

function collapseSidebar() {
  if (collapsed) {
    document.getElementById("sidebar").style.width = "325px";
    document.getElementById("header").style.marginLeft = "325px";
    document.getElementById("content").style.marginLeft = "325px";
    profile.style.padding = "25px";
    document.getElementById("float-collapse").style.marginLeft = "305px";
    document.getElementById("float-collapse-image").src = "images/icon-material-keyboard-arrow-left.png";
    document.getElementById("float-collapse-image").alt = "Imagem de seta para a esquerda";
  } else {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
    profile.style.padding = "0";
    document.getElementById("float-collapse").style.marginLeft = "0";
    document.getElementById("float-collapse-image").src = "images/icon-material-keyboard-arrow-right.png";
    document.getElementById("float-collapse-image").alt = "Imagem de seta para a direita";
  }
  collapsed = !collapsed;
}

window.onscroll = function() {
  let classes = this.searchBar.classList;
  if ((this.searchBar.getBoundingClientRect().top + this.document.body.scrollTop) == 0) {
    if (!classes.contains("box-shadow")) {
      classes.add("box-shadow");
    }
  } else {
    classes.remove("box-shadow");
  }
}

profile.onclick = function() {
  modal.style.marginTop = "0";
}

window.onclick = function(e) {
  if (profile.contains(e.target)) {
    if (this.modal.style.marginTop == "-400px") {
      this.modal.style.marginTop = "0px";
    }
  } else if (!modal.contains(e.target)) {
    if (this.modal.style.marginTop == "0px") {
      this.modal.style.marginTop = "-400px";
    }
  }
}