import { commands } from '../src/lib/index.mjs'

const cmdKeys = Object.keys(commands)
const cmdValues = Object.values(commands)

const expectedCommands = {
  ga: 'git add',
  gaa: 'git add --all',
  gb: 'git branch',
  gbb: 'git checkout -b',
  gc: 'git commit -m',
  gca: 'git commit --amend',
  gd: 'git -c color.ui=always diff',
  gl: 'git -c color.ui=always log',
  gp: 'git push',
  gr: 'git remove -v',
  gra: 'git remote add',
  gs: 'git -c color.status=always status',

  nb: 'npm run build',
  nd: 'npm run dev',
  nf: 'npm run format',
  ni: 'npm install',
  np: 'npm run prod',
  ns: 'npm start',
  nt: 'npm test',
  nu: 'npm update',

  m: 'magic dev',
  mb: 'magic build',
  mc: 'magic clean',
  md: 'magic dev',
  mp: 'magic prod',
  ms: 'magic serve',
}

const expectedCmdKeys = Object.keys(expectedCommands)
const expectedCmdValues = Object.values(expectedCommands)

export default [
  ...cmdKeys.map(cmd => ({
    fn: cmd,
    expect: t => expectedCmdKeys.includes(t),
    info: `commands includes ${cmd}`,
  })),

  ...cmdValues.map(cmd => ({
    fn: cmd,
    expect: t => expectedCmdValues.includes(t),
    info: `commands includes ${cmd}`,
  })),
]
