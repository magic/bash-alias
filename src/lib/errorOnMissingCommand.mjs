export const errorOnMissingCommand = ({ name, commands }) => {
  console.log(
    `
\u001b[31mE_COMMAND_NOT_FOUND\u001b[39m

${name}

available commands:`.trim(),
  )

  let cName = ''
  let longest = {
    g: 0,
    m: 0,
    n: 0,
    r: 0,
    l: 0,
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
        } else if (cName === 'l') {
          n = 'directory listings'
        } else if (cName === 'r') {
          n = 'rust'
        }

        header = `\n${n}\n`
      }

      while (cmd.length < longest[cName]) {
        cmd += ' '
      }

      return `${header}${cmd} -> \u001b[94m${bash}\u001b[39m`
    })
    .join('\n')
    .trim()

  console.log(cmdInfo)
  process.exit(1)
}
