// ls
export const ll = 'ls -alF --color'
export const la = 'ls -A --color'
export const l = 'ls -CF --color'

// git
export const ga = 'git add'
export const gaa = 'git add --all'
export const gb = 'git branch'
export const gbb = 'git checkout -b'
export const gc = 'git commit -m'
export const gca = 'git commit --amend'
export const gd = 'git -c color.ui=always diff'
export const gl = 'git -c color.ui=always log'
export const gp = 'git push'
export const gps = 'git push --set-upstream'
export const gr = 'git remote -v'
export const gra = 'git remote add'
export const grr = 'git remote remove'
export const gs = 'git -c color.status=always status'
export const gt = 'git tag'

// git shortcuts
export const gcbump = "git commit -m 'version: bump' ./package.json ./package-lock.json"
export const gcdeps = "git commit -m 'deps: update' ./package.json ./package-lock.json"
export const gcdevdeps = "git commit -m 'devdeps: update' ./package.json ./package-lock.json"
export const gcdocs = "git add ./docs && git commit -m 'docs: update'"
export const gclog = "git commit -m 'readme: update changelog' ./README.md"
export const gcread = "git commit -m 'readme: update' ./README.md"
export const gcdist = "git commit -m 'dist: update' dist"

// node
export const nb = 'npm run build'
export const nd = 'npm run dev'
export const nf = 'npm run format'
export const ni = 'npm install'
export const np = 'npm run prod'
export const ns = 'npm start'
export const nt = 'npm test'
export const nu = 'npm update'
export const nr = 'npm run'

// @magic
export const m = 'magic dev'
export const mb = 'magic build'
export const mc = 'magic clean'
export const md = 'magic dev'
export const mp = 'magic prod'
export const ms = 'magic serve'

// rust
export const cb = 'cargo build'
export const cch = 'cargo check'
export const cf = 'cargo fmt -v'
export const ci = 'cargo install'
export const cr = 'cargo run'
export const ct = 'cargo test'
export const cw = 'cargo watch'
export const cwr = 'cargo watch -x run'
