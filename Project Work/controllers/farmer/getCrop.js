const jwt = require('jsonwebtoken');
const { Farmer } = require('../../database/models/');

module.exports = async (req, res) => {
    const token = req.cookies.token;
    // Check the Existance of Token
    if (!token) {
        return res.send({
            success: false,
            data: null,
            error: {
                code: 1001,
                msg: "User Does'nt exists",
            },
        });
    }

    // Check if Token is not corrupted
    try {
        const { user } = jwt.verify(token, process.env.SECRET);
        const userId = user._id;
        Farmer.findOne({ _id: userId }, async (err, data) => {
            // Check if there is an error from mongoose or not
            if (err) {
                return res.send({
                    success: false,
                    data: null,
                    error: {
                        code: 1003,
                        msg: 'Database Error',
                    },
                });
            }

            // Generation of Response
            console.log(req.query);
            const cropid = req.query.cropid;
            const token = req.cookies.token;
            // Check the Existance of Token
            if (!token) {
                return res.send({
                    success: false,
                    data: null,
                    error: {
                        code: 1001,
                        msg: 'Login again',
                    },
                });
            }
            let { user } = jwt.verify(token, process.env.SECRET);
            if (!user) return res.send('ERROR');
            const userEmail = user.email;
            if (!userEmail) {
                errRes.error = {
                    code: 1100,
                    msg: 'User not logged in',
                };
                return res.send(errRes);
            }

            const filter = { email: userEmail };
            // console.log(userEmail);
            user = await Farmer.findOne(filter);
            if (!user) {
                errRes.error = {
                    code: 1101,
                    msg: 'User not found  in database',
                };
                return res.send(errRes);
            }
            let crop;
            for (var i = 0; i < user.crops.length; i++) {
                if (user.crops[i]._id == cropid) {
                    crop = user.crops[i];
                    break;
                }
            }
            // console.log(crop);
            return res.render('./Farmer/CropPopup', {
                data: {
                    URL: process.env.PRODUCTION_URL,
                    crop,
                    farmer: user,
                },
            });
        });
    } catch (err) {
        return res.send({
            success: false,
            data: null,
            error: {
                code: 1002,
                msg: 'Token is Corrupted',
            },
        });
    }
};
