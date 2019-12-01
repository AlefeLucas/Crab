var collapsed = false;
var searchBar = document.getElementById("search");
var modal = document.getElementById("profile-modal");
var profile = document.getElementById("profile-section");
var floatCollapse = document.getElementById("float-collapse-image");

floatCollapse.onclick = function collapseSidebarDesktop() {
  if (collapsed) {
    document.getElementById("sidebar").style.width = "325px";
    document.getElementById("header").style.marginLeft = "325px";
    document.getElementById("content").style.marginLeft = "325px";
    profile.style.padding = "25px";
    document.getElementById("float-collapse").style.marginLeft = "305px";
    floatCollapse.src = "images/icon-material-keyboard-arrow-left.png";
    floatCollapse.alt = "Imagem de seta para a esquerda";
  } else {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
    profile.style.padding = "0";
    document.getElementById("float-collapse").style.marginLeft = "0";
    floatCollapse.src = "images/icon-material-keyboard-arrow-right.png";
    floatCollapse.alt = "Imagem de seta para a direita";
  }
  collapsed = !collapsed;
}

document.getElementById("profile-mobile").onclick = function collapseSideBarMobile() {
  if (collapsed) {
    document.getElementById("sidebar").style.height = "80px";
  } else {
    document.getElementById("sidebar").style.height = "100%";
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

window.onclick = function(e) {
  if (!modal.contains(e.target)) {
    if (profile.contains(e.target)) {
      if (this.modal.style.marginTop == "-400px" || this.modal.style.marginTop == "") {
        this.modal.style.marginTop = "0px";
      } else {
        if (!document.getElementById("profile-mobile").contains(e.target)) {
          this.modal.style.marginTop = "-400px";
        }
      }
    } else {
      this.modal.style.marginTop = "-400px";
    }
  }
}