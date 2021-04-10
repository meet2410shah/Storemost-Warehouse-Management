const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/admin');
const { validate } = require('./validate_admin');
const { validatewp } = require('./validatewp');



const admin = async function (req, res) {
    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1100,
            msg: "Email not added in request"
        }
    }

    if (!req.body.email) {
        res.send(errRes);
    }
    const filter = { email: req.body.email };
    const user = await User.findOne(filter);
    if (!user) {
        errRes.error = {
            code: 1101,
            msg: "User not found  in database"
        }
        res.send(errRes);
    }
    var arr = ["firstName", "lastName", "username", "email", "mobile"];

    let update = {};
    for (var i = 0; i < arr.length; i++) {
        // console.log(req.body[arr[i]]);
        if (req.body[arr[i]]) {
            update[arr[i]] = req.body[arr[i]];
        } else {
            update[arr[i]] = user[arr[i]];
        }
    }

    // console.log(update);
    if (req.body.password) {
        if (req.body['password'] !== req.body['confirmPassword']) {
            errRes.error = {
                code: 1102,
                msg: "confirm Password not match"
            }
            res.send(errRes);
        }
        update.password = req.body['password'];
        // console.log(update);
        const { error } = validate(update);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);
    } else {
        const { error } = validatewp(update);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
    }





    // `doc` is the document _before_ `update` was applied
    let profile = await User.findOneAndUpdate(filter, update);


    profile = await User.findOne(filter);

    res.send(_.pick(profile, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile']));
}

module.exports = admin;