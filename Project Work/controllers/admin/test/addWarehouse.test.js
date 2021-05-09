const express = require("express");
const addWarehouse = require('../addWarehouse')
const bodyParser = require("body-parser");
const request = require("supertest");

const app = express();
app.use(bodyParser.json());
app.use("/addWarehouse", addWarehouse);
jest.setTimeout(30000);

it("POST /addWarehouse - success", async () => {
    let warehouse = {
        "name": "Ahmedabad Warehouse",
        //"storage": "5000",
        "address": "Sidi Saiyad ni jali, Lal Darwaja, Ahmedabad"
    };
    const { body } = await request(app).post("/addWarehouse").send(warehouse);
    expect(body).toEqual({
        sucess: false,
        data: null,
        error: {
			code: 1053,
			msg: 'storage is empty',
		}
    });
}, 20000);

it("POST /addWarehouse - success", async () => {
    let warehouse = {
        //"name": "Ahmedabad Warehouse",
        "storage": "5000",
        "address": "Sidi Saiyad ni jali, Lal Darwaja, Ahmedabad"
    };
    const { body } = await request(app).post("/addWarehouse").send(warehouse);
    expect(body).toEqual({
        sucess: false,
        data: null,
        error: {
			code: 1052,
			msg: 'Warehouse name is empty',
		},
    });
}, 20000);

it("POST /addWarehouse - success", async () => {
    let warehouse = {
        "name": "Ahmedabad Warehouse",
        "storage": "5000",
        //"address": "Sidi Saiyad ni jali, Lal Darwaja, Ahmedabad"
    };
    const { body } = await request(app).post("/addWarehouse").send(warehouse);
    expect(body).toEqual({
        sucess: false,
        data: null,
        error: {
			code: 1054,
			msg: 'address is empty',
		}
    });
}, 20000);


/* it("POST /addWarehouse - success", async () => {
    let warehouse = {
        "name": "Ahmedabad Warehouse",
        "storage": "5000",
        "address": "Sidi Saiyad ni jali, Lal Darwaja, Ahmedabad"
    };
    const { body } = await request(app).post("/addWarehouse").send(warehouse);
    expect(body.sucess).toBe(true);
    expect(body.error).toBe(null);
    expect(body.data.name).toBe("Ahmedabad Warehouse");
    expect(body.data.storage).toBe(500);
    expect(body.data.address.location).toBe("Sidi Saiyad ni jali, Lal Darwaja, Ahmedabad");
}, 20000); */



// "test": "jest --testEnvironment=node --verbose --forceExit --watchAll --maxWorkers=1",