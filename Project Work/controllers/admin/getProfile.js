const { func } = require('joi');
const { User } = require('../../database/models/admin');

const _ = require('lodash');

// validate user
const admin = async function (req, res, error) {

    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1100,
            msg: "Email not added in request"
        }
    }
    if (!req.body.email) {
        errRes.error = {
            code: 1100,
            msg: "Email not added in request"
        }
        res.send(errRes);
    }

    const profile = await User.findOne({
        email: req.body.email
    });
    if (!profile) {
        errRes.error = {
            code: 1101,
            msg: "User not found  in database"
        }
        res.send(errRes);
    }
    const resObj = {
        success: true,
        data: _.pick(profile, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile']),
        error: null
    };

    res.send(resObj);

}

module.exports = admin;