export default class Person {
    #name;
    #email;
    #password;
    constructor(name, email, password) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
    }
}