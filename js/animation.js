/* intro.html */

setTimeout(function(){
 document.getElementById('section2-intro').classList.remove('hide');
 }, 1000);

function unlocked() {
  setTimeout(function(){
  	document.getElementById('footer').style.animationName = "animateUnlocked";
 	document.getElementById('footer').style.animationDuration = "1.5s";
 	setTimeout(function(){
	  	document.getElementById('unlockBtn').classList.remove('hide');
	  	document.getElementById('unlockBtn').style.animationName = "animateVisit";
	 	document.getElementById('unlockBtn').style.animationDuration = "2s";
	 }, 1000);
 	}, 500);
  document.getElementById("headerText").innerHTML = "AMEEN INCORPORATION &nbsp;<i class='fa fa-unlock'></i></i>";
}

/* other html */

setTimeout(function(){
 document.getElementById('section-card').classList.remove('hide');
 }, 1000);

var modal = document.getElementById('id01');

// Click outside modal will close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
