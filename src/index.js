
const assert = require('assert');
const lodash = require('lodash');
const logger = require('winston');
const configMeta = require('./config.meta');
const config = require('../components/config')(configMeta);

async function debug() {
    if (process.env.NODE_ENV !== 'production' || config.debug) {
        console.log([].slice.call(arguments));
    }
}

async function main() {
    try {
    } catch (err) {
        console.error(err);
    } finally {
    }
}

main();
