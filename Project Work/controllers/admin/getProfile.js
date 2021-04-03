const { func } = require('joi');
const { User } = require('../../database/models/admin');



// validate user
const admin = async function (req, res, error) {

    if (!req.body.email) {
        res.send('error');
    }

    const profile = await User.findOne({
        email: req.body.email
    });
    if (!profile) {
        res.send('error');
    }
    res.send(profile);
}

module.exports = admin;