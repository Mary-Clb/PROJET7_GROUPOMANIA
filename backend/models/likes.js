'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.likes.belongsTo(models.user, {
        onDelete: 'cascade',
        hooks: true,
        foreignKey: {
          allowNull: false
        }
        
      }),
      models.likes.belongsTo(models.post, {
        hooks: true,
        onDelete: 'cascade',
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  likes.init({
    userID: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'likes',
  });
  return likes;
};