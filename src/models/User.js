"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Attributes_1 = require("./Attributes");
const Eventing_1 = require("./Eventing");
const Sync_1 = require("./Sync");
const rootUrl = 'http://localhost:3000/users';
class User {
    constructor(attrs) {
        this.events = new Eventing_1.Eventing();
        this.sync = new Sync_1.Sync(rootUrl);
        this.attributes = new Attributes_1.Attributes(attrs);
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attributes.get;
    }
    set(update) {
        this.attributes.set(update);
        this.events.trigger('change');
    }
    fetch() {
        const id = this.get('id');
        if (typeof id !== 'number') {
            throw new Error('Must have ID to fetch');
        }
        this.sync.fetch(id)
            .then((response) => {
            this.set(response.data);
        });
    }
}
exports.User = User;
