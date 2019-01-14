import './styles.scss';

export default () => {
  return {
    view(vnode) {
      const { text = '', close = false } = vnode.attrs;
      if (close) {
        return (
          m('span', { class: 'create-tag' }, `</${text}>`)
        );
      }
      return (
        m('span', { class: 'create-tag' }, `<${text}>`)
      );
    },
  };
};