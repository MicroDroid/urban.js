/* eslint-disable prefer-promise-reject-errors */
const fetch = require('snekfetch');

class Status {
  constructor(meta) {
    this.meta = meta;
  }
  start() { return update(this.meta, 'pending'); }
  pass() { return update(this.meta, 'success'); }
  fail() { return update(this.meta, 'failure'); }
  error() { return update(this.meta, 'error'); }
}

const update = (build, state) =>
  new fetch('POST', `https://api.github.com/repos/${build.repo}/statuses/${build.sha}`)
    .set('Authorization', `token ${build.token}`)
    .send({
      state,
      context: build.label })

    .then(({ status, data }) => ({ status, data }))
    .catch(({ response = { status: 500 } }) => ({
      status: response.status,
      error: response.data,
    }));

module.exports = Status;
