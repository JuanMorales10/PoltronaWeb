module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define("Producto", {
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
      subcategoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "subcategorias",
          key: "id",
        },
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      material: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tapizado: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dimensiones: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, {
      tableName: "productos",
      timestamps: false,
    });
  
    Producto.associate = (models) => {
      Producto.belongsTo(models.Subcategoria, {
        foreignKey: "subcategoria_id",
        as: "subcategoria",
      });
    };
  
    return Producto;
  };
  