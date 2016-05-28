'use strict';

const Vue = require('vue');
const request = require('axios');

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
        request
          .get('/api/v1/people', {
            responseType: 'json',
          })
          .then((res) => {
            this.people = res.data;
          });
      }, 1000);
    },
  },
});
