
import CreateTag from '../create-tag';

export default () => {
  return {
    view(vnode) {
      const intro = vnode.attrs.intro;
      const { name, title, summary } = intro;
      return (
        m('div.page-enter', [
          <CreateTag key='lol' text='h1' />,

          m('h1', { class: 'heading' }, 'Hi,'),
          m('h1', { class: 'heading' }, `I'm ${name},`),
          m('h1', { class: 'heading' }, [
            title,
            < CreateTag key='lol' text='h1' close />,
          ]),
          m('small', { class: 'text-light' }, summary),

        ])
      );
    },
  };
};