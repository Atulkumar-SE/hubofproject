// To get number.
function number(num) {
	var result=document.getElementById("input");
	result.value+=num;
	 }
// to get result
function result(){
	var result=document.getElementById("input");
	result.value=eval(result.value);
}

//to get clear result
function clearResult(){
	var result=document.getElementById("input");
	result.value="";
}

// clear last char
function backspace(){
	var number=document.getElementById("input");
	var remove=number.value;
	remove=remove.slice(0,-1); //remove last character from a strings
	number.value=remove;
}