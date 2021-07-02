// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const nextTranslate = require('next-translate');
const withMDX = require('@next/mdx')();

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  future: {
    webpack5: true,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

console.log('Webpack version', require('webpack').version);

module.exports = withNx(nextTranslate(withBundleAnalyzer(withMDX(nextConfig))));
