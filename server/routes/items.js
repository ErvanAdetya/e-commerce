'use strict'

const router = require('express').Router();
const {itemReadAll, itemCreate, itemUpdate, itemDelete} = require('../controllers/item.controller');

router.get('/', itemReadAll);
router.post('/', itemCreate);
router.put('/:itemId', itemUpdate);
router.delete('/:itemId', itemDelete);

module.exports = router;