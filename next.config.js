/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: 'http://signart.com.cn',
    images: {
        loader: 'custom',
        loaderFile: './image/loader.js',
        minimumCacheTTL: 60,
      },
}

module.exports = nextConfig
