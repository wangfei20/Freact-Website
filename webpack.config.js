
import path from 'path'
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: [
             //"./utils/loader.js",
             'babel-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins:[
    autoprefixer,
    tailwindcss
    //require('autoprefixer'),
    //require('postcss-modules'),
    //require('tailwindcss'),
  ],
  resolve: {
    extensions: ['.js', '.jsx', ".mjs"],
    alias: {
      '@': path.resolve(__dirname), 
      'freact': path.resolve(__dirname,"node_modules","feireact"), 
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve content from the 'src' directory
    },
    hot: true, // Enable hot module replacement
  },
};

export default config