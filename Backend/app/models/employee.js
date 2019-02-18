//Employee Model

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema;  //Schema Created

var EmployeeRecord = new UserSchema(
{   
 Username: {type: String, required:true},
 Password: {type: String, required:true},
 ProfilePicture: [{type:String}],

 Skills: [{type:String}],
 Projects: [{type:String}] 
  }
)
var Employee = mongoose.model('Employee', EmployeeSchema); // model created


var Skills = mongoose.Schema;
var SkillRecord = new Skills(
{
    SkillName: [{ type:String}],

}
)
var Skills = mongoose.model('Skills', SkillSchema);


var Projects = mongoose.Schema;
var ProjectsRecord = new Projects(
{
    ProjectName: [{type: String}],
    TechStack: [{type: String}]
}
) 
var Projects = mongoose.model('Projects', ProjectSchema)