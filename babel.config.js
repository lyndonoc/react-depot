module.exports = {
  ignore: [
    "src/**/*.test.js",
    "src/**/*.spec.js",
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        version: "7.9.6"
      }
    ],
    [
      "transform-react-remove-prop-types",
      {
        removeImport: true
      }
    ]
  ]
};
