/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // compiler: {
  //   styledComponents: false,
  // },
  env: {
    LC_PROJECT_NAME: process.env.LC_PROJECT_NAME,
    EXE_ENV: process.env.EXE_ENV,
    GRAPHQL_RUN: process.env.GRAPHQL_RUN,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    BACKEND_HOST: process.env.BACKEND_HOST,
    GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.pdf$/,
  //     use: {
  //       loader: "file-loader",
  //       options: {
  //         name: "[path][name].[ext]",
  //       },
  //     },
  //   });
  //   return config;
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/old-blog/:path*",
  //       destination: "/new-sexy-blog/:path*",
  //       permanent: false,
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //     },
  //     {
  //       source: "/api/movies/:id",
  //       destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
