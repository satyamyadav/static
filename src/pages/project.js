
import Splash from '../components/splash/index';
import Project from '../components/project/index';

export default () => {
  let loading = true;
  let projects = [];
  return {
    oninit: (vnode) => {
      vnode.attrs.store.projects.fetch().then(({ data }) => {
        projects = data;
        loading = false;
      });
    },
    view() {
      if (loading) {
        return (
          m(Splash)
        );
      }
      return (
        <Project projects={projects} />
      );
    },
  };
};