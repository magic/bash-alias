export const commands = {
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

  // git shortcust
  gcbump: "git commit -m 'bump version' ./package.json ./package-lock.json",
  gcdeps: "git commit -m 'update deps' ./package.json ./package-lock.json",
  gcdevdeps: "git commit -m 'update devdeps' ./package.json ./package-lock.json",
  gcdocs: "git commit -m 'update docs' ./docs",
  gclog: "git commit -m 'readme: update changelog' ./README.md",
  gcread: "git commit -m 'update readme' ./README.md",

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

  cb: 'cargo build',
  cc: 'cargo check',
  cf: 'cargo fmt -v',
  ci: 'cargo install',
  cr: 'cargo run',
  ct: 'cargo test',
  cw: 'cargo watch',
  cwr: 'cargo watch -x run',
}
