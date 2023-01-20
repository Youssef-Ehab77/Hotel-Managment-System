import Person from "./Person.js";
export default class Customer extends Person {
    #id;

    constructor(name, email, password, id) {
        super(name, email, password);
        this.#id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._id = id;
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

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    Data(){
        return `Customer Name: ${this.name}\n Customer ID: ${this.id} `;
    }
}
