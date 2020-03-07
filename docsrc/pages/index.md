# ${title}

${description}

<GitBadges>magic/bash-alias</GitBadges>

### install

`npm i -g @magic/bash-alias`

### aliases

strings in '' are expected or optional cli arguments

#### #aliases-dir directory listings
`l  -> ls -CF`
`la -> ls -A`
`ll -> ls -alF`

#### #aliases- git

`ga   -> git add '...files'`
`gaa  -> git add --all`
`gb   -> git branch`
`gbb  -> git checkout -b 'name'`
`gc   -> git commit -m "message string" '...files'`
`gca  -> git commit --amend`
`gd   -> git -c color.ui=always diff`
`gl   -> git -c color.ui=always log`
`gp   -> git push`
`gps  -> git push --set-upstream 'remote' 'branch'`
`gr   -> git remote -v`
`gra  -> git remote add 'name' 'url'`
`grr  -> git remote remove 'name',`
`gs   -> git -c color.status=always status`

#### #aliases- node

`nb  -> npm run build`
`nd  -> npm run dev`
`nf  -> npm run format`
`ni  -> npm install`
`np  -> npm run prod`
`ns  -> npm start`
`nt  -> npm test`
`nu  -> npm update`

#### #aliases- @magic

`m   -> magic dev`
`mb  -> magic build`
`mc  -> magic clean`
`md  -> magic dev`
`mp  -> magic prod`
`ms  -> magic serve`

#### #aliases- rust

`cb  -> cargo build`
`cch -> cargo check`
`cf  -> cargo fmt -v`
`ci  -> cargo install`
`cr  -> cargo run`
`ct  -> cargo test`
`cw  -> cargo watch`
`cwr -> cargo watch -x run`


## source

the source for this page is in the
[example directory](https://github.com/magic/bash-alias/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
