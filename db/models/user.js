'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Question, { foreignKey: 'authorId'} );
    User.hasMany(models.Response, { foreignKey: 'userId' });
    User.hasMany(models.QuestionVote, { foreignKey: 'userId' })
    User.hasMany(models.ResponseVote, { foreignKey: 'userId' });

  };
  return User;
};
