const Status = require('./Status');
const { CI, TRAVIS, TRAVIS_REPO_SLUG, TRAVIS_COMMIT } = process.env;
const [state, label] = process.argv.slice(2);

if (!CI || !TRAVIS) return null;
console.log(TRAVIS_COMMIT);

// const status = new Status({
//   label,
//   sha: head_commit.id,
//   repo: TRAVIS_REPO_SLUG,
//   token: '8aecb733f5897c3c626fe33d8f9bc075698b2300',
// });
//
// if (state == 'pending') return status.start();
return null;
