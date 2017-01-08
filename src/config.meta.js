module.exports = {
    firstLine: {
        required: false,
        description: 'first line',
        example: 'docker run'
    },
    lastLine: {
        required: false,
        description: 'last line',
        example: 'authbot:latest'
    },
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
