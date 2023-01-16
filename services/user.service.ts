// import { fetchWrapper } from '../helpers';

export const userService = {
    login,
    logout,
    getUser
};

async function login(username: string, password: string) {
    // const user = await fetchWrapper.post(`${''}/authenticate`, { username, password });
    const user = {
        username: 'tri',
        id: '1'
    }
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function getUser() {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : '';
}

function logout() {
    localStorage.removeItem('user');
}