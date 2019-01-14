export default {
  data: {},
  fetch: () =>
    m.request({
      method: 'GET',
      url: '/data/projects.json',
    }),
};
