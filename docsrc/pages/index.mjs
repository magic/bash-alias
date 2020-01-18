export const View = state => [
  h1(state.title),
  p(state.description),

  GitBadges('magic/bash-alias'),

  h3({ id: 'install' }, 'install'),
  Pre('npm i -g @magic/bash-alias'),

  h3({ id: 'aliases' }, 'aliases'),

  h4({ id: 'aliases-git' }, 'git'),

  p('strings in ${} are expected cli arguments'),

  Pre('ga   -> git add ${...files}'),
  Pre('gaa  -> git add --all'),
  Pre('gb   -> git branch'),
  Pre('gbb  -> git checkout -b ${name}'),
  Pre('gc   -> git commit -m "message string" ${...files}'),
  Pre('gca  -> git commit --amend'),
  Pre('gd   -> git -c color.ui=always diff'),
  Pre('gl   -> git -c color.ui=always log'),
  Pre('gp   -> git push'),
  Pre('gps  -> git push --set-upstream ${remote} ${branch}'),
  Pre('gr   -> git remote -v'),
  Pre('gra  -> git remote add ${name} ${url}'),
  Pre('grr  -> git remote remove ${name},'),
  Pre('gs   -> git -c color.status=always status'),

  h4({ id: 'aliases-node' }, 'node'),
  Pre('nb  -> npm run build'),
  Pre('nd  -> npm run dev'),
  Pre('nf  -> npm run format'),
  Pre('ni  -> npm install'),
  Pre('np  -> npm run prod'),
  Pre('ns  -> npm start'),
  Pre('nt  -> npm test'),
  Pre('nu  -> npm update'),

  h4({ id: 'aliases-magic' }, '@magic'),
  Pre('m   -> magic dev'),
  Pre('mb  -> magic build'),
  Pre('mc  -> magic clean'),
  Pre('md  -> magic dev'),
  Pre('mp  -> magic prod'),
  Pre('ms  -> magic serve'),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/bumper/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]

export const style = {
  '.Pre.lines pre > code::before': {
    content: '""',
    width: 0,
  },
}
