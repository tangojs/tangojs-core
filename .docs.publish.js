
const ghPages = require('gh-pages')
const gitRevSync = require('git-rev-sync')
const gitUrlParse = require('git-url-parse')
const path = require('path')
const pkgjson = require('./package.json')

const gitUrl = gitUrlParse(pkgjson.repository.url)
const gitRef = `${gitUrl.owner}/${gitUrl.name}@${gitRevSync.short()}`
const message = `docs for ${pkgjson.version} (${gitRef})`

console.log('publishing:', message)

ghPages.publish(path.join(__dirname, 'docs'), {
  repo: 'git@github.com:tangojs/apidocs.git',
  branch: 'gh-pages',
  message: message
})
