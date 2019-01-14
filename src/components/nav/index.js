import Icon from '../common/Icon';
import './styles.scss';

var Menu = {
  view: function({ attrs }) {
    const { pages = [] } = attrs;
    return m(
      'nav',
      { class: 'nav-pages' },
      pages.map(({ title, url, icon }) => {
        const current = m.route.get();
        const activeClass = current == url ? 'active' : '';
        return m(
          `a[href=${url}]`,
          { class: `nav-link ${activeClass}`, oncreate: m.route.link },
          [
            m('div', { class: 'nav-text', 'data-after': title }),
            <Icon key={1} name={icon} />,
          ]
        );
      })
    );
  },
};

var Social = {
  view: function({ attrs }) {
    const { social = [] } = attrs;
    return m(
      'nav',
      { class: 'nav-social' },
      social.map(({ url, icon }) => {
        return m(`a[href=${url}]`, { class: 'nav-link', target: '__blank' }, [
          <Icon key={1} name={icon} />,
        ]);
      })
    );
  },
};

const NavBar = {
  view: ({ children }) => {
    return m('.navbar', children);
  },
};

export default () => {
  return {
    view({ attrs: { pages, social } }) {
      return m(NavBar, [m(Menu, { pages }), m(Social, { social })]);
    },
  };
};
