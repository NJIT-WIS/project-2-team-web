module.exports = {
  i18n:{
    locales: ['en', 'fr', 'de'], // Define supported locales
    defaultLocale: 'en'// Set the default language to English
  },
  
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:locale(en|fr|de)/:path*',
        destination: '/:path*',
      },
    ];
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
