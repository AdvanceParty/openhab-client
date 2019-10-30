const openhabConfig = {
  baseUrl: 'http://otto.local:8080',
  events: {
    endpoint: '/rest/events',
    subscribe: [
      'ITEM_ADDED',
      'ITEM_REMOVED',
      'ITEM_STATE_CHANGED',
      'THING_ADDED',
      'THING_REMOVED',
      'THING_STATUS_INFO_CHANGED',
      'CHANNEL_TRIGGERED',
    ],
  },
};

module.exports.openhabConfig = openhabConfig;
