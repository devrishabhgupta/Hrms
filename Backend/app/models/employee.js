//Employee Model
var mongoose = require ('mongoose'),
Schema = mongoose.Schema,
EmployeeSchema = new Schema({

    name: {
        type: String,
        required:true,
    },
    
    cgiCode : {
        type: String,
        unique:true,
        required:true
    },

    emailId : {
        type: String,
        unique:true,
        required:true
    },

    skills : [{ type: Schema.Types.ObjectId, ref: 'Skill' }]

 });


 
var Employee = mongoose.model('Employee',EmployeeSchema);
module.exports = {
	Employee: Employee
} ;