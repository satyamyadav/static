export default {
  view(vnode) {
    const { name } = vnode.attrs;
    return (
      m('i', { class: `icon icon-${name}` })
    );
  },
};