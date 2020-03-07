export const state = {
  title: '@magic/bash-alias',
  description: 'various bash aliases for node, git, rust, and @magic.',

  logotext: '@magic/bash-alias',

  menu: [
    { to: '/#install', text: 'install' },
    {
      to: '/#aliases',
      text: 'aliases',
      items: [
        { to: '-dir', text: 'directory listings' },
        { to: '-git', text: 'git' },
        { to: '-node', text: 'node' },
        { to: '-magic', text: '@magic' },
        { to: '-rust', text: 'rust' },
      ],
    },
    { to: '/#source', text: 'source' },
  ],
}
