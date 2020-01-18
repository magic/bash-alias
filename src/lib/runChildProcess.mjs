import child_process from 'child_process'

export const runChildProcess = (cmd, argv = []) => {
  const child = child_process.spawn(cmd, argv, { windowsHide: true })

  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)

  return child
}
