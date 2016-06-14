/* jshint node: true */
'use strict';
const execSync = require('child_process').execSync;

module.exports = {
  message: ':tada: %@',
  publish: true,
  yes: true,
  init(project, tags) {
    execSync(`git hf release start ${tags.next}`, (err) => {
      if (err) {
        throw new Error('Could not complete starting a hubflow release');
      }
    });
  },

  afterPush(project, tags) {
    execSync(`git hf release finish ${tags.next}`, (err) => {
      if (err) {
        throw new Error('Could not complete finishing a hubflow release');
      }
    });
  },
};
