'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'QuestionTag',
      otherKey: 'questionId',
      foreignKey: 'tagId'
    };

    Tag.belongsToMany(models.Question, columnMapping);
  };
  return Tag;
};
