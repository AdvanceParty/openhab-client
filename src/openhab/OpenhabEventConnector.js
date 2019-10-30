import OpenhabEvent from './OpenhabEvent';
import OpenhabTopic from './OpenhabTopic';
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

export default class OpenhabEventConnector extends EventTarget {
  constructor() {
    super();
    this.conn = null;
  }

  open(url) {
    this.close();
    this.conn = new EventSource(url);
    this.conn.addEventListener('error', e => this.dispatchEvent(new Event(e.type, e.message)));
    this.conn.addEventListener('open', e => this.dispatchEvent(new Event(e.type)));
    this.conn.addEventListener('message', e => this.onOpenhabEvent(e));
  }

  onOpenhabEvent(e) {
    const data = JSON.parse(e.data);
    const topic = new OpenhabTopic().parse(data.topic);
    const payload = JSON.parse(data.payload);
    this.dispatchEvent(new OpenhabEvent(data.type, topic, payload));
  }

  close() {
    if (!this.conn) return false;
    this.conn.close();
    this.conn = null;
  }
}
