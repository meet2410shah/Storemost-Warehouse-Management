require('dotenv').config();
require('./database/connection');

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const version = process.env.VERSION;
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(cors());

// Routes
const admin = require('./routes/admin');
const supervisor = require('./routes/super');
const farmer = require('./routes/farmer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use(`${version}/admin`, admin);
app.use(`${version}/supervisor`, supervisor);
app.use(`${version}/farmer`, farmer);

const warehouseList = require("./testData/WarehouseList")
const AdminWarehouseList = require("./testData/AdminWarehouseList")
const FarmerWarehouseList = require("./testData/FarmerWarehouseList")

app.get('/view', (req, res) => {
	res.render("ViewProfile");
});

app.get('/edit', (req, res) => {
	res.render("EditProfile");
});

app.get('/ware', (req, res) => {
	res.render("warehouseList",{warehouseList: warehouseList});
});

app.get('/login', (req, res) => {
	res.render("Login");
});

app.get('/adminware', (req, res) => {
	res.render("AdminWarehouseList",{AdminWarehouseList: AdminWarehouseList});
});

app.get('/farmerware', (req, res) => {
	res.render("FarmerWarehouseList",{FarmerWarehouseList: FarmerWarehouseList});
});

app.get('/', (req, res) => {
	res.render("supervisor-staff");
});

app.listen(PORT, () => {
	console.log('Server Listening on PORT ' + PORT);
});
