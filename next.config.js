const basePath = process.env.NODE_ENV === "production" ? "/budget-app" : "";

module.exports = {
  basePath,
  reactStrictMode: true,
  assetPrefix: `${basePath}/`,
  images: {
    loader: "akamai",
    path: `${basePath}/`,
  },
};
