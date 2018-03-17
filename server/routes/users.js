const express = require('express');
const router = express.Router();
const {userCreate, userRead, userReadAll, userUpdate, userDelete} = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userReadAll);
router.post('/', userCreate);
router.get('/:userId', userRead);
router.put('/:userId', userUpdate);
router.delete('/:userId', userDelete)

module.exports = router;
