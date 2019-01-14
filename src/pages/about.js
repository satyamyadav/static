
import Splash from '../components/splash/index';
import About from '../components/about/index';

export default () => {
  let loading = true;
  let about = {};
  return {
    oninit: (vnode) => {
      vnode.attrs.store.about.fetch().then(({ data }) => {
        about = data;
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
        <About about={about} />
      );
    },
  };
};