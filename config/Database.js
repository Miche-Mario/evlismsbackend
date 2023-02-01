import { Sequelize } from "sequelize";


const db = new Sequelize('evlisms','admin','CvtAz3Gz', {
    host: 'mysql-108863-0.cloudclusters.net',
    dialect: "mysql",
    port: 10273
});

export default db;