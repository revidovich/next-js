module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { net: false, tls: false };

    return config;
  },
}