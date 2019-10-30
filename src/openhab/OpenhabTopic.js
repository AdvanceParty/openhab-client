export default class OpenhabTopic {
  constuctor() {
    this.namespace = null;
    this.entityType = null;
    this.entity = null;
    this.action = null;

    return this;
  }

  set namespace(value) {
    this._namespace = value;
  }
  set entityType(value) {
    this._entityType = value;
  }

  set entity(value) {
    this._entity = value;
  }

  set action(value) {
    this._action = value;
  }

  get namespace() {
    return this._namespace;
  }

  get entityType() {
    return this._entityType;
  }

  get entity() {
    return this._entity;
  }

  get action() {
    return this._action;
  }

  parse(str) {
    const arr = str.split('/');
    this.namespace = arr[0];
    this.entityType = arr[1];
    this.entity = arr[2];
    this.action = arr[3];
    return this;
  }

  stringify() {
    return `${this.namespace}/${this.entityType}/${this.entity}/${this.action}`;
  }

  clone() {
    return new OpenhabToppic().parse(this.stringify());
  }
}
