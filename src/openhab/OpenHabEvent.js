const ITEM_ADDED = 'ItemAddedEvent';
const ITEM_REMOVED = 'ItemRemovedEvent';
const ITEM_UPDATED = 'ItemUpdatedEvent';
const ITEM_COMMAND = 'ItemCommandEvent';
const ITEM_STATE = 'ItemStateEvent';
const ITEM_STATE_CHANGED = 'ItemStateChangedEvent';
const THING_ADDED = 'ThingAddedEvent';
const THING_REMOVED = 'ThingRemovedEvent';
const THING_UPDATED = 'ThingUpdatedEvent';
const THING_STATUS_INFO = 'ThingStatusInfoEvent';
const THING_STATUS_INFO_CHANGED = 'ThingStatusInfoChangedEvent';
const INBOX_ADDED = 'InboxAddedEvent';
const INBOX_REMOVED = 'InboxRemovedEvent';
const INBOX_UPDATE = 'InboxUpdateEvent';
const ITEM_CHANNEL_LINK_ADDED = 'ItemChannelLinkAddedEvent';
const ITEM_CHANNEL_LINK_REMOVED = 'ItemChannelLinkRemovedEvent';
const CHANNEL_TRIGGERED = 'ChannelTriggeredEvent';

export default class OpenHabEvent extends Event {
  static get ITEM_ADDED() {
    return ITEM_ADDED;
  }
  static get ITEM_REMOVED() {
    return ITEM_REMOVED;
  }
  static get ITEM_UPDATED() {
    return ITEM_UPDATED;
  }
  static get ITEM_COMMAND() {
    return ITEM_COMMAND;
  }
  static get ITEM_STATE() {
    return ITEM_STATE;
  }
  static get ITEM_STATE_CHANGED() {
    return ITEM_STATE_CHANGED;
  }
  static get THING_ADDED() {
    return THING_ADDED;
  }
  static get THING_REMOVED() {
    return THING_REMOVED;
  }
  static get THING_UPDATED() {
    return THING_UPDATED;
  }
  static get THING_STATUS_INFO() {
    return THING_STATUS_INFO;
  }
  static get THING_STATUS_INFO_CHANGED() {
    return THING_STATUS_INFO_CHANGED;
  }
  static get INBOX_ADDED() {
    return INBOX_ADDED;
  }
  static get INBOX_REMOVED() {
    return INBOX_REMOVED;
  }
  static get INBOX_UPDATE() {
    return INBOX_UPDATE;
  }
  static get ITEM_CHANNEL_LINK_ADDED() {
    return ITEM_CHANNEL_LINK_ADDED;
  }
  static get ITEM_CHANNEL_LINK_REMOVED() {
    return ITEM_CHANNEL_LINK_REMOVED;
  }
  static get CHANNEL_TRIGGERED() {
    return CHANNEL_TRIGGERED;
  }

  constructor(type, topic, payload, eventInit = { bubbles: false, cancellable: false, composed: false }) {
    super(type, eventInit);
    this.topic = topic;
    this.payload = payload;
  }
}
