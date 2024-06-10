const {
  sequelize,
  DataTypes,
  Sequelize,
} = require("../config/mysql-sequelize");

const TGUser = sequelize.define(
  "TGUser",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    langauage_code: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    referral: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    modified_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "tg_users",
    timestamps: true,
    createdAt: "created_date",
    updatedAt: "modified_date",
    hooks: {
      beforeUpdate: (user, options) => {
        user.modified_date = new Date();
      },
    },
  }
);

module.exports = TGUser;
