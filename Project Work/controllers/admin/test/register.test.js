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
        "email": "wprker@gmail.com",
        "mobile": "655274527",
        "password": "temp1234",
        "confirm password": "temp1234",
    };
    const { body } = await request(app).post("/register").send(query);
    expect(body).toEqual({
        
    });
}, 20000);