export default function saveUser(response: any) {
    localStorage.setItem("user", response);
    localStorage.setItem('isLogged', 'true');
}