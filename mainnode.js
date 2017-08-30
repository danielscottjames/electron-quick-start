const { fork } = require('child_process')

fork(`${__dirname}/child.js`, [], {
  execArgv: ['--expose-gc']
});