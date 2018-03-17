'use strict'

const router = require('express').Router();
const {itemReadAll, itemCreate, itemUpdate, itemDelete} = require('../controllers/item.controller');
const {isAdmin} = require('../middlewares/auth')

router.get('/', itemReadAll);
router.post('/', isAdmin, itemCreate);
router.put('/:itemId', isAdmin, itemUpdate);
router.delete('/:itemId', isAdmin, itemDelete);

module.exports = router;