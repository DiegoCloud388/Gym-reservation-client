export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.Token) {
        //return { Authorization: 'Bearer' + user.Token };
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}