# Running locally — Boolflix

[Project overview](../README.en.md) · [Italiano](SETUP.it.md)

## Preparation

You need Node.js 22 and npm; Vite 5 declares support for `^18.0.0 || >=20.0.0`. No database is required.

```sh
git clone https://github.com/MassimoPeruga/vite-boolflix.git
cd vite-boolflix
```

Before starting or building the application, open `src/assets/js/_partials/_apiConfig.js` and replace the historical `api_key` value with an empty string:

```js
api_key: '',
```

This configuration lets you explore the interface without embedding credentials in the browser. The original project sends requests directly to TMDb: with an empty key, search does not return live results. To explore the catalogue, use the [portfolio demo](https://massimoperuga.dev/en/demo/boolflix), which manages the credential on the server.

## Installation and startup

```sh
npm ci
npm run dev
```

Open the address shown by Vite, usually [http://localhost:5173](http://localhost:5173). Press `Ctrl+C` to stop the server.

## Build and preview

```sh
npm run build
npm run preview
```

The preview is usually available at [http://localhost:4173](http://localhost:4173). Vite uses another port if the default is occupied. The `dist/` directory contains the build and is excluded from Git.

## Verification performed

Installation, development server, build and preview were checked on **16 November 2026** with Node.js 22.22.0 and npm 10.9.4, using the original lockfile and a source copy with an empty `api_key`.

In Chrome, TMDb requests were intercepted with test responses. Checks covered parallel film and TV searches, cards, stars, flags, the missing poster message, hover details and empty results. No credentials or real requests were sent to TMDb during these local checks.

The README screenshot was captured separately from a live search in the public demo through the portfolio proxy, with analytics requests blocked.
