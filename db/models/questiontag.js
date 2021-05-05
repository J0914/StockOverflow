'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionTag = sequelize.define('QuestionTag', {
    questionId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  QuestionTag.associate = function(models) {
    // associations can be defined here
  };
  return QuestionTag;
};