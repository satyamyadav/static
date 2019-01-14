import './styles.scss';
import CreateTag from '../../components/create-tag';
import Nav from '../../components/nav';
import Splash from '../../components/splash/index';

/**
 * A component that wraps another component with some common
 * page layout markup and styles.
 */
export default function () {
  let website = {};
  let className = '';
  let loading = true;

  return {
    oninit: vnode => {
      vnode.attrs.store.website.fetch().then(({ data }) => {
        website = data;
        loading = false;
      });
    },
    view: vnode => {
      if (loading) {
        return m(Splash);
      }
      const { themes, pages, social } = website;
      return m('div', { class: `page-container ${className}` }, [
        <Nav key={1} pages={pages} social={social} />,
        <CreateTag key={1} text='body' />,
        m('#panel', { class: 'panel' }, [
          m('div', { class: 'pl-4 pr-4 content-wrapper' }, vnode.children),
        ]),
        <CreateTag key={1} text='body' close />,
        m('ui', { class: 'theme-panel' }, [
          themes.map((theme, index) => {
            return m(
              'li', {class: theme},
              m('span',
                {
                  title: theme,
                  class: 'theme-pills',
                  key: index,
                  onclick: () => {
                    className = theme;
                  },
                },
                ''
              ),
            );
          }),
        ]),
      ]);
    },
  };
}
