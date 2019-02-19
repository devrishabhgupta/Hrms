var router = require('express').Router();
var {Employee} = require('../models/employee');


var employee = {
    //all methods for Employee Controller

    //Sample Method of Employee Controller
    'sample' : (req,res) => {
        res.send("Welcome to HRMS");
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
        console.log('here');
        Employee.find({
            'skills' : { '$in' : req.body.skills.map((skl) => {
                return skl.id;
            })}
        }).then((doc) => {
            res.send(doc)
        },(e) => {
            res.send(e);
        });
    },
    'createEmployee' : (req,res) => {
        var employee = new Employee({
            name : req.body.name,
            cgiCode: req.body.cgiCode,
            emailId : req.body.emailId
        })
        employee.save().then((doc) => {
            res.send(doc);
        },(e) => {
            res.send(e);
        })},
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
        })}
        
        
}
    

module.exports = employee
    
    