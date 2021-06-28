const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    context: path.resolve(__dirname, 'src'),

    entry: './js/index.js',

    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: './js/bundle.js'
    },

    module: {    
        rules: [  
            {  
                test: /\.js$/i,  
                include: path.resolve(__dirname, 'src'), 
                use: {          
                    loader: 'babel-loader', 
                    options: {  
                        presets: ['@babel/preset-env'],
                    }, 
                }, 
            },
            { 
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'), 
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
            },
        ], 
    },

}