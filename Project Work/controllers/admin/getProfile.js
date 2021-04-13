const { func } = require('joi');
const { adminUser } = require('../../database/models/admin');

const { checkCookie } = require('../cookies/checkCookie')
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
    const objt = checkCookie(req.cookies);

    const mainObj = JSON.parse(objt.cookiedata);

    console.log(mainObj);
    if (!mainObj.userEmail) {
        errRes.error = {
            code: 1100,
            msg: "user not logged in"
        }
        return res.send(errRes);
    }

    const profile = await adminUser.findOne({
        email: mainObj.userEmail
    });
    if (!profile) {
        errRes.error = {
            code: 1101,
            msg: "User not found  in database"
        }
        return res.send(errRes);
    }
    const resObj = {
        success: true,
        data: _.pick(profile, ['_id', 'firstName', 'lastName', 'username', 'password', 'email', 'mobile']),
        error: null
    };

    res.send(resObj);

}

module.exports = admin;