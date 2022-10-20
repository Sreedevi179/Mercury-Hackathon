//Selectors
const iconbtn=document.querySelector('.btn');
const expolrebtn=document.querySelector('.call-to-action__button');
// Event listeners
iconbtn.addEventListener('click',profile);
expolrebtn.addEventListener("click",newmove);
//functions
function profile(event){
    document.getElementById("my").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
     var dropdowns = document.getElementsByClassName("content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
       }
     }
   }

   function newmove(event){
    window.location.href = "play-page.html";

   }