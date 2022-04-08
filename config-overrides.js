const path = require('path');

module.exports = (config) => {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        }
    }

    return config;
} 