import './styles.scss';
import CreateTag from '../create-tag';
import Skills from './skills';

const TimeLine = {
  view({ attrs }) {
    let { timeline = [] } = attrs;
    return (
      m('div', { class: 'pt-3' },
        timeline.map(({ company, from, till, role, summary, highlights }) => {
          return m('div', [
            m('span', { class: 'timeline-badge' }, `${from} - ${till}`),
            m('div', { class: 'pl-2 pt-2 pb-3 timeline-line' }, [
              m('h3', { class: 'mb-0 mt-0' }, company),
              m('small', { class: 'text-4' }, role),
              m('p', { class: '' }, summary),
              m('p', highlights),
            ]),
          ]);
        })
      )
    );
  },
};


export default () => {
  return {
    view(vnode) {
      const about = vnode.attrs.about;
      const { timeline = [], title, bio = '', skills = [] } = about;
      return (
        m('.row', { class: 'page-enter' }, [
          m('.col-12', [
            <CreateTag key='lol' text='h1' />,
            m('h1', { class: 'heading active' }, [title,
              <CreateTag key='lol' text='h1' close />,
            ]),
          ]),
          m('.col-md.col-12.h-70',
            m('.pr-4',
              [
                m('p', [bio]),
                m(TimeLine, { timeline }),
              ]
            )
          ),
          m('.col-md.col-12.h-70',
            m('pl-4',
              <Skills skills={skills} />
            )
          ),
        ])
      );
    },
  };
};