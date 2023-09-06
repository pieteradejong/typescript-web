"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const axios_1 = __importDefault(require("axios"));
class User {
    constructor(data) {
        this.data = data;
        this.events = {};
    }
    ;
    get(propName) {
        return this.data[propName];
    }
    set(update) {
        Object.assign(this.data, update);
    }
    on(eventName, callback) {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
    trigger(eventName) {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => {
            callback();
        });
    }
    fetch() {
        axios_1.default.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response) => {
            this.set(response.data);
        });
    }
    save() {
        const id = this.get('id');
        if (id) {
            axios_1.default.put(`http://localhost:3000/users/${id}`, this.data);
        }
        else {
            axios_1.default.post(`http://localhost:3000/users`, this.data);
        }
    }
}
exports.User = User;
