
module.exports = configMeta => Object.keys(configMeta).reduce((config, key) => {
    const meta = configMeta[key];
    if (process.env[key]) {
        const value = process.env[key];
        if (!value.length) {
            throw new Error(`Config '${key}' is empty'`);
        }
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
