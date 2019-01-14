
export default () => {
  return {
    view({ attrs }) {
      const { skills = [] } = attrs;
      return (
        m('.row.text-3',
          skills.map(({ title, bottomline, devicons }) => {
            return m('.col',
              [
                m('h2',
                  title
                ),
                devicons.map((icon) => {
                  return m('i', { class: `devicon-${icon}` });
                }),
                m('p',
                  bottomline
                ),
              ]
            );
          })
        )
      );
    },
  };
};