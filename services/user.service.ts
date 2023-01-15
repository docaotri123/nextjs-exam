import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers';
// const userSubject = new BehaviorSubject(typeof window && JSON.parse('{}'));
interface IUser {
    id: string,
    username: string
}
type User = IUser | null;
const userSubject = new BehaviorSubject<User>(null);

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    getUser
};

async function login(username: string, password: string) {
    // const user = await fetchWrapper.post(`${''}/authenticate`, { username, password });
    const user: User = {
        username: 'tri',
        id: '1'
    }
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function getUser() {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : '';
}