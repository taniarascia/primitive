# Primitive UI  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![primitive-ui on NPM](https://img.shields.io/npm/v/primitive-ui.svg?color=green&label=primitive-ui)](https://www.npmjs.com/package/primitive)

A minimalist front-end design toolkit built with Sass for developing responsive, browser-consistent web apps. Primitive also provides helpful, browser-consistent styling for default HTML elements - buttons, forms, tables, lists, and typography.

## Installation

### CSS quick start (easy)

- [Download the stylesheet](https://taniarascia.github.io/primitive/css/main.css) or use the CDN URL: [https://unpkg.com/primitive-ui/dist/css/main.css](https://unpkg.com/primitive-ui/dist/css/main.css).
- Save the stylesheet and link to it in the head of your project.

```html
<link rel="stylesheet" href="https://unpkg.com/primitive-ui/dist/css/main.css">
```

It's all set to go and your HTML elements will be given sensible default styling.

### Sass integration (recommended)

The beauty of Primitive is the ease with which you can create unique designs in a beautiful, simple system. Simply clone the repo:

```bash
git clone https://github.com/taniarascia/primitive.git
cd primitive
```

And run a Sass watch on the project.

```bash
npm run sass
```

Now you can begin modifying variables in `variables.scss`. This file will define your colors, typography, sizes, breakpoints, buttons, borders, and more. Define all your variables here to keep your project organized. 

You can view `dist/test.html` or `templates/template.html` to see some example elements as you make changes.

## Usage

All documentation can be found at [https://taniarascia.github.io/primitive](https://taniarascia.github.io/primitive).

## Motivation

Primitive was originally built by [Tania Rascia](https://www.taniarascia.com) to understand how a responsive CSS framework works from scratch, and how to use Sass, the CSS preprocessor. 

Primitive makes it incredibly simple to set the foundation for a sustainable styling system. You get the freedom to design your site however you want, with a solid, easy-to-understand underlying framework.

Many websites have been built with Primitive, such as [taniarascia.com](https://www.taniarascia.com), [Laconia](https://laconia.site), [Cafe Ba-Ba-Reeba!](http://cafebabareeba.com/), [Shaw's Crab House](http://shawscrabhouse.com), [Tokio Pub](http://tokiopub.com/), [Krispy Kreme Pacific Northwest](http://krispykremepacificnw.com/), and more.

## Acknowledgements

- Dave Gamache for building [Skeleton CSS](http://getskeleton.com/), the original inspiration for building Primitive and understanding responsive CSS.

## Contributing

Please feel free to fork, comment, critique, or submit a pull request.

## Author

- [Tania Rascia](https://www.taniarascia.com)

## License

This project is open source and available under the [MIT License](LICENSE.md).
