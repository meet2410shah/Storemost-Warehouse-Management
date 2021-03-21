const https = require("https");


const checksum_lib = require("../Paytm/checksum");
const config = require("../Paytm/config");



// const parseUrl = express.urlencoded({ extended: false });
// const parseJson = express.json({ extended: false });

var call_back = async (req, res, next) => {
    // Route for verifiying payment

    console.log("callback url called");
    var body = '';

    // console.log(req);
    req.on('data', function (data) {
        consol.log(JSON.parse(data));
        body += data;
    });


    var post_data = req.body;

    // received params in callback
    console.log('Callback Response: ', post_data, "\n");


    // verify the checksum
    var checksumhash = post_data.CHECKSUMHASH;
    // delete post_data.CHECKSUMHASH;
    var result = checksum_lib.verifychecksum(post_data, config.PaytmConfig.key, checksumhash);
    console.log("Checksum Result => ", result, "\n");


    // Send Server-to-Server request to verify Order Status
    var params = { "MID": config.PaytmConfig.mid, "ORDERID": post_data.ORDERID };

    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {

        params.CHECKSUMHASH = checksum;
        post_data = 'JsonData=' + JSON.stringify(params);

        var options = {
            hostname: 'securegw-stage.paytm.in', // for staging
            // hostname: 'securegw.paytm.in', // for production
            port: 443,
            path: '/merchant-status/getTxnStatus',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': post_data.length
            }
        };


        // Set up the request
        var response = "";
        var post_req = https.request(options, function (post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });

            post_res.on('end', function () {
                console.log('S2S Response: ', response, "\n");

                var _result = JSON.parse(response);
                if (_result.STATUS == 'TXN_SUCCESS') {
                    res.send('payment sucess')
                } else {
                    res.send('payment failed')
                }
            });
        });

        // post the data
        post_req.write(post_data);
        post_req.end();
    });
}

exports.callback = call_back;