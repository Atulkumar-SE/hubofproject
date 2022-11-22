

// function open(){
// 	var x= document.getElementById("menu");
// 		if(x.style.display === "block"){

// 				x.style.display="none";

// 		}
// 		else{
// 			x.style.display="block";
// 		}
// }


function open() {
  var x = document.getElementById("menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}