const Status = require('./Status');
const { CI, TRAVIS, TRAVIS_REPO_SLUG, TRAVIS_COMMIT, STATUS_TOKEN } = process.env;
const [state, label] = process.argv.slice(2);

if (!CI || !TRAVIS) return null;

const status = new Status({
  label,
  sha: TRAVIS_COMMIT,
  token: STATUS_TOKEN,
  repo: TRAVIS_REPO_SLUG,
});

if (state == 'pending') return status.start();
return null;
