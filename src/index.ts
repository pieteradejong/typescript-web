import { User } from "./models/User";

const user = new User({ name: 'myname', age: 21 });

user.on('change', () => {
    console.log('fmvkdlsjvfs');
});
user.on('change', () => {
    console.log('907867');
});
user.on('save', () => {
    console.log('SAVE fd');
});

user.trigger('save');
