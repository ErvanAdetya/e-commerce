'use strict'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    login: (req, res) => {
        User
        .findOne({email: req.body.email})
        .then((user) => {
            if(user) {
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(200).json({
                        // user,
                        token: jwt.sign({
                            id: user._id,
                            role: user.role
                        }, process.env.JWT)
                    })
                } else {
                    reject();
                }
            } else {
                reject();
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Incorrect email or password!'
            })
        })
    }
}