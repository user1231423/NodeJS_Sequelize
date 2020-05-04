'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Profession: DataTypes.STRING,
    Age: DataTypes.INTEGER
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};