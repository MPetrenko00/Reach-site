var content = document.getElementById("content");
var event1 = document.getElementById("event");

event1.onclick = function(){

  if(content.classList.contains("open")){
    content.classList.remove("open");
    event1.innerText = "Read more >>";
  } else {
    content.classList.add("open");
    event1.innerText = "Show less <<";
  }
};