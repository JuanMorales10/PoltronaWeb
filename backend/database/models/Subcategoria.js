module.exports = (sequelize, DataTypes) => {
    const Subcategoria = sequelize.define("Subcategoria", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categorias",
          key: "id",
        },
      },
    }, {
      tableName: "subcategorias",
      timestamps: false,
    });
  
    Subcategoria.associate = (models) => {
      Subcategoria.belongsTo(models.Categoria, {
        foreignKey: "categoria_id",
        as: "categoria",
      });
  
      Subcategoria.hasMany(models.Producto, {
        foreignKey: "subcategoria_id",
        as: "productos",
      });
    };
  
    return Subcategoria;
  };
  