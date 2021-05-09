const express = require("express");
const register = require('../register')
const bodyParser = require("body-parser");
const request = require("supertest");

const app = express();
app.use(bodyParser.json());
app.use("/register", register);
jest.setTimeout(30000);


it("POST /register - success", async () => {
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
    const temp_error = body.error;
    expect(temp_error).toBeNull();
}, 20000);


it("POST /register - success", async () => {
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
    expect(body).toEqual({
        success: false,
        data: null,
        error: { code: 1021, msg: "This username has already been taken." },
    });
}, 20000);


it("POST /register - success", async () => {
    let query = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "username": "temp12345",
        "password": "temp1234",
        "email": "wprker@gmail.com",
        "mobile": "655274527",
        "warehouseId": 1,
        "confirm password": "temp1234",
    };
    const { body } = await request(app).post("/register").send(query);
    expect(body).toEqual({
        success: false,
        data: null,
        error: { code: 1022, msg: "User already exists" },
    });
}, 20000);

/* it("POST /register - success", async () => {
    let query = {
        "firstName": "hamnsh",
        "lastName": "javdes",
        "username": "temp12345",
        "password": "temp1234",
        "email": "worker@gmail.com",
        "mobile": "655274527",
        "warehouseId": 1,
        "confirm password": "temp1234",
    };
    const { body } = await request(app).post("/register").send(query);
    expect(body).toEqual({
        success: false,
        data: null,
        error: { code: 1023, msg: "Supervisor for that warehouse already exists" },
    });
}, 20000); */