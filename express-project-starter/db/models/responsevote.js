'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResponseVote = sequelize.define('ResponseVote', {
    userId: DataTypes.INTEGER,
    responseId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  ResponseVote.associate = function(models) {
    // associations can be defined here
  };
  return ResponseVote;
};