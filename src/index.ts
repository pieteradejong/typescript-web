import { UserEdit } from './views/UserEdit';
import { User, UserProps } from "./models/User";
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

const users = new Collection('http://localhost:3000/users', 
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

users.on('change', () => {
    const root = document.getElementById('');

    if(root) {
        new UserList(root, users).render();
    }
});

// const user = User.buildUser({ name: 'NAME USER', age: 20 });

// const root = document.getElementById('root');

// if(root) {
//     const userEdit = new UserEdit(root, user);

//     userEdit.render();

//     console.log(userEdit);
// } else {
//     throw new Error('root element not found');
// }


