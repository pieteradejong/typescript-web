"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({ id: 1 });
user.on('change', () => {
    console.log('user changed');
});
user.fetch();
