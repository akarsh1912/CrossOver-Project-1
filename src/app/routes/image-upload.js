const express = require('express');
const router = express.Router();
const upload = require('../services/image-upload');

const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

const singleUpload = upload.single('image');

router.post('/image-upload', function(req, res) {

    singleUpload(req, res, function(err){

        return res.json({'imageUrl': req.file.location})
    });
});

module.exports = router;