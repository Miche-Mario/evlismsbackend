import { Sequelize } from "sequelize";


const db = new Sequelize('evlisms','evlisms','evlismss', {
    host: 'db4free.net',
    dialect: "mysql",
    port: 3306
});

export default db;