import child_process from 'child_process'

const options = {
  windowsHide: true,
  stdio: 'inherit',
  shell: '/bin/bash',
}

export const runChildProcess = (cmd, argv = [], proc = process) =>
  child_process.spawn(cmd, argv, options)
