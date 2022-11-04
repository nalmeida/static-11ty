# Static 11ty

Simple 11ty static website with minimum config required.

It's based on the amazing [11ty](https://github.com/11ty/eleventy) static site generator!

⭐️ See this project live: https://static-11ty.netlify.app

## Local development

```sh
$ npm start
```

## Production Deploy

It is required to set the set the env variable `BASE_URL` with the full path URL:

```
BASE_URL: https://static-11ty.netlify.app
```

Default value of `BASE_URL` `http://localhost:8080` from the [.eleventy.js file](.eleventy.js).

It will run the following command:

```sh
$ npm run build
```

---

## Hosted by Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea46593b-6007-4d46-907e-1224b2f58a37/deploy-status)](https://app.netlify.com/sites/static-11ty/deploys)