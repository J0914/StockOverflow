'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    authorId: DataTypes.INTEGER,
    questionTitle: DataTypes.STRING,
    questionText: DataTypes.TEXT
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'QuestionTag',
      otherKey: 'tagId',
      foreignKey: 'questionId'
    };

    Question.belongsToMany(models.Tag, columnMapping);
    Question.belongsTo(models.User, { foreignKey: 'authorId' });
    Question.hasMany(models.Response, { foreignKey: 'questionId' });
    Question.hasMany(models.QuestionVote, { foreignKey: 'questionId' });

  };
  return Question;
};
