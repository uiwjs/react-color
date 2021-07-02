import webpack, { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import { LoaderConfOptions } from 'kkt';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = rawModules(conf, env, options);
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );

  conf.optimization = {
    ...conf.optimization,
    splitChunks: {
      cacheGroups: {
        reactvendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
        },
        prismjs: {
          test: /[\\/]node_modules[\\/](prismjs)[\\/]/,
          name: 'prismjs-vendor',
          chunks: 'async',
        },
      },
    },
  };

  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }

  return conf;
};
