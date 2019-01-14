
import Splash from '../components/splash/index';
import Writing from '../components/writing/index';

export default () => {
  let loading = true;
  let writings = [];
  return {
    oninit: (vnode) => {
      vnode.attrs.store.writings.fetch().then(({ data }) => {
        writings = data;
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
        <Writing writings={writings} />
      );
    },
  };
};