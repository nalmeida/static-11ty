# ※ Static 11ty

> Simple 11ty static website generator with minimum config required.

It's based on the amazing [11ty](https://github.com/11ty/eleventy) static site generator! You can find an overview 2 min video about Eleventy here: https://www.youtube.com/watch?v=EZfNr-YblBE

⭐️ See this project live: https://static-11ty.netlify.app

## Why?

> This is a super simple static website setup built on top of [11ty](https://github.com/11ty/eleventy). It has only one package dependency, 11ty itself!

### Features

#### 1. ⚙️ [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) template system

It has a [`base.njk`](src/_includes/base.njk) with your main HTML template.

If you don't want to use `njk`, you can "compile" simple HTML files, such as [`no-template-sample-page.html`](src/no-template-sample-page.html)

#### 2. 🪄 Custom Shortcodes

##### The `VERSION` shortcode

During the build, 11ty will generate an `uuid` of 8 characters to be used as unique value to be apended at the end of static files to avoid CDN cache issues. E.g.:

```html
<script src="/assets/js/script.js?v={%VERSION%}"></script>

will be replaced to:

<script src="/assets/js/script.js?v=zpuf45ww"></script>
```

##### The `BASE_URL` shortcode

During the build, 11ty will replace the `{%BASE_URL%}` inside `njk`, `html`, `css` and `js` files by a `BASE_URL` defined env variable. The default value is: `http://localhost:8080`. E.g:

```html
<script src="{%BASE_URL%}/assets/js/script.js"></script>

will be replaced to:

<script src="http://localhost:8080/assets/js/script.js"></script>
```

During the website deploy, set the `BASE_URL` env variable to the desired value. E.g.:

```sh
BASE_URL=https://myawesomewebsite.com
```

To force the `BASE_URL` website generation locally, you can run:

```sh
$ BASE_URL=https://myawesomewebsite.com npm run build
```

#### 3. 📂 Samples

The project itself is a sample project, using all the features. Checkout the [`src`](src/) folder!

#### 4. 🔁 Commom website patterns

##### Selected menu

You can find a simple "set current page active" on the [`src/_includes/base.njk`](src/_includes/base.njk) using Nunjucks template.

##### Per page analytics tracking

You can have some sort of analytics tracker and one specific trackin per page. You can find the usage example at the bottom of the  [`index.njk`](src/index.njk) file.

#### 5. 🧭 Sitemap generator

Automatic sitemap generator using the [`sitemap.njk`](src/sitemap.njk)!

## 🏁 Quick Start

1. [Generate a repo from this template](https://github.com/nalmeida/static-11ty/generate) which will copy this project into your own new repo. _Note: You must be signed in to GitHub for this link to work, else visit the repo directly._

2. Once cloned, `run npm install` to install 11ty. Then `run npm start` to run 11ty in `serve` mode which will create a local server including hot-reload via BrowserSync.

	Use `npm run build` to run a production version.

3. Open [`src/_data/site.js`](src/_data/site.js) and adjust the values to your details.

4. Edit [`index.njk`](src/index.njk) to change the home page, and then create content within src/pages using any templating format you prefer to add content.

# Local development

```sh
$ npm start
```

It will launch a local server at `http://localhost:8080` with live reload enabled.

By default, 11ty generates a `_site` folder with the transformed files inside.

# Production Deploy

It is required to set the set the env variable `BASE_URL` with the full path URL:

```
BASE_URL=https://static-11ty.netlify.app
```

Default value of `BASE_URL` `http://localhost:8080` from the [.eleventy.js file](.eleventy.js).

```sh
$ npm run build
```

---

## Hosted by Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea46593b-6007-4d46-907e-1224b2f58a37/deploy-status)](https://app.netlify.com/sites/static-11ty/deploys)