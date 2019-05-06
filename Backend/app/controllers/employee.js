var router = require('express').Router();
var {Employee} = require('../models/employee');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


var employee = {
    //all methods for Employee Controller

    //Sample Method of Employee Controller
    'sample' : (req,res) => {
        res.send("Welcome to HRMS");
    },
    'login' : (req,res) => {
        console.log(req.body.cgiCode);
        console.log(req.body.password);
        Employee.findOne({'cgiCode' : req.body.cgiCode}).select('password').then((doc)=>{
            bcrypt.compare(req.body.password, doc.password, function(err, result) {
            if(result == true)
            { console.log(req.body.cgiCode);
                res.send(jwt.sign({'cgiCode':req.body.cgiCode},'secret'));}
            else
            res.send("Login Unsuccessful");
            });
            
        },(e) =>{
            res.send(e);
        })
        

    },    
    'getEmployees' : (req,res) => {
        console.log('here');
        Employee.find().populate('skills').then((doc) => {
            res.send(doc)
        },(e) => {
            res.send(e);
        });
    },
    'getEmployeesBySkill' : (req,res) => {
        console.log('in get employees');
        console.log(req.body.skills);
        Employee.find({
            'skills' : { '$in' : req.body.skills}
        }).populate('skills').then((doc) => {
            res.send(doc)
        },(e) => {
            res.send(e);
        });
    },
    'createEmployee' : (req,res) => {
       
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            var employee = new Employee({
                name : req.body.name,
                cgiCode: req.body.cgiCode,
                emailId : req.body.emailId,
                password : hash
        });
            employee.save().then((doc) => {
                res.send(doc);
            },(e) => {
                res.send(e);
            })
        });
       },
      'addSkillToEmployee' :  (req,res) => {
        
        const conditions = {
            'cgiCode' : req.body.cgiCode 
        }
        const update = {
            '$addToSet' : {
                'skills' :  { '$each' : req.body.skills}
            }
        }
        Employee.findOneAndUpdate(conditions,update).exec().then((doc) => {
            res.send(doc);
        },(e) => {
            res.send(e);
        })},
        'getSkillForEmployee' : (req,res) => {
            console.log(req.params);
            Employee.findOne({
               'cgiCode' : req.params.id
                }).populate('skills').select('name').then((doc) => {
                
                res.send(doc.skills.map( (x) => {
                    return { "id" : x._id , "text" : x.name}
                }))
            },(e) => {
                res.send(e);
            });
        },
        'saveSkillsForEmployee' :  (req,res) => {
           console.log(req.params.id); 
           console.log(req.body.skills);
            const conditions = {
                'cgiCode' : req.params.id 
            }
            const update = {
                '$set' : {
                    'skills' : req.body.skills 
                }
                }
            
            Employee.findOneAndUpdate(conditions,update).exec().then((doc) => {
                console.log(doc);
                res.send(doc);
                
            },(e) => {
                res.send(e);
            })},
    
        
        
}
    

module.exports = employee
    
    