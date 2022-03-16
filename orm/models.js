const { DataTypes } = require('sequelize');
const connection = require('./gamesdb-connection');

const Publisher = connection.define(
  'Publisher',
  {
    publisherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    publisherName: { type: DataTypes.STRING, allowNull: false },
  },
  {
    underscored: true,
    timestamps: false,
  }
);

const Platform = connection.define(
  'Platform',
  {
    platformId: {
      field: 'platform_id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    platformName: {
      field: 'platform_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'platform', timestamps: false }
);

const Games = connection.define(
    'Games',
    {
      gameId: {
        field: 'game_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      gameName: {
        field: 'game_name',
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'games', timestamps: false }
  );

const GamesPlatforms = connection.define(
  'GamesPlatforms',
  {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Games,
        key: 'gameId',
      },
    },
    platformId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Platform,
        key: 'platformId',
      },
    },
    gamesPlatformId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
);

Games.belongsToMany(Platform, {
  through: { model: GamesPlatforms },
  foreignKey: 'gameId',
});
/*Platform.belongsToMany(Games, {
  through: { model: GamesPlatforms },
  foreignKey: 'platformId',
});*/

module.exports = { Games, Platform, Publisher, GamesPlatforms };