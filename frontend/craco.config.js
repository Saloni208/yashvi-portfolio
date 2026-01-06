// craco.config.js
const path = require("path");

module.exports = {
  // ================= ESLINT =================
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },

  // ================= WEBPACK =================
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    configure: (webpackConfig) => {
      // Reduce unnecessary file watching
      webpackConfig.watchOptions = {
        ...(webpackConfig.watchOptions || {}),
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/build/**",
          "**/dist/**",
          "**/coverage/**",
          "**/public/**",
        ],
      };

      return webpackConfig;
    },
  },
};
