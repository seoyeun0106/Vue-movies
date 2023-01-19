module.exports = {
  transpileDependencies: ["vuetify"],
  transformIgnorePatterns: [
    "/node_modules/(?!(foo|bar)/)",
    "/bar/",
    "<rootDir>/bower_components/",
    "<rootDir>/node_modules/",
  ],
  verbose: true,
  testURL: "http://localhost/",
};
