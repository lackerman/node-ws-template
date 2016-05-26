'use strict';

const express = require('express');
const router = express.Router(); //eslint-disable-line

// Insert your API endpoints here
router.get('/people', (req, res) => {
  res.json([{
    name: 'John Doe',
  }, {
    name: 'Jane Doe',
  }, {
    name: 'Dane Joe',
  }]);
});

module.exports = router;
