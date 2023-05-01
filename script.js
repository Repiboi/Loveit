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

// Define the increment function
function increment(postNumber) {
  var countElement = document.getElementById("count" + postNumber);
  var iconElement = document.getElementById("icon" + postNumber);

  // Get the current count value
  var count = parseInt(countElement.innerHTML);

  if ( count === 0 && iconElement.classList.contains("yellow")) {
    count++;
    countElement.innerHTML = count;
    iconElement.classList.add("yellow");
  } else {
    count--;
    countElement.innerHTML = count;
    iconElement.classList.remove("yellow");
  }
}

