#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const box = {
  borderColor: '#71bef2',
  borderStyle: 'round',
  margin: 1,
  padding: 1,
}

const data = {
  name: chalk.green.bold('Rickard Laurin'),
  work: chalk.magenta('Full-Stack Developer'),
  twitter: chalk.blue('https://twitter.com/rickardlaurin'),
  github: chalk.blue('https://github.com/believer'),
  linkedin: chalk.blue('https://linkedin.com/in/rickardlaurin'),
  web: chalk.blue('https://willcodefor.beer'),
}

const text = `
${data.name}
${data.work}

${chalk.white.bold('Twitter:')} ${data.twitter}
${chalk.white.bold('GitHub:')} ${data.github}
${chalk.white.bold('LinkedIn:')} ${data.linkedin}
${chalk.white.bold('Web:')} ${data.web}
`

console.log(boxen(text, box))
