const express = require("express");
const login = require('../login')
const bodyParser = require("body-parser");
const request = require("supertest");

const app = express();
app.use(bodyParser.json());
app.use("/login", login);
jest.setTimeout(30000);

it("POST /login - success", async () => {
    let query = {
        "email": "wprker@gmail.com",
        "password": "temp1234",
    };
    const { body } = await request(app).post("/login").send(query);
    const temp_error = body.error;
    expect(temp_error).toBeNull();
}, 20000);

it("POST /login - success", async () => {
    let query = {
        "email": "worker@gmail.com",
        "password": "temp1234",
    };
    const { body } = await request(app).post("/login").send(query);
    const temp_siccess = body.success;
    expect(temp_success).toBe(false);
}, 20000);


it("POST /login - success", async () => {
    let query = {
        "email": "wprker@gmail.com",
    };
    const { body } = await request(app).post("/login").send(query);
    const temp_siccess = body.success;
    expect(temp_success).toBe(false);
}, 20000);

it("POST /login - success", async () => {
    let query = {
        "email": "wprker@gmail.com",
        "password": "temp12345",
    };
    const { body } = await request(app).post("/login").send(query);
    const temp_siccess = body.success;
    expect(temp_success).toBe(false);
}, 20000);

