module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria", {
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
      tableName: "categorias",
      timestamps: false,
    });
  
    Categoria.associate = (models) => {
      Categoria.hasMany(models.Subcategoria, {
        foreignKey: "categoria_id",
        as: "subcategorias",
      });
    };
  
    return Categoria;
  };
  