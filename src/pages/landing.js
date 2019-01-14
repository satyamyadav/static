
import Splash from '../components/splash/index';
import Intro from '../components/intro/index';

export default () => {
  let loading = true;
  let intro = {};
  return {
    oninit: (vnode) => {
      vnode.attrs.store.intro.fetch().then(({ data }) => {
        intro = data;
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
        <Intro intro={intro} />
      );
    },
  };
};