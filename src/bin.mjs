#!/usr/bin/env sh
':' //; exec "$(command -v node)" "--no-warnings" "$0" "$@"

import path from 'path'

import { commands, runChildProcess } from './lib/index.mjs'

const cmdName = path.basename(process.argv[1])

if (!commands[cmdName]) {
  console.log(
    `
\u001b[31mE_COMMAND_NOT_FOUND\u001b[39m

${cmdName}

available commands:
`.trim(),
  )

  let cName = ''
  let longest = {
    g: 0,
    m: 0,
    n: 0,
  }

  const cmdInfo = Object.entries(commands)
    .map(([cmd, bash]) => {
      if (longest[cmd[0]] < cmd.length) {
        longest[cmd[0]] = cmd.length
      }

      return [cmd, bash]
    })
    .map(([cmd, bash]) => {
      let header = ''
      if (cName !== cmd[0]) {
        cName = cmd[0]

        let n = ''
        if (cName === 'g') {
          n = 'git'
        } else if (cName === 'n') {
          n = 'node'
        } else if (cName === 'm') {
          n = '@magic'
        }

        header = `\n${n}\n`
      }

      while (cmd.length < longest[cName]) {
        cmd += ' '
      }

      return `${header}${cmd} -> \u001b[94m${bash}\u001b[39m`
    })
    .join('\n')

  console.log(cmdInfo)
  process.exit(1)
}

// const cmd = commands[cmdName]
let [cmd, ...argv] = commands[cmdName].split(' ')

let [_1, _2, ...pArgv] = process.argv

argv = [...argv, ...pArgv]

runChildProcess(cmd, argv)
