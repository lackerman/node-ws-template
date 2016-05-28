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

router.use('/app.bundle.js', express.static(`${directory}/dist/app.bundle.js`));
router.use('/vendor.bundle.js', express.static(`${directory}/dist/vendor.bundle.js`));
router.use('/styles.css', express.static(`${directory}/dist/styles.css`));

module.exports = router;
