import Person from "./Person.js";

export default class Customer extends Person {

    constructor(id, username, password) {
        super(id, username, password);
        this._id = id;
        this._username = username;
        this._password = password;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    getData() {
        return {"id": this._id, "username": this._username, "password": this._password};
    }
}
