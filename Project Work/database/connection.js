const mongoose = require('mongoose');

const CONNECTION_URL = process.env.DB_CONNECTION_URL;

// console.log(CONNECTION_URL);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true })
	.then(() => {
		console.log('Database Connection Successful');
	})
	.catch((err) => {
		console.log('ERROR:', err);
	});
