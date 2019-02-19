var express = require('express')
var controllers = require('../controllers');

const apiRoutes = () => {

    var router = express.Router();
    //define routes here
    router.get('/', controllers.employee.sample);
    router.get('/skills', controllers.skill.getSkills);
    router.get('/skills/search', controllers.skill.searchSkills);
    router.post('/skills', controllers.skill.createSkill);
    router.get('/employees', controllers.employee.getEmployees);
    router.post('/employees', controllers.employee.createEmployee);
    router.post('/employees/skills', controllers.employee.addSkillToEmployee);
    router.post('/employees/skills/find', controllers.employee.getEmployeesBySkill);

    
    return router;

};


module.exports = apiRoutes;