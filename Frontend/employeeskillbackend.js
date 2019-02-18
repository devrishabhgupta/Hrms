function skilladdition(){

  var skillset=document.getElementById('skill').value;
  
  console.log(skillset);
  
  /*var data = {

    {
      "skillName" : "Javascript"
    },
    {
      "skillName" : "Java"
    },
    {
      "skillName" : "Javascript"
    },
    {
      "skillName" : "Javascript"
    },
    {
      "skillName" : "Javascript"
    },
    {
      "skillName" : "Javascript"
    },

  }*/
  var PostingData={
           "Skill":skillset; 


  }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:64490/api/Employees',
        data:PostingData,  
            success: function(data) {
        alert("CONGRATS!SKILL ADDED!");
        
      }
    });
  }

  function authorization()
  {

 var Uname=document.getElementById('username').value;

 var Pname=document.getElementById('password').value;
  
  console.log(skillset);

   var AuthorizationData={
           "Password":Pname; 


  }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:64490/api/Employees',
        data:AuthorizationData,  
            success: function(data) {
        alert("CREDENTIALS ASSIGNED!");
        
      }
    });


  }