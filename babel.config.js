module.exports = {
  ignore: [
    '**/*.test.js',
    '**/*.spec.js',
    'setupTests.js'
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        version: '7.9.6'
      }
    ],
    process.env.NODE_ENV === 'production' && [
      'transform-react-remove-prop-types',
      {
        removeImport: true
      }
    ]
  ].filter(Boolean)
};
