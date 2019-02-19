function skilladdition(){

  var skillset=document.getElementById('skill').value;
  
  console.log(skillset);
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
  function AdminAssignUsername(){
     var user=document.getElementById('username').value;
     var pass=document.getElementById('password').value;
  
  console.log(user);
  console.log(pass);
  var assignData={
           "Username":user; 
            "Password":pass;

 }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:64490/api/Employees',
        data:assignData,  
            success: function(data) {
        alert("CREDENTIALS ASSIGNED!");
        
      }
    });


  }


  function deleteSkills(){
  

var idgetting=localStorage.getItem("id");
//"id"=idgetting;

if(confirm("ARE YOU SURE?")){
    $.ajax({
    url: 'http://localhost:64490/api/Employees/' + idgetting,
    type: 'DELETE',
    // data:DeletingSingleData,
    

    success: function(data) {
        alert("SKILL DELETED SUCCESSFULLY");
       
    }
  
});}
    else{
      alert("SKILL EXISTS");
    }
}