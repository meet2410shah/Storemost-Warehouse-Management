const express = require("express");
const registerTest = require('../registerTest')
const bodyParser = require("body-parser");
const request = require("supertest");

const app = express();
app.use(bodyParser.json());
app.use("/registerTest", registerTest);
jest.setTimeout(30000);


it("POST /registerTest - success", async () => {
    let query = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        //"username": "temp1234",
        "password": "temp1234",
        "email": "wprker@gmail.com",
        "mobile": "655274527",
        "warehouseId": 1,
        "confirm password": "temp1234",
    };
    const { body } = await request(app).post("/register").send(query);
    const temp_success = body.success;
    expect(temp_success).toBe(false);
}, 20000);

it("POST /registerTest - success", async () => {
    let query = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "username": "temp1234",
        "password": "temp1234",
        "mobile": "655274527",
        "warehouseId": 1,
        "confirm password": "temp1234",
    };
    const { body } = await request(app).post("/register").send(query);
    const temp_success = body.success;
    expect(temp_success).toBe(false);
}, 20000);


it("POST /registerTest - success", async () => {
    let query = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "username": "temp1234",
        "password": "temp1234",
        "email": "wprker@gmail.com",
        "mobile": "655274527",
        "warehouseId": 1,
        "confirm password": "temp1234",
    };
    const { body } = await request(app).post("/register").send(query);
    const temp_success = body.success;
    expect(temp_success).toBe(true);
}, 20000);
