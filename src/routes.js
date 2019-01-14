import PageLayout from './layouts/page';

// Individual pages
import IndexPage from './pages/landing';
import Splash from './components/splash/index';
// import MaintenancePage from './layouts/maintenance/index';
import AboutPage from './pages/about';
import WritingPage from './pages/writing';
import ProjectPage from './pages/project';
import store from './store';

// const $root = document.body.querySelector('#root');

const Routes = {
  '/splash': {
    render: function() {
      return m(PageLayout,{store}, m(Splash));
    },
  },
  '/intro': {
    // onmatch() {
    //   // Show Loader until the promise has been resolved or rejected.
    //   m.render($root, m(PageLayout,{store}, m(Splash)));

    //   return new Promise((resolve/*, reject*/) => {
    //     //Fetch all necessary data here
    //     setTimeout(function() {
    //       resolve();
    //     }, 2000);
    //   }).catch((/* e */) => {
    //     // In case of server error we can show the maintenance page.
    //     return MaintenancePage;
    //   });
    // },
    render(vnode) {
      if (typeof vnode.tag === 'function') {
        //If onmatch returns a component or a promise that resolves to a component, comes here.
        return vnode;
      }
      return m(PageLayout,{store}, m(IndexPage, { store }));
    },
  },
  '/about': {
    render() {
      return m(PageLayout,{store}, m(AboutPage, {store}));
    },
  },
  '/writings': {
    render() {
      return m(PageLayout,{store}, m(WritingPage, {store}));
    },
  },
  '/projects': {
    render() {
      return m(PageLayout,{store}, m(ProjectPage, {store}));
    },
  },
};

const DefaultRoute = '/intro';

export { Routes, DefaultRoute };