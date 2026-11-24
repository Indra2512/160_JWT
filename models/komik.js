module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            types: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            types: DataTypes.STRING,
        },
        description: {
            types: DataTypes.STRING,
        },
        author: {
            types: DataTypes.STRING,
        }
    });
    return Komik;
};