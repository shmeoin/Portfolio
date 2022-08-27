
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        anchors:['top', 'work', 'about', 'contact'],
        menu:"#fp-nav",
        css3:true,
	});
});

let target = $(window).height(); 

$(window).resize(function(){
	target = $(window).height(); 
});

$(document).scroll(function(){
    if($(this).scrollTop() >= target-50)
    {   
        $('header').css({"background-color":"rgba(74,74,74,0.7)"});
    } else {
		$('header').css({"background-color":"rgba(0,0,0,0)"});
	}
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	if ($(window).width() < 450){
	document.getElementById("sideNav").style.width = "250px";
	} else {
		document.getElementById("sideNav").style.width = "450px";
	}
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("sideNav").style.width = "0";
  }
