var express = require('express');
var router = express.Router();
var peopleController = require('../controllers/peopleController');

//GET: /people/all
router.get('/all', peopleController.peopleList);

//POST: /people/create
router.post('/create', peopleController.createPeople);

//DELETE: /people/delete
router.delete('/delete', peopleController.deleteIdOnBody);

//DELETE: /people/delete/{id}
router.delete('/delete/:id', peopleController.deleteIdOnParams);

//GET: /people/{id}
router.get('/:id', peopleController.findSinglePerson);

//GET: /age/profession
router.get('/age/profession', peopleController.findByAgeAndProfession);

//PUT: /update/{id}
router.put('/update/:id', peopleController.updateUser);

module.exports = router;
