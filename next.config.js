/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  productionBrowserSourceMaps: false, // ✅ отключаем source maps в продакшене
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // отключаем devtool для браузера, чтобы убрать eval()
      config.devtool = false
    }
    return config
  },
}

module.exports = nextConfig
