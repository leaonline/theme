/* eslint-env meteor */
Package.describe({
  name: 'leaonline:theme',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'This package adds the official leaonline bootstrap scss theme to a project.',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaonline/theme.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom(['3.0.1'])
  api.use('ecmascript')
  api.use('fourseven:scss@4.12.0')
  api.addFiles('colors.scss', 'client', { isImport: true })
  api.addFiles('applyColors.scss', 'client', { isImport: true })
  api.addFiles('theme.scss', 'client', { isImport: true })
})
