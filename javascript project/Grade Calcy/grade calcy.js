const calcy=() =>{
		var maths=document.getElementById('maths').value;
		var eng=document.getElementById('eng').value;
		var phy=document.getElementById('phy').value;
		var che=document.getElementById('che').value;
		var grade="";

		var totoalgrade=parseFloat(maths)+parseFloat(eng)+parseFloat(phy)+parseFloat(che);
		// alert("Your total marks is : "+totoalgrade);

		var percentage=(totoalgrade/400)*100;
		// alert("You got : "+percentage+"%");
		if (percentage <=100 && percentage>=80)
		 {grade='A'}
		else if (percentage <=79 && percentage>=60)
		 {grade='B'}
		else if (percentage <=59 && percentage>=40)
		 {grade='C'}
		else if (percentage <=39 && percentage>=33)
		 {grade='D'}
		else{
			grade='F';}

			// alert("Your grade is : "+grade);

		if(percentage>=33)
		{
			document.getElementById('result').innerHTML=`Congratulation<br><br><br>Let's Party You are
			PASS<br><br>You got ${totoalgrade}marks out of 400 <br> percentage is ${percentage}%. <br>
			Your grade is ${grade} `
		}
		else{
			document.getElementById('result').innerHTML=`Good Attempt<br><br>You are FAIL<br>Try your 
			luck next time<br><br>You got ${totoalgrade}marks out of 400 <br> percentage 
			is ${percentage}%. <br>Your grade is ${grade} `
		}


		//==============popup====================//

			// var blur=document.getElementById('blur');
			// blur.classList.toggle('active');

			var popup=document.getElementById('popup');
			popup.classList.toggle('active');

	}

// function close() {
// 	var x=document.getElementById("popup");
// 	x.style.display="none";


	function cls() {
  var x = document.getElementById("popup");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

