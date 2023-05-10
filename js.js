function dropdown() {
    document.getElementById("cartlista").classList.toggle("show");
  }
  
  window.onclick = function(event) { 
    if (!event.target.matches('.cart')) {
       
      var dropdowns = document.getElementsByClassName("shoplista");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function addmjolk(){
    const prisHållare = document.getElementById("prisHållare")
      let prisElement = document.createElement("li");
      prisElement.innerHTML = "Mjölk Choklad - 35kr";
      prisHållare.appendChild(prisElement);
  }
  function addmork(){
    const prisHållare = document.getElementById("prisHållare")
    let prisElement = document.createElement("li");
    prisElement.innerHTML = "Mörk Choklad - 35kr";
    prisHållare.appendChild(prisElement);
  }
  function addvit(){
    const prisHållare = document.getElementById("prisHållare")
    let prisElement = document.createElement("li");
    prisElement.innerHTML = "Vit Choklad - 35kr";
    prisHållare.appendChild(prisElement);
  }
  function addfrukt(){
    const prisHållare = document.getElementById("prisHållare")
    let prisElement = document.createElement("li");
    prisElement.innerHTML = "Choklad M Frukt - 35kr";
    prisHållare.appendChild(prisElement);    
  }
  function addhassel(){
    const prisHållare = document.getElementById("prisHållare")
    let prisElement = document.createElement("li");
    prisElement.innerHTML = "Choklad M Nöt - 35kr";
    prisHållare.appendChild(prisElement);
  }
  function addkex(){
    const prisHållare = document.getElementById("prisHållare")
    let prisElement = document.createElement("li");
    prisElement.innerHTML = "Choklad Kex - 35kr";
    prisHållare.appendChild(prisElement);
  }
function rensa(){
    const prisHållare = document.getElementById("prisHållare");
    while (prisHållare.firstChild) {
      prisHållare.removeChild(prisHållare.firstChild);
    }
  }
  