var path = require('path');
module.exports = {
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        port: 3000
    },
    entry: './src/index.ts',
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { 
            test: /\.tsx?$/, 
            loader: "ts-loader" 
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          }
        ]
    },
	output: {
		path: __dirname+'/public',
		filename: 'index.bundle.js'
	}
};