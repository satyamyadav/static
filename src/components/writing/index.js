
import CreateTag from '../create-tag';
import List from '../common/List';

export default () => {
  return {
    view(vnode) {
      const writings = vnode.attrs.writings;
      // const { title } = writings;
      return (
        m('div.page-enter', { class: 'pr-4' }, [
          <CreateTag key={1} text='h1' />,
          m('h1', { class: 'heading active' }, 'Writings'),
          <CreateTag key={2} text='h1' close />,
          <List key={3} items={writings} />,
        ])
      );
    },
  };
};