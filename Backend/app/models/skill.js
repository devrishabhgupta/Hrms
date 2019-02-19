//Skill Model
var mongoose = require ('mongoose'),
Schema = mongoose.Schema,
SkillSchema = new Schema({
    name: {
        type: String,
        required:true
    },

    employees : [{ type: Schema.Types.ObjectId, ref: 'Employee' }]

 });

var Skill = mongoose.model('Skill',SkillSchema);
module.exports = {
	Skill : Skill
} ;