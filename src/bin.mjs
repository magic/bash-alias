#!/usr/bin/env sh
':' //; exec "$(command -v node)" "--no-warnings" "$0" "$@"

import path from 'path'

import * as commands from './commands.mjs'

import { errorOnMissingCommand, runChildProcess } from './lib/index.mjs'

const cmdName = path.basename(process.argv[1])

if (!commands[cmdName]) {
  errorOnMissingCommand({ name: cmdName, commands })
}

let [cmd, ...argv] = commands[cmdName].split(' ')

let [_1, _2, ...pArgv] = process.argv

if (cmdName === 'gc') {
  pArgv[0] = `\'${pArgv[0]}\'`
}

if (cmdName === 'gt') {
  const pArg = pArgv.join(' ')

  if (!pArg) {
    console.log('gt expects at least one argument.')
    process.exit(1)
  }

  pArgv = ['-a', `'${pArg}'`, '-m', `'${pArg}'`]
}

argv = [...argv, ...pArgv]

runChildProcess(cmd, argv)
