const bcrypt = require("bcrypt");
const _ = require("lodash");
const { adminUser } = require("../../database/models/admin");
const { validate } = require("./validate_login");
const { errorCustom } = require("../error/error");

const LoginAdmin = async (req, res) => {

    let errRes = {
        sucess: false,
        data: null,
        error: {
            code: 1100,
            msg: "Email not added in request"
        }
    }
    const { error } = validate(req.body);
    if (error) {
        const errorBlock = errorCustom(
            error.details[0].path[0],
            error.details[0].type
        );
        errRes.error = {
            code: 1003,
            msg: error.details[0].path[0]
        }
        return res.send(errRes);
    }

    let user = await adminUser.findOne({ email: req.body.userEmail });
    if (!user) {
        user = await adminUser.findOne({ username: req.body.userEmail });
    }
    if (!user) {
        errRes.error = {
            code: 1052,
            msg: "incorrect email/username or password"
        }
        return res.send(errRes);
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.send({
            status: "Fail",
            data: null,
            error: { errCode: 1052, msg: "Incorrect email/username or password." },
        });
    }

    let data = {
        userEmail: user.email,
    };

    res.cookie("cookiedata", JSON.stringify(data));

    return res.send({
        status: "Pass",
        data: user,
        error: null,
    });

}

module.exports = LoginAdmin;
