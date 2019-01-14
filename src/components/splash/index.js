import './styles.scss';

const messages = [
  'let me think ...',
  'i am not a dockter, but you be patient ...',
  'if page is not loading fast enough, don\'t reload ...',
];

export default {
  onbeforeremove: function (vnode) {
    vnode.dom.classList.add('hide-loader');
    return new Promise(function (resolve) {
      setTimeout(resolve, 700);
    });
  },
  view(/*vnode*/) {
    const index = Math.floor(Math.random() * messages.length);
    const msg = messages[index];
    return m('.holder', [
      m('div.loader-content.col-8.col-md-3', [
        m('h4', msg),
        m('div.progress'),
      ]),
    ]);
  },
};