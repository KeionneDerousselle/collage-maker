import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('styles.css'),
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
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/, 
                //loader: 'url?prefix=font/&limit=5000'
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        context: path.resolve(__dirname, './src'),
                        limit: 10000,
                        name: '[path][name].[ext]',
                    },
                  },
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                //loader: 'url?limit=10000&mimetype=application/octet-stream'
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        context: path.resolve(__dirname, './src'),
                        limit: 10000,
                        name: '[path][name].[ext]',
                    },
                  },
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                //loader: 'url?limit=10000&mimetype=image/svg+xml'
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        context: path.resolve(__dirname, './src'),
                        limit: 10000,
                        name: '[path][name].[ext]',
                    },
                  },
                ]
            }
        ]
    }
}