
let multer = require('multer');
let upload = multer({dest: 'uploads/'});

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/routes/index.html');
	})

	app.post('/', upload.single('userFile'), function(req, res, next) {
		console.log('got to post');
		console.log('req: ' + JSON.stringify(req.file));
		res.json({size: req.file.size});
	})
}