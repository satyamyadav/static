
import './list.scss';

export default {
  view({attrs}) {
    const { items } = attrs;
    return (
      m('ul', { class: 'list' }, items.map(({title='', summary='', url='/'}) => {
        return m('li', {class: 'list-item'}, 
          m('a', {class: 'list-link', href: url, target: '__blank'}, 
            m('div', {class: 'list-block'}, [
              m('h3', {class: 'list-title'}, title),
              m('p', {class: 'list-text'}, summary),
            ])
          )
        );
      }))
    );
  },
};