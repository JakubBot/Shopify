const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
// disable: process.env.NODE_ENV === 'development',
