/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
const withTM = require('next-transpile-modules')(['react-responsive-carousel']);

module.exports = withTM();
