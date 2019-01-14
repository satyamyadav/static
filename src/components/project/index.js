
import CreateTag from '../create-tag';
import List from '../common/List';

export default () => {
  return {
    view(vnode) {
      const projects = vnode.attrs.projects;
      // const { title } = projects;
      return (
        m('div.page-enter', { class: 'pr-4' }, [
          <CreateTag key={1} text='h1' />,
          m('h1', { class: 'heading active' }, 'Projects'),
          <CreateTag key={2} text='h1' close />,
          <List key={3} items={projects} />,
        ])
      );
    },
  };
};