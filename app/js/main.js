var content = document.getElementById("content");
var event1 = document.getElementById("event");
const openModal = document.getElementById('open_modal');
const closeModal = document.getElementById('close_modal');
const Modal = document.getElementById('modal');

const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", e =>{

textarea.style.height = "110px";

let scHeight = e.target.scrollHeight; textarea.style.height = '${scHeight}px';

})

event1.onclick = function(){

  if(content.classList.contains("open")){
    content.classList.remove("open");
    event1.innerText = "Read more >>";
  } else {
    content.classList.add("open");
    event1.innerText = "Show less <<";
  }
};



openModal.addEventListener('click', function(e){
  e.preventDefault();
  Modal.classList.add('active');
})

closeModal.addEventListener('click', () =>{
  Modal.classList.remove('active');
})