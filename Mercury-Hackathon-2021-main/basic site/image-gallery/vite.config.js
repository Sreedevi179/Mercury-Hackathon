const { resolve } = require('path')

module.exports = {
    root: './src',
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src', 'loading-page.html'),
                videopage: resolve(__dirname, 'src', 'play-page.html'),
                upload: resolve(__dirname, 'src', 'index.html'),
                gallery: resolve(__dirname, 'src', 'gallery.html'),
            }
        }
    }
}