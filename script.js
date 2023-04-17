function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.display="none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.display="flex";
    document.body.style.backgroundColor = "white";
  }
  
  document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "home.html";

    if (currentColor === "white"){
    document.body.style.bacgroundColor ="indigo";
    } else {
      currentColor === "white";
      document.body.style.bacgroundColor ="red";
    } 
  });
