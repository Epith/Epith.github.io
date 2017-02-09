// JavaScript 
function validateForm(){
			
			var err=false;
			var errMsg="";
			//code to validate form entries
			
			var txtFName=document.getElementById("Firstname").value;
			var txtLName=document.getElementById("Lastname").value;
	        var HandNo=document.getElementById("number").value;
            var email=document.getElementById("email").value;
	        var isNumber=/^\d+$/.test(HandNo);
			if(txtLName=="" || txtLName==" " || txtLName==null){
				err=true;
				errMsg=errMsg+"Last Name cannot be blank!\n";
			}
			if(txtFName=="" || txtFName==" " || txtFName==null){
				err=true;
				errMsg=errMsg+"FirstName cannot be blank!\n";
			}
	        if(isNumber==false){
				err=true;
				errMsg=errMsg+"Mobile Number should not have letters or be blank!\n";
			}
	        if(email==""||email==" "||email==null){
				err=true;
				errMsg=errMsg+"Email should not be blank!\n";
			}
			if(err==true){
				alert(errMsg);
				return false;
			}
			else{
				alert("Your form has been submitted successfully. A reply will be sent to your email shortly.");
				return true;
			}
		}