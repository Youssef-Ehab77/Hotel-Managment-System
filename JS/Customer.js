import Person from "./Person.js";
export default class Customer extends Person {

    constructor(name, email, password) {
        super(name, email, password);
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    Data(){
        return `Customer Name: ${this.name}\n Customer Password: ${this.password} `;
    }
}
