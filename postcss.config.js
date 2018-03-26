module.exports = ({ file }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
        autoprefixer: {
            browsers: [
                'Chrome >= 55',
                'FireFox >= 43',
                'Safari >= 6',
                'Explorer 10',
                'last 4 Edge versions',
            ],
        },
    },
});
