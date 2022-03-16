const express = require('express');


const successController = require('../controller/success');

const router = express.Router();

router.post('/',successController.postSuccess);

module.exports = router;