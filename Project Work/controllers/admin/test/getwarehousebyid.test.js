const express = require("express");
const getwarehousebyid = require('../getwarehousebyid')
const bodyParser = require("body-parser");
const request = require("supertest");

const app = express();
app.use(bodyParser.json());
app.use("/getwarehousebyid", getwarehousebyid);
jest.setTimeout(30000);

it("POST /getwarehousebyid - success", async () => {
    let query = {};
    const { body } = await request(app).post("/getwarehousebyid").send(query);
    expect(body).toEqual({
        sucess: false,
		data: null,
        error: {
			code: 1122,
			msg: 'warehouse Id not found in request',
		}
    });
}, 20000);

it("POST /getwarehousebyid - success", async () => {
    let query = {
        "warehouseId": 10
    };
    const { body } = await request(app).post("/getwarehousebyid").send(query);
    expect(body).toEqual({
        sucess: false,
		data: null,
        error: {
			code: 1121,
			msg: 'No warehouse found with id',
		},
    });
}, 20000);


/* 
it("POST /getwarehousebyid - success", async () => {
    let query = {
        "warehouseId": 1
    };
    const { body } = await request(app).post("/getwarehousebyid").send(query);
    expect(body).toEqual({
        sucess: false,
        data: {
            warehouseId: 1,
            capacity: "3000 Quintal",
            available: "1020 Quintal",
            address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit anim id est laborum.",
            mobile: "+2736487903870"
        },
        error: null
    });
}, 20000); */



// "test": "jest --testEnvironment=node --verbose --forceExit --watchAll --maxWorkers=1",