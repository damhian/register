const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


// Create and Save a new user
exports.create = (req, res) => {
    console.log("---------------------------------------------------------------",req.body);
    // Validate request
    if (!req.body.email) {
        res.status(400).send({
            message: "Email cannot be empty"
        });
    };

    // Create a user
    const user = {
        mobile: req.body.mobile,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
    };
    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a User data."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const name = req.query.firstname + req.query.lastname;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user data."
            });
        });
};

// Find User with id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user data with id=" + id
            });
        });
};

// Update a User data by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User data was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User data with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} All User data were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all User data."
            });
        });
};

// Find all with condition
// exports.findAllbyOrigin = (req, res) => {

// };

