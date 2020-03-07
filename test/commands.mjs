import fs from 'fs'
import path from 'path'

import { is, log } from '@magic/test'

import * as commands from '../src/commands.mjs'

const cmdEntries = Object.entries(commands)

const pkgContent = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
const pkg = JSON.parse(pkgContent)
const bin = pkg.bin

const expectedCommands = {
  // ls
  ll: 'ls -alF --color',
  la: 'ls -A --color',
  l: 'ls -CF --color',

  // git
  ga: 'git add',
  gaa: 'git add --all',
  gb: 'git branch',
  gbb: 'git checkout -b',
  gc: 'git commit -m',
  gca: 'git commit --amend',
  gd: 'git -c color.ui=always diff',
  gl: 'git -c color.ui=always log',
  gp: 'git push',
  gps: 'git push --set-upstream',
  gr: 'git remote -v',
  gra: 'git remote add',
  grr: 'git remote remove',
  gs: 'git -c color.status=always status',
  gt: 'git tag',

  // git shortcuts
  gcbump: "git commit -m 'version: bump' ./package.json ./package-lock.json",
  gcdeps: "git commit -m 'deps: update' ./package.json ./package-lock.json",
  gcdevdeps: "git commit -m 'devdeps: update' ./package.json ./package-lock.json",
  gcdocs: "git commit -m 'docs: update' ./docs",
  gclog: "git commit -m 'readme: update changelog' ./README.md",
  gcread: "git commit -m 'readme: update' ./README.md",

  // node
  nb: 'npm run build',
  nd: 'npm run dev',
  nf: 'npm run format',
  ni: 'npm install',
  np: 'npm run prod',
  ns: 'npm start',
  nt: 'npm test',
  nu: 'npm update',

  // @magic
  m: 'magic dev',
  mb: 'magic build',
  mc: 'magic clean',
  md: 'magic dev',
  mp: 'magic prod',
  ms: 'magic serve',

  // rust

  cr: 'cargo run',
  cb: 'cargo build',
  cf: 'cargo fmt -v',
  ci: 'cargo install',
  cch: 'cargo check',
  cw: 'cargo watch',
  cwr: 'cargo watch -x run',
  ct: 'cargo test',
}

const expectedCmdKeys = Object.keys(expectedCommands)

export default [
  ...cmdEntries.map(([k]) => ({
    fn: expectedCmdKeys.includes(k),
    expect: true,
    info: `expectedCommands includes ${k}`,
  })),

  ...cmdEntries.map(([k, cmd]) => ({
    fn: cmd,
    expect: expectedCommands[k],
    info: `expectedCommands[k] equals ${cmd}`,
  })),

  {
    fn: Object.keys(bin).length,
    expect: expectedCmdKeys.length,
    info: 'pkg.bin and expected have same length',
  },
  {
    fn: Object.keys(bin).length,
    expect: cmdEntries.length,
    info: 'pkg.bin and commands have same length',
  },

  {
    fn: expectedCmdKeys.filter(a => {
      if (!bin[a]) {
        log.error('E_MISSING_BIN', `package.json bin entry is missing ${a}`)
        return true
      }
      return false
    }),
    expect: is.len.eq(0),
  },
]
