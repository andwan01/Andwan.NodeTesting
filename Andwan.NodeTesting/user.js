"use strict";

var User = class {
    constructor(firstName, lastName) {
        var _firstName = firstName;
        var _lastName = lastName;
        var _dateCreated = new Date();

        this.getFirstName = function () { return _firstName; }
        this.getLastName = function () { return _lastName; }
        this.getDateCreated = function() { return _dateCreated; }
    }

    get fullName() {
        return this.getFirstName().concat(" ", this.getLastName());
    }
};

module.exports = User;
