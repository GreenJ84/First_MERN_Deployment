const PetController = require('../controllers/pet.controller');

module.exports = app => {
    
    app.get('/api/pets/get', PetController.findAll);
    app.get('/api/pet/:id', PetController.findOne);
    app.post('/api/pet/new', PetController.createNew);
    app.put('/api/pet/update/:id', PetController.update);
    app.delete('/api/pet/delete/:id', PetController.delete);
    
}