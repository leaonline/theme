# Leaonline Theme

This package adds the official leaonline bootstrap scss theme to a project.

[![DOI](https://zenodo.org/badge/265558336.svg)](https://zenodo.org/doi/10.5281/zenodo.10817539)


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

## Color Schema

| name      | usage                    | code                                                                                                                                                                                                                                                                                       | preview                                                                                                                                                                                                                                                                                    |
|-----------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| primary   | Main Color / Brand Color | `#f59d1d`                                                                                                                                                                                                                                                                                  | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#f59d1d" /></g></svg> |
| secondary | Text, common actions     |`#193b5e` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#193b5e" /></g></svg> |
| light     | Highlights, background   |`#f5f5f5` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#f5f5f5" /></g></svg> |
| dark      | Highlights, background   |`#646464` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#646464" /></g></svg> |
| gray      | Highlights, background   |`#a6a6a6` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#a6a6a6" /></g></svg> |
| warning   | Language Dimension       |`#FFC800` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#FFC800" /></g></svg> |
| danger    | Reading Dimension        |`#d95a7d` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#d95a7d" /></g></svg> |
| success   | Maths Dimension          |`#00ddb6` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#00ddb6" /></g></svg> |
| info      | Writing Dimension        |`#86c4f1` | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="50px" width="50px"><g><rect width="50" height="50" x="0" y="00" rx="0" ry="0" fill="#86c4f1" /></g></svg> |


## License

MIT, see [./LICENSE](license file)
