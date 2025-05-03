// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби 
// через геттер та сеттер login email

class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}

const user = new Client('admin', 'admin@gmail.com');

console.log('email', user.email)
console.log('login', user.login)

user.email = 'mango@gmai.com';
user.login = 'mango';

console.log('email 2', user.email)
console.log('login 2', user.login)