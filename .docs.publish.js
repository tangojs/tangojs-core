
const version = require('./package.json').version
const ghPages = require('gh-pages')
const git = require('git-rev-sync')
const path = require('path')

ghPages.publish(path.join(__dirname, 'docs'), {
  repo: 'git@github.com:tangojs/apidocs.git',
  branch: 'gh-pages',
  message: `docs for ${version} (@${git.short()})`
})
