"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({ name: 'jake yoohoo', age: 0 });
user.save();
