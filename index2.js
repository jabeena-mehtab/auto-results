function grade() {
	var rlprompt=prompt("please enter you\'r rollno");

	document.getElementById("te1").innerHTML=rlprompt;

	var nameprompt=prompt("please enter you\'r name")

	document.getElementById("te2").innerHTML=nameprompt;

		var Engprompt=prompt("please enter you\'r English marks")

		debugger;
	document.getElementById("te3").innerHTML="100/"+Engprompt;
	

			var Mathprompt=prompt("please enter you\'r Math marks")

	document.getElementById("te4").innerHTML="100/"+Mathprompt;

    var urduprompt=prompt("please enter you\'r urdu marks")

	document.getElementById("te5").innerHTML="100/"+urduprompt;

	var obtmarks=document.getElementById("te7").innerHTML=Number(Engprompt)+Number(Mathprompt)+Number(urduprompt);

	if (obtmarks >= 280) 
	{
		document.getElementById("te8").innerHTML="A+";
	}
	else if (obtmarks >= 250) 
	{
		document.getElementById("te8").innerHTML="A";
	}
	else if (obtmarks >= 230) 
	{
		document.getElementById("te8").innerHTML="B";
	}
	else if (obtmarks >= 200) 
	{
		document.getElementById("te8").innerHTML="C";
	}
    else if (obtmarks >= 170) 
	{
		document.getElementById("te8").innerHTML="D";
	}
    else if (obtmarks >= 140) 
	{
		document.getElementById("te8").innerHTML="E";
	}
    else if (obtmarks >= 90) 
	{
		document.getElementById("te8").innerHTML="U";
	}
	else
	{
		document.getElementById("te8").innerHTML="Fail";
	}

    var pass=document.getElementById("te9");
    if (obtmarks<=90)
    {
    	pass.innerHTML="Fail";
    }
    else if (obtmarks > 90) 
    {
    	pass.innerHTML="Pass";
    }
}
grade();