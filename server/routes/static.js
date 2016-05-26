'use strict';

const express = require('express');
const router = express.Router(); //eslint-disable-line

const directory = `${__dirname}/../../`;

router.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: `${directory}/client/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  }, (error) => {
    if (error) {
      res.status(error.status).end();
    }
  });
});

router.use('/scripts.js', express.static(`${directory}/dist/scripts.js`));
router.use('/styles.css', express.static(`${directory}/dist/styles.css`));

module.exports = router;
