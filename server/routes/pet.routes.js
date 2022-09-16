const PetController = require('../controllers/pet.controller');

module.exports = app => {
    
    app.get('/pets/get', PetController.findAll);
    app.get('/pet/:id', PetController.findOne);
    app.post('/pet/new', PetController.createNew);
    app.put('/pet/update/:id', PetController.update);
    app.delete('/pet/delete/:id', PetController.delete);
    
}