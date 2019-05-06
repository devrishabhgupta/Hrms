var router = require('express').Router();
var { Skill } = require('../models/skill');
var {mongoose} = require('../../mongoose')

var skill = {
    //all methods for skill Controller

    //Sample Method of skill Controller
    'getSkills' : (req,res) => {
        console.log('here');
        Skill.find().then((doc) => {
            res.send(doc)
        },(e) => {
            res.send(e);
        });
    },
    'searchSkills' : (req,res) => {

        var limitNum = 3;
        var search = String(req.query.search);
        // console.log(search);
        var pageNum = Number(req.query.page);
        // console.log(pageNum);
		if(!pageNum)
		{
			pageNum = 1;
		}
        var skipRecords = (pageNum-1)*limitNum;
        var count = 0 ;
        Skill.count({ 
            'name' :{ '$regex' : search } 
        }).then((c)=>{
            count = c;
            console.log('count',c);
        }).then(()=>{
        Skill.find({ 
            'name' :{ '$regex' : search } 
        }).skip(skipRecords).limit(limitNum).then((doc) => { 
            console.log(doc);
            let results = doc.map((skl) => {
                return {
                    "id" : skl._id,
                    "text" : skl.name
                }
            })

            let morePages = (count - (pageNum*limitNum)) <= 0 ?false:true;

            res.send({ "results": results , "pagination" : {"more": morePages}});
        },(e) => {
            res.send(e);
        });})
    },
    'createSkill' : (req,res) => {
        var skill = new Skill({
            name : req.body.name
        })
        skill.save().then((doc) => {
            res.send(doc);
        },(e) => {
            res.send(e);
        });
    }
        
}
    

module.exports = skill
    