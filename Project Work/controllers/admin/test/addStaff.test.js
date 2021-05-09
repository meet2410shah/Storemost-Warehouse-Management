const express = require("express");
const addStaff = require('../addStaff')
const bodyParser = require("body-parser");
const request = require("supertest");

const app = express();
app.use(bodyParser.json());
app.use("/addStaff", addStaff);
jest.setTimeout(30000);

it("POST /addStaff - success", async () => {
    let staff = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "role": "wprker",
        "mobile": "655274527",
        "salary": "67483",
        "warehouseId": 16271
    };
    const { body } = await request(app).post("/addStaff").send(staff);
    expect(body).toEqual({
        sucess: false,
        data: null,
        error: {
            code: 1056,
            msg: 'warehouse not found with given warehouseId',
        },
    });
}, 20000);

it("POST /addStaff - success", async () => {
    let staff = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "role": "wprker",
        //"mobile": "655274527",
        "salary": "67483",
        "warehouseId": 16271
    };
    const { body } = await request(app).post("/addStaff").send(staff);
    expect(body).toEqual({
        sucess: false,
        data: null,
        error: {
            code: 1060,
            msg: 'mobile require to add staff',
        },
    });
}, 20000);

it("POST /addStaff - success", async () => {
    let staff = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "role": "wprker",
        "mobile": "655274527",
        //"salary": "67483",
        "warehouseId": 16271
    };
    const { body } = await request(app).post("/addStaff").send(staff);
    expect(body).toEqual({
        sucess: false,
        data: null,
        error: {
            code: 1058,
            msg: 'salary require to add staff',
        },
    });
}, 20000);

it("POST /addStaff - success", async () => {
    let staff = {
        "firstName": "Added by Param for testing",
        "lastName": "javdes",
        "role": "wprker",
        "mobile": "655274527",
        "salary": "67483",
        "warehouseId": "1",
    };
    const { body } = await request(app).post("/addStaff").send(staff);
    expect(body.error).not.toBeNull();
    /* expect(body).toEqual({
        sucess: true,
        data: {
            "firstName": "Added by Param for testing",
            "lastName": "javdes",
            "role": "wprker",
            "mobile": "655274527",
            "salary": 67483,
            "warehouseId": 1
        },
        error: null
    }); */
}, 20000);

// "test": "jest --testEnvironment=node --verbose --forceExit --watchAll --maxWorkers=1",