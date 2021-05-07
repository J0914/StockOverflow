'use strict';
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define('Response', {
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    responseText: DataTypes.TEXT
  }, {});
  Response.associate = function(models) {
    // associations can be defined here
    Response.belongsTo(models.Question, { foreignKey: 'questionId'});
    Response.hasMany(models.ResponseVote, { foreignKey: 'responseId' });
    Response.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Response;
};
