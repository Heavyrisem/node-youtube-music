export default {
  body: (lang = 'ko') => ({
    context: {
      capabilities: {},
      client: {
        clientName: 'WEB_REMIX',
        clientVersion: '0.1',
        hl: lang,
      },
    },
  }),
};
