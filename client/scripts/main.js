'use strict';

const Vue = require('vue');
const request = require('./utils');

const main = new Vue({ // eslint-disable-line
  el: '#people',
  data: {
    people: [],
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      setInterval(() => {
        request('GET', '/api/v1/people', undefined, (req) => {
          this.people = JSON.parse(req.responseText);
        });
      }, 1000);
    },
  },
});
