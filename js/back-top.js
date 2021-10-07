var backTop = document.getElementById("backTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	 	});
}