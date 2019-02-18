 


  function LoginAuthorization(){
        

        $.ajax({
            
            url: 'http://localhost:64490/api/Employees/'+$('#username').val(),
            type: 'GET',
            dataType: 'json',
            success: function(res){
                if(res.Password==$('#password').val()) 
                {
                   window.location = "employeeskillhrms.html";
                }
                else
                {
                    alert("Incorrect Username or Password.Please try again.");
                }
            }
        });   
    }


 /*function adminauthentication(){
        

        $.ajax({
            
            url: 'http://localhost:64490/api/Employees/'+$('someHardCodedValue').val(),
            type: 'GET',
            dataType: 'json',
            success: function(res){
                if(res.Password==$('someHardCodedValue').val()) 
                {
                   window.location = "employeeskillhrms.html";
                }
                else
                {
                    alert("Incorrect Username or Password.Please try again.");
                }
            }
        });   
    }


function authorization()
  {

 var Uname=document.getElementById('username').value;

 var Pname=document.getElementById('password').value;
  
  console.log(Uname);
  console.log(Pname);

   var AuthorizationData={
           "Username":Uname;
           "Password":Pname 


  }*/
