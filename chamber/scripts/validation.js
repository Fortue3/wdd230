function formValidation() {
    // event.preventDefault();
	var firstname = document.getElementById('firstname');
	var lastname = document.getElementById('lastname');
	var bnsPos = document.getElementById('bnsPos');
	var bnsName = document.getElementById('bnsName');
	var bsnsDesc = document.getElementById('bsnsDesc');
	var phone = document.getElementById('phone');
	var mLevel = document.getElementById('mLevel');
	var email = document.getElementById('email');

    
    if (!firstname.value.match(/^[a-zA-Z]+$/)) {
		document.getElementById('p1').innerText = "* For your name please use alphabets only *"; 
		firstname.focus();
	}

	if (!lastname.value.match(/^[a-zA-Z]+$/)) {
		document.getElementById('p1').innerText = "* For your name please use alphabets only *"; 
		lastname.focus();
	}

	if (!bnsPos.value.match(/^[0-9a-zA-Z]+$/) && bnsPos.length < 7) {
		document.getElementById('p5').innerText = "Please enter a valid business positon"; 
		bsnPos.focus();
	}

	if (!phone.value.match(/^[0-9]+$/)) {
		document.getElementById('p6').innerText = "Phone Number can only contain number";
		phone.focus();
	}

	if (mLevel.value == "Please Choose") {
		document.getElementById('p4').innerText = "Please Choose A valid option"; 
		mLevel.focus();

	}


}

