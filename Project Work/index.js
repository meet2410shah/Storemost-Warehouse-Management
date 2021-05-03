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
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/pay', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

const warehouseList = require('./testData/WarehouseList');
const AdminWarehouseList = require('./testData/AdminWarehouseList');
const FarmerWarehouseList = require('./testData/FarmerWarehouseList');
const StaffList = require('./testData/StaffList');
const FarmerList = require('./testData/FarmerList');
const CropList = require('./testData/CropList');
const AdminName = require('./testData/AdminName');
const FarmerName = require('./testData/Farmer');

app.get('/view', (req, res) => {
	res.render('./Farmer/ViewProfile', { Farmer: FarmerName });
});

app.get('/edit', (req, res) => {
	res.render('./Farmer/Payment', { Farmer: FarmerName });
});

app.get('/ware', (req, res) => {
	res.render('warehouseList', { warehouseList: warehouseList });
});

app.get('/login', (req, res) => {
	res.render('Login');
});

app.get('/adminware', (req, res) => {
	res.render('./Admin/WarehouseList', {
		AdminWarehouseList: AdminWarehouseList,
	});
});

app.get('/farmerware', (req, res) => {
	res.render('./Farmer/WarehouseList', {
		FarmerWarehouseList: FarmerWarehouseList,
	});
});

app.get('/', (req, res) => {
	res.render('./Farmer/CropList', { Farmer: FarmerName, CropList: CropList });
});

app.get('/pop', (req, res) => {
	res.render('CropPopup');
});

app.listen(PORT, () => {
	console.log('Server Listening on PORT ' + PORT);
});
