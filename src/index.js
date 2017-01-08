
const assert = require('assert');
const lodash = require('lodash');
const logger = require('winston');
const configMeta = require('./config.meta');
const config = require('../components/config')(configMeta);
const getStdin = require('get-stdin');

async function debug() {
    if (process.env.NODE_ENV !== 'production' || config.debug) {
        console.log(...arguments);
    }
}

function getConfigObject(configContent) {
    if (/^\{/.test(configContent)) {
        return JSON.parse(configContent);
    } else if (/^module.exports = \{/.test(configContent)) {
        return require('@f/require-content')(configContent, 'stdin');
    } else {
        throw new Error('Standard input must be JSON or module.exports');
    }

}
async function main() {
    const state = {};
    try {
        state.configContent = await getStdin();
        state.configContent = state.configContent.replace(/[ \t]\n/g, '\n').trim();
        const configObject = getConfigObject(state.configContent);
        if (config.firstLine) {
            console.log(config.firstLine, '\\');
        }
        Object.keys(configObject).map(key => {
            const value = configObject[key];
            if (typeof value === 'object') {
                throw new Error(`Object property '${key}'`);
            }
            console.log(`  -e ${key}='${value}' \\`);
        });
        if (config.lastLine) {
            console.log(`  ${config.lastLine}`);
        }
    } catch (err) {
        console.log({state});
        console.error(err);
    } finally {
    }
}

main();
