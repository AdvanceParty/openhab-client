const merge = require('deepmerge');
import OpenhabEventConnector from './openhab/OpenhabEventConnector';
import { openhabState } from './store';

const conn = new OpenhabEventConnector();
conn.addEventListener('error', e => console.error(e));

const onOpenhabEvent = e => {
  const { type, topic, payload } = e;
  const msg = { type, topic, payload };

  const fTopic = {
    [topic.namespace]: {
      [topic.entityType]: {
        [topic.entity]: {
          action: topic.action,
          value: payload,
        },
      },
    },
  };

  openhabState.update(state => {
    return merge(state, fTopic);
  });
};

export default {
  start: function(url) {
    conn.open(url);
  },

  stop: function() {
    conn.close();
  },

  subscribeTo: function(openhabEventType) {
    conn.addEventListener(openhabEventType, e => onOpenhabEvent(e));
  },
};
