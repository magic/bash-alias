# ${title}

${description}

installs useful git, node, rust, and [@magic](https://magic.github.io) aliases.

**POLLUTES THE NAMESPACE OF YOUR BASH WITH ONE AND TWO LETTER COMMANDS.**

*fortunately, the rest of the linux ecosystem seems to be smart enough not to do that too often.*

<GitBadges>magic/bash-alias</GitBadges>

### install

`npm i -g @magic/bash-alias`

### aliases

strings in [] are expected or optional cli arguments

#### #aliases-dir directory listings
`l  -> ls -CF [...FILE_GLOB]`
`la -> ls -A [...FILE_GLOB]`
`ll -> ls -alF [...FILE_GLOB]`

#### #aliases- git

`ga   -> git add [...FILE_GLOB]`
`gaa  -> git add --all`
`gb   -> git branch`
`gbb  -> git checkout -b [NAME]`
`gc   -> git commit -m [message string] [...FILE_GLOB]`
`gca  -> git commit --amend`
`gd   -> git -c color.ui=always diff`
`gl   -> git -c color.ui=always log`
`gp   -> git push`
`gps  -> git push --set-upstream [REMOTE] [BRANCH]`
`gr   -> git remote -v`
`gra  -> git remote add [NAME] [URL]`
`grr  -> git remote remove [NAME]`
`gs   -> git -c color.status=always status`
`gt   -> git tag -a [VERSION] -m [VERSION]`

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
