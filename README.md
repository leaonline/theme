# Leaonline Theme

This package adds the official leaonline bootstrap scss theme to a project.


## Installation

In order to install the theme you need to install the [scss compiler}(https://github.com/Meteor-Community-Packages/meteor-scss)
and the autoprefixer:

```bash
$ meteor remove standard-minifier-css
$ meteor add fourseven:scss seba:minifiers-autoprefixer
```

Then you need to create a `.scss` file which has to be imported on your client and contains the following line:

```javascript
@import '{leaonline:theme}/theme.scss';
```

That's it.

## License

MIT, see [./LICENSE](license file)
