module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define("Servicio", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    }, {
      tableName: "servicios",
      timestamps: false,
    });
  
    return Servicio;
  };
  