# Node.js Native-Addon Sample
A sample project to introduce Node.js Native Module (Native Addon) development.

Based off this [tutorial](https://itnext.io/a-simple-guide-to-load-c-c-code-into-node-js-javascript-applications-3fcccf54fd32).

## Pre-requisites
See https://github.com/nodejs/node-gyp#on-macos

## Steps
- Run `npm install -g node-gyp`
- Run `npm i`
- Run `node-gyp configure`
- Run `node-gyp build`
- Run `node index.js`