const { Pet } = require('../models/pet.model');

module.exports.findAll = (req, res) => {
    Pet.find().sort({pType: 1})
        .then( pets => res.status(200).json(pets))
        .catch(err => res.status(400).json({ message: 'There has been a findAll controller error', error: err}))
}

module.exports.findOne = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then( pet => res.status(200).json(pet))
        .catch(err => res.status(400).json({ message: 'There has been a findOne controller error', error: err}))
}

module.exports.createNew = (req, res) => {
    Pet.exists({pName: req.body.pName})
    .then(petExists => {
        if (petExists) {
            return Promise.reject('A Pet with that name already exsists');
        }
        return Pet.create(req.body)
    })
    .then( res => res.status(200).json(res))
    .catch( err => res.status(400).json({ message: 'There has been a create controller error', error: err}));
}

module.exports.update = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then( pet => res.status(200).json(pet))
        .catch(err => res.status(400).json({ message: 'There has been a updateOne controller error', error: err}))
}

module.exports.delete = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then( res => res.status(200).json(res))
        .catch( err => res.json({ message: 'There has been a delete controller error', error: err}))
}
