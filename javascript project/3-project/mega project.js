function btn2()
{
	var a=document.getElementById('pn').value;
	if (a>0)
	{alert(a+" is positive number");}
	else if(a<0)
	{alert(a+" is negative number");}
	else if(a==0){
		alert("It's a zero.")}
	else{
		alert("Not a number")
	}
}

function btn1()
{
	var data=document.getElementById('value').value;
	var x= Math.sign(data);
	alert(x);
}

function btn3()
{
	var b=document.getElementById('age').value;
	if (b>=18 && b<49)
	 { alert(b+"Eligible for vote");}
	else if (b>=50 && b<120)
	 { alert(b+"You are a Senior Citizen");}
	else if (b>120)
	 { alert("Human can't survive as long as you enter.");}
	else{
		alert("You are Minor");
	}

}

function btn4() {
	var a, b, hra, da, total, x, y, z;
	a=document.getElementById('salary').value;
	if (a<=25000) 
	{
		hra=(12/100)*a;
		document.getElementById("hra").value=hra;
		da=(13/100)*a;
		document.getElementById("da").value=da;
		total=parseInt(a)+parseInt(hra)+parseInt(da);
		document.getElementById("ts").value=total;
	}


	else{

		hra=(7/100)*a;
		document.getElementById("hra").value=hra;
		da=(8/100)*a;
		document.getElementById("da").value=da;
		total=parseInt(a)+parseInt(hra)+parseInt(da); //convert string into integer
		document.getElementById("ts").value=total;


	}
}

function btn5() {
	var item, price,quantity, saleprice, discount, netprice;
	item=prompt("Enter Item Name");
	price=prompt("Enter price per item");
	quantity=prompt("Enter quantity");
	saleprice=price*quantity;
	if (quantity>10)
	 {
	 	discount=(12/100)*saleprice;
	 }
	 else{
	 	discount=("Not Eligible");
	 }
	 if (discount>0) {
	 	netprice=saleprice-discount;
	 }
	 else{
	 	netprice=saleprice;
	 }

	document.getElementById('in').innerHTML=item;
	document.getElementById('price').innerHTML=price;
	document.getElementById('qty').innerHTML=quantity;
	document.getElementById('tsp').innerHTML=saleprice;
	document.getElementById('discount').innerHTML=discount;
	document.getElementById('np').innerHTML=netprice;
}