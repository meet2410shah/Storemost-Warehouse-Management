const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../../database/models/admin');
const { validate } = require('./validate_admin');



const admin = async function (req, res) {

    if (!req.body.email) {
        res.send('error');
    }
    const filter = { email: req.body.email };
    if (!User.findOne(filter)) {
        res.send('error');
    }

    const pass = _.pick(User.find(filter), ['password']);

    if (req.bosy.password) {
        pass = req.body.password;
    }
    const update = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: pass,
        mobile: req.body.mobile
    };

    const { error } = validate(req.body);
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