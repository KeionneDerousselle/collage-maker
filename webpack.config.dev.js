import webpack from 'webpack';
import path from 'path';

export default{

    devtool: 'inline-source-map',

    entry:[
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')
    ],

    target: 'web',

    output:{
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer:{
        contentBase: path.resolve(__dirname, 'src'),
        hotOnly: true,
        noInfo: false
    },

    plugins:[
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module:{
        rules:[
            {
                test: /\.js$/, 
                include: path.join(__dirname, 'src'), 
                use: 'babel-loader'
            },

            {
                test: /(\.css)$/,
                use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/, 
                use: 'url?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
}