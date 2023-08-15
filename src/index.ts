import { User } from "./models/User";

const user = new User({ name: 'myname', age: 21 });

console.log(user.get('name'));
console.log(user.get('age'));
