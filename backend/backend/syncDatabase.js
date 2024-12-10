require('dotenv').config();
const { connectDB } = require('./db');
connectDB();

const Use = require('./models/use')
const User = require('./models/User');
const Scheme=require('./models/Scheme')
const Proposal=require('./models/PropSubmission')
const Document=require('./models/Document')
const Evaluation=require('./models/Evaluation')

User.hasMany(Proposal, { foreignKey: 'userId' }); 
Proposal.belongsTo(User, { foreignKey: 'userId' }); 

Scheme.hasMany(Proposal, { foreignKey: 'schemeId' }); 
Proposal.belongsTo(Scheme, { foreignKey: 'schemeId' }); 

Proposal.hasMany(Document, { foreignKey: 'propId' }); 
Document.belongsTo(Proposal, { foreignKey: 'propId' }); 

Proposal.hasMany(Evaluation, { foreignKey: 'propId' }); 
Evaluation.belongsTo(Proposal, { foreignKey: 'propId' }); 

const syncDatabase = async () => {
    try {
        await User.sync({ alter: true });
        await Scheme.sync({ alter: true });
        await Proposal.sync({ alter: true });
        await Document.sync({alter:true});
        await Evaluation.sync({alter:true});
        console.log('Database synchronized with relationships!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();
