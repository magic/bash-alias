# @magic/bash-alias

installs useful git, node, rust, and [@magic](https://magic.github.io) aliases.

**POLLUTES THE NAMESPACE OF YOUR BASH WITH ONE AND TWO LETTER COMMANDS.**

_fortunately, the rest of the linux ecosystem seems to be smart enough not to do that too often._

## known name clashes:

- gs = [ghostscript](https://en.wikipedia.org/wiki/Ghostscript).
- ll, la, l: exist on some operating systems. should be no change in behaviour though.

## installation

```bash
npm i -g @magic/bash-aliases
```

## aliases

strings in ${} are expected cli arguments

### ls

```bash
ll -> ls -alF --color
la -> ls -A --color
l  -> ls -CF --color
```

### git

```bash
ga   -> git add ${...files}
gaa  -> git add --all
gb   -> git branch
gbb  -> git checkout -b ${name}
gc   -> git commit -m "message string" ${...files}
gca  -> git commit --amend
gd   -> git -c color.ui=always diff
gl   -> git -c color.ui=always log
gp   -> git push
gps  -> git push --set-upstream ${remote} ${branch}
gr   -> git remote -v
gra  -> git remote add ${name} ${url}
grr  -> git remote remove ${name},
gs   -> git -c color.status=always status
gt   -> git tag -a '...ARGV' -m '...ARGV'
```

### git shortcuts

```bash
gcbump    -> git commit -m 'version: bump' ./package.json ./package-lock.json"
gcdeps    -> git commit -m 'deps: update' ./package.json ./package-lock.json"
gcdevdeps -> git commit -m 'devdeps: update ' ./package.json ./package-lock.json"
gcdist    -> git commit -m 'dist: update' ./dist"
gcdocs    -> git commit -m 'docs: update' ./docs"
gclog     -> git commit -m 'readme: update changelog' ./README.md"
gcread    -> git commit -m 'readme: update' ./README.md"
```

### node

```bash
nb  -> npm run build
nd  -> npm run dev
nf  -> npm run format
ni  -> npm install
np  -> npm run prod
nr  -> npm run
ns  -> npm start
nt  -> npm test
nu  -> npm update
```

### @magic

```bash
m   -> magic dev
mb  -> magic build
mc  -> magic clean
md  -> magic dev
mp  -> magic prod
ms  -> magic serve
```

### rust

```bash
cb  -> cargo build
cch -> cargo check
cf  -> cargo fmt -v
ci  -> cargo install
cr  -> cargo run
ct  -> cargo test
cw  -> cargo watch
cwr -> cargo watch -x run
```

### changelog

#### 0.0.1

first release

#### 0.0.2

add colors to directory listings.

#### 0.0.3

- update git commit messages
- fix docs

#### 0.0.4

- rename cc to cch to prevent name clash.
- add gt => git tag -a $1 -m $1

#### 0.0.5

bump required node version to 14.2.0

#### 0.0.6

- bump required node version to 14.15.4
- update dependencies

##### 0.0.7

gcdocs: "git add docs" before comitting

##### 0.0.8

- update dependencies
- add nr -> npm run, but do not alias it yet -.-

##### 0.0.9

actually add the nr bin alias to package.json

##### 0.0.10

update dependencies

##### 0.0.11

- rename package in readme header
- update dev dependencies

##### 0.0.12

- add gcdist command, add nr command

##### 0.0.13

- update changelog
- update devDependencies

##### 0.0.14 - unreleased

...
