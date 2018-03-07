


	// JAVASCRIPT
	function creation()
			{
				var uname = document.getElementById("_uname").value;
				var email = document.getElementById("_email").value;
				var pass = document.getElementById("_pass").value;
				if(uname == "")
				{
					alert("Please enter user name!");
					return;
				}
				else if(email == "")
				{
					alert("Please enter email!");
					return;
				}
				else if(pass == "")
				{
					alert("Please enter password!")
					return;
				}
				
				var atSign = false;
				for(var i = 0; i < email.length; i++)
				{
					if(email[i] == "@")
					{
						atSign = true;
						break;
					}
				}
				if(atSign == false)
				{
					alert("Please enter a valid email address.");
						return;
				}
				
				document.forms["myForm"].submit();
				alert("Name: " + name + "  " + "\nEmail: " + email + "\nComment: " + comment);
			}