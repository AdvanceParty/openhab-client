import OpenHabEvent from './OpenHabEvent';
/**
 * Receives realtime events from an Openhab server,
 * formats the data into custom JHS event objects and
 * dispatch them to listeners.
 *
 * See: https://www.openhab.org/docs/developer/utils/events.html
 *
 * Warning: Uses EventSource (https://developer.mozilla.org/en-US/docs/Web/API/EventSource)
 * which is not supported by IE or Edge. Polyfills are available, so just make sure your
 * build pipeline is appropriately configured.
 */

export default class OpenhabEventManager extends EventTarget {
  constructor() {
    super();
    this.conn = null;
  }

  connect(url) {
    this.close();
    this.conn = new EventSource(url);
    this.conn.addEventListener('error', e => this.dispatchEvent(new Event(e.type, e.message)));
    this.conn.addEventListener('open', e => this.dispatchEvent(new Event(e.type)));
    this.conn.addEventListener('message', e => this.onMessage(e));
  }

  onMessage(e) {
    const data = JSON.parse(e.data);
    const payload = JSON.parse(data.payload);
    const { type, topic } = data;
    // const evt = new OpenHabEvent(type, topic, payload);
    // const customEvent = new CustomEvent(data.type, {
    //   detail: {
    //     payload,
    //     topic: data.topic,
    //   },
    // });
    this.dispatchEvent(new OpenHabEvent(type, topic, payload));
  }

  close() {
    if (!this.conn) return false;
    this.conn.close();
    this.conn = null;
  }
}

const READY_STATES = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSED: 2,
};
