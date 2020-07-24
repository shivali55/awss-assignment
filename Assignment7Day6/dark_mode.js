const darkmode=document.getElementById('dark');

darkmode.onclick= function changecolor() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }