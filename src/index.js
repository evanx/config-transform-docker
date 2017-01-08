
const assert = require('assert');
const lodash = require('lodash');
const logger = require('winston');

const configMeta = {
    level: {
        default: 'info',
        description: 'logging level',
        options: ['debug', 'info', 'warn', 'error']
    },
    debug: {
        default: false,
        description: 'verbose debugging'
    }
};

const config = Object.keys(configMeta).reduce((config, key) => {
    const meta = configMeta[key];
    if (process.env[key]) {
        const value = process.env[key];
        assert(value.length, key);
        if (meta.type === 'integer') {
            config[key] = parseInt(value);
        } else {
            config[key] = value;
        }
    } else if (meta.default !== undefined) {
        config[key] = meta.default;
    } else {
        const meta = configMeta[key];
        if (meta.required !== false) {
            throw new Error([
                `Missing required config:`,
                `'${key}' for the ${meta.description}`,
                `e.g. '${meta.example}'`
            ].join(' '));
        }
    }
    return config;
}, {});

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
