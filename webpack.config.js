const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
        },
    },
    entry: './App.js', // ou o caminho correto do seu arquivo de entrada
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
};
