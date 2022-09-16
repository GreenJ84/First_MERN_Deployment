const mongoose = require('mongoose');
const db = 'pets_db';

mongoose.connect(`mongodb://localhost/${db}`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`All series ${db} actions have been completed`))
    .catch(err => console.log(`There was a problem estblishing port ${db}`, err));