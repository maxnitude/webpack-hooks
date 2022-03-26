const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

// hooks
const EnvironmentPlugin = require('./plugins/environment');
const EntryOptionPlugin = require('./plugins/entryOption');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const HOOK = process.env.HOOK;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions(),
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

const addPlugins = () => {
  const plugins =[]
  if (HOOK === 'environment') {
    plugins.push(new EnvironmentPlugin())
  }
  if (HOOK === 'entryOption') {
    plugins.push(new EntryOptionPlugin())
  }

  return plugins
}


module.exports = {
  context: path.resolve(__dirname, 'src'),

  mode: isDev ? 'development' : 'production',

  entry: {
    main: ['@babel/polyfill', './index.js'],
  },

  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, './dist'),
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  optimization: optimization(),

  devServer: {
    port: 4200,
    overlay: true,
    open: true,
    hot: isDev,
  },

  devtool: isDev ? 'source-map' : '',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ].concat(addPlugins()),

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },

      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },

      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },

      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },

      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript'),
        },
      },
    ],
  },
};
