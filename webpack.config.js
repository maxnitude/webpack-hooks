const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

// hooks plugins
const EnvironmentPlugin = require('./plugins/0_environment');
const AfterEnvironmentPlugin = require('./plugins/1_afterEnvironment');
const EntryOptionPlugin = require('./plugins/2_entryOption');
const AfterPluginsPlugin = require('./plugins/3_afterPlugins');
const AfterResolverslugin = require('./plugins/4_afterResolvers');
const InitializePlugin = require('./plugins/5_initialize');
const BeforeRunPlugin = require('./plugins/6_beforeRun');
const RunPlugin = require('./plugins/7_run');
const WatchRunPlugin = require('./plugins/8_watchRun');
const NormalModuleFactoryPlugin = require('./plugins/9_normalModuleFactory');
const ContextModuleFactoryPlugin = require('./plugins/10_contextModuleFactory');
const BeforeCompilePlugin = require('./plugins/11_beforeCompile');
const CompilePlugin = require('./plugins/12_compile');
const ThisCompilationPlugin = require('./plugins/13_thisCompilation');
const CompilationPlugin = require('./plugins/14_compilation');
const MakePlugin = require('./plugins/15_make');
const AfterCompilePlugin = require('./plugins/16_afterCompile');
const ShouldEmitPlugin = require('./plugins/17_shouldEmit');
const EmitPlugin = require('./plugins/18_emit');
const AfterEmitPlugin = require('./plugins/19_afterEmit');
const AssetEmittedPlugin = require('./plugins/20_assetEmitted');
const DonePlugin = require('./plugins/21_done');
const AdditionalPassPlugin = require('./plugins/22_additionalPass');
const FailedPlugin = require('./plugins/23_failed');
const InvalidPlugin = require('./plugins/24_invalid');
const WatchClosePlugin = require('./plugins/25_watchClose');
const InfrastructureLogPlugin = require('./plugins/26_infrastructureLog');

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
  const plugins = [];
  if (HOOK === 'environment' || HOOK === 'all') {
    plugins.push(new EnvironmentPlugin())
  }
  if (HOOK === 'entryOption' || HOOK === 'all') {
    plugins.push(new EntryOptionPlugin())
  }
  if (HOOK === 'afterEnvironment' || HOOK === 'all') {
    plugins.push(new AfterEnvironmentPlugin())
  }
  if (HOOK === 'afterPlugins' || HOOK === 'all') {
    plugins.push(new AfterPluginsPlugin())
  }
  if (HOOK === 'afterResolvers' || HOOK === 'all') {
    plugins.push(new AfterResolverslugin())
  }
  if (HOOK === 'initialize' || HOOK === 'all') {
    plugins.push(new InitializePlugin())
  }
  if (HOOK === 'beforeRun' || HOOK === 'all') {
    plugins.push(new BeforeRunPlugin())
  }
  if (HOOK === 'run' || HOOK === 'all') {
    plugins.push(new RunPlugin())
  }
  if (HOOK === 'watchRun' || HOOK === 'all') {
    plugins.push(new WatchRunPlugin())
  }
  if (HOOK === 'normalModuleFactory' || HOOK === 'all') {
    plugins.push(new NormalModuleFactoryPlugin())
  }
 
  if (HOOK === 'contextModuleFactory' || HOOK === 'all') {
    plugins.push(new ContextModuleFactoryPlugin())
  }
 
  if (HOOK === 'beforeCompile' || HOOK === 'all') {
    plugins.push(new BeforeCompilePlugin())
  }
  
  if (HOOK === 'compile' || HOOK === 'all') {
    plugins.push(new CompilePlugin())
  }
  
  if (HOOK === 'thisCompilation' || HOOK === 'all') {
    plugins.push(new ThisCompilationPlugin())
  }
  
  if (HOOK === 'compilation' || HOOK === 'all') {
    plugins.push(new CompilationPlugin())
  }
  
  if (HOOK === 'make' || HOOK === 'all') {
    plugins.push(new MakePlugin())
  }
 
  if (HOOK === 'afterCompile' || HOOK === 'all') {
    plugins.push(new AfterCompilePlugin())
  }
  
  if (HOOK === 'shouldEmit' || HOOK === 'all') {
    plugins.push(new ShouldEmitPlugin())
  }
  
  if (HOOK === 'emit' || HOOK === 'all') {
    plugins.push(new EmitPlugin())
  }
  
  if (HOOK === 'afterEmit' || HOOK === 'all') {
    plugins.push(new AfterEmitPlugin())
  }
  
  if (HOOK === 'assetEmitted' || HOOK === 'all') {
    plugins.push(new AssetEmittedPlugin())
  }
 
  if (HOOK === 'done' || HOOK === 'all') {
    plugins.push(new DonePlugin())
  }
  
  if (HOOK === 'additionalPass' || HOOK === 'all') {
    plugins.push(new AdditionalPassPlugin())
  }
  
  if (HOOK === 'failed' || HOOK === 'all') {
    plugins.push(new FailedPlugin())
  }
  
  if (HOOK === 'invalid' || HOOK === 'all') {
    plugins.push(new InvalidPlugin())
  }
  
  if (HOOK === 'watchClose' || HOOK === 'all') {
    plugins.push(new WatchClosePlugin())
  }
  
  if (HOOK === 'infrastructureLog' || HOOK === 'all') {
    plugins.push(new InfrastructureLogPlugin())
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
