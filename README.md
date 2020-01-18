# @magic/git-alias

installs useful git, node and [@magic](https://magic.github.io) aliases.

**POLLUTES THE NAMESPACE OF YOUR BASH WITH ONE AND TWO LETTER COMMANDS.**

## installation
```bash
npm i -g @magic/bash-aliases
```

## aliases

### git
```bash
ga  -> git add
gaa -> git add --all
gb  -> git branch
gbb -> git checkout -b
gc  -> git commit -m
gca -> git commit --amend
gd  -> git -c color.ui=always diff
gl  -> git -c color.ui=always log
gp  -> git push
gr  -> git remove -v
gra -> git remote add
gs  -> git -c color.status=always status
```

### Node
```bash
nb -> npm run build
nd  -> npm run dev
nf  -> npm run format
ni  -> npm install
np  -> npm run prod
ns  -> npm start
nt  -> npm test
nu  -> npm update
```

### @magic
```bash
m  -> magic dev
mb -> magic build
mc -> magic clean
md -> magic dev
mp -> magic prod
ms -> magic serve
```

### changelog

#### 0.0.1 - unreleased
first release

#### 0.0.2 - unreleased
