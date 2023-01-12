import { Sequelize } from "sequelize";
import db from '../config/Database.js';
import About from "./AboutModels.js";


const  {DataTypes} = Sequelize;

const Prospect = db.define('prospect', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    prospectid:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "EVLI",
        validate: {
            notEmpty: false
        }
    },
    surnameg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    forenamesg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    genderg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    dateofbirthg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100] 
        }
    },
    placeofbirthg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    citizenshipg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    occupationg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    emailg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    telhomeg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    telghanag:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    addresshomeg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    addressghanag:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    maritalg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    passportidg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    academicg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    noteg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    passportphotographg:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false
        },
        required: false
    },
    idscang:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false
        },
        required: false
    },
    surnamee:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    forenamese:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    gendere:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    relationshipe:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    occupatione:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    emaile:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    tel1e:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    tel2e:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    addresse:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    surnamep:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    forenamesp:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    genderp:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    relationshipp:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    occupationp:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    emailp:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    tel1p:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    tel2p:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    addressp:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    nameo:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    addresso:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    tel1o:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    emailo:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    contacto:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    tel2o:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
            len: [3, 100]
        }
    },
    isstudent:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    startdate:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    enddate:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    enquerydate:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    coursewish:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            notEmpty: false,
        }
    },
    
},{
    freezeTableName: true
})

Prospect.belongsTo(About, {foreignKey: 'about_aboutid'});



export default Prospect  

