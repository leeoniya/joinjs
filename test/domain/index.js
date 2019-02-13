const Country = require('./country');
const Fund = require('./fund');
const Holding = require('./holding');
const Security = require('./security');
const User = require('./user');

const domain = {
    Country: Country,
    Fund: Fund,
    Holding: Holding,
    Security: Security,
    User: User
};

module.exports = domain;
