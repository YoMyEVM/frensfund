const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    'file:../../shared/generic-react-hooks',
    'file:../../shared/types',
    'file:../../shared/ui',
    'file:../../shared/utilities'
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, net: false, tls: false };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'src/components'),
      '@constants': path.join(__dirname, 'src/constants'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@views': path.join(__dirname, 'src/views')
    };

    return config;
  }
};
