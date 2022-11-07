# Static 11ty

Simple 11ty static website with minimum config required.

It's based on the amazing [11ty](https://github.com/11ty/eleventy) static site generator!

⭐️ See this project live: https://static-11ty.netlify.app

## Why?

This is a super simple static website setup built on top of [11ty](https://github.com/11ty/eleventy). It has only one package dependency and perform simple tasks such as:

1. Inject variables in the `html`, `css` and `js` files (`VERSION` and `BASE_URL`).
2. Generates a valid `sitemap.xml` automaticly.
3. Template system.

## Files structure

### `.eleventy.js` configuration file

All 11ty configuration are inside the [`.eleventy.js`](.eleventy.js) file. It is very basic but does 2 custom transformations:

## Utilities

### The `VERSION` variable

During the build, 11ty will generate a `uuid` of 8 characters to be used as a unique value to be apended at the end of static files to avoid CDN cache issues. E.g.:

```html
<script src="/assets/js/script.js?v={%VERSION%}"></script>

will be replace to:

<script src="/assets/js/script.js?v=zpuf45ww"></script>
```

### The `BASE_URL` variable

During the build, 11ty will replace the `{%BASE_URL%}` inside `html`, `css` and `js` files by a `BASE_URL` defined env variable. The default value is: `http://localhost:8080`. E.g:

```html
<script src="{%BASE_URL%}/assets/js/script.js"></script>

will be replace to:

<script src="http://localhost:8080/assets/js/script.js?v=edf2k45fh"></script>
```

During the website deploy, set the `BASE_URL` env variable to the desired value. E.g.:

```sh
BASE_URL=https://myawesomewebsite.com
```

If you want to force the `BASE_URL` website generation locally, you can run:

```sh
$ BASE_URL=https://myawesomewebsite.com npm run build
```

## Local development

```sh
$ npm start
```

## Production Deploy

It is required to set the set the env variable `BASE_URL` with the full path URL:

```
BASE_URL=https://static-11ty.netlify.app
```

Default value of `BASE_URL` `http://localhost:8080` from the [.eleventy.js file](.eleventy.js).

It will run the following command:

```sh
$ npm run build
```

---

## Hosted by Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea46593b-6007-4d46-907e-1224b2f58a37/deploy-status)](https://app.netlify.com/sites/static-11ty/deploys)