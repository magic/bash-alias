#!/usr/bin/env sh
':' //; exec "$(command -v node)" "--no-warnings" "$0" "$@"

import path from 'path'

import { commands, errorOnMissingCommand, runChildProcess } from './lib/index.mjs'

const cmdName = path.basename(process.argv[1])

if (!commands[cmdName]) {
  errorOnMissingCommand({ name: cmdName, commands })
}



let [cmd, ...argv] = commands[cmdName].split(' ')

let [_1, _2, ...pArgv] = process.argv

argv = [...argv, ...pArgv]

runChildProcess(cmd, argv)
