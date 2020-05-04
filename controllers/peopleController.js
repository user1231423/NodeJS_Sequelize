var models = require('../models');

exports.peopleList = (req, res) => {
    models.Person.findAll({})
        .then(persons => {
            res.json(persons);
        });
}

exports.createPeople = (req, res) => {
    models.Person.create(req.body).then(result => {
        res.json(result.id);
    })
}

exports.deleteIdOnBody = (req, res) => {
    models.Person.destroy({
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json(result);
    })
}

exports.deleteIdOnParams = (req, res) => {
    models.Person.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
}

exports.findSinglePerson = (req, res) => {
    models.Person.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (!result) {
            res.send("No User found with given id!");
        } else {
            res.json(result);
        }
    })
}

exports.findByAgeAndProfession = (req, res) => {
    models.Person.findAll({
        where: {
            Age: req.body.Age,
            Profession: req.body.Profession
        }
    }).then(result => {
        res.json(result);
    })
}

exports.updateUser = (req, res) => {
    models.Person.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.json(result);
        })
}