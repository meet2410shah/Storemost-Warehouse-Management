const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/admin');
const { validate } = require('./validate_admin');



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



    const update = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        mobile: req.body.mobile
    };
    if (req.body.password) {
        update.password = req.body.password;
    }

    const { error } = validate(update);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);

    // `doc` is the document _before_ `update` was applied
    let profile = await User.findOneAndUpdate(filter, update);


    profile = await User.findOne(filter);

    res.send(_.pick(profile, ['_id', 'username', 'email']));
}

module.exports = admin;