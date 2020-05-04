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
    var body = new Object();

    if (req.body.FirstName) {
        body.FirstName = req.body.FirstName;
    }

    if (req.body.LastName) {
        body.LastName = req.body.LastName;
    }

    if (req.body.Profession) {
        body.Profession = req.body.Profession;
    }

    if (req.body.Age) {
        body.Age = req.body.Age;
    }

    models.Person.update({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Profession: req.body.Profession,
        Age: req.body.Age
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.json(result);
        })
}