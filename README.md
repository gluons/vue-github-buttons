# Vue GitHub Buttons
[![license](https://img.shields.io/github/license/gluons/vue-github-buttons.svg?style=flat-square)](https://github.com/gluons/vue-github-buttons/blob/master/LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-github-buttons.svg?style=flat-square)](https://www.npmjs.com/package/vue-github-buttons)
[![npm](https://img.shields.io/npm/dt/vue-github-buttons.svg?style=flat-square)](https://www.npmjs.com/package/vue-github-buttons)
[![Travis](https://img.shields.io/travis/gluons/vue-github-buttons.svg?style=flat-square)](https://travis-ci.org/gluons/vue-github-buttons)
[![Codacy grade](https://img.shields.io/codacy/grade/bc0ed4e4a9ef4734ae741d0f8a5d358d.svg?style=flat-square)](https://www.codacy.com/app/gluons/vue-github-buttons)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

:octocat: GitHub buttons component for Vue.

- [Vue GitHub Buttons](#vue-github-buttons)
	- [Installation](#installation)
	- [Demo](#demo)
	- [Usage](#usage)
	- [Using with Nuxt](#using-with-nuxt)
		- [Module options](#module-options)
			- [`css`](#css)
			- [`useCache`](#usecache)
	- [Using with VuePress](#using-with-vuepress)
	- [API](#api)
		- [Plugin Options](#plugin-options)
			- [`useCache`](#usecache-1)
		- [Components](#components)
			- [`gh-btns-watch`](#gh-btns-watch)
			- [`gh-btns-star`](#gh-btns-star)
			- [`gh-btns-fork`](#gh-btns-fork)
			- [`gh-btns-follow`](#gh-btns-follow)

## Installation

Via [NPM](https://www.npmjs.com):

[![NPM](https://nodei.co/npm/vue-github-buttons.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-github-buttons)

```bash
npm install vue-github-buttons
```

Via [Yarn](https://yarnpkg.com):

```bash
yarn add vue-github-buttons
```

## Demo
Go to https://gluons.github.io/vue-github-buttons

## Usage

```javascript
import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';
import App from './App.vue';

// Stylesheet
import 'vue-github-buttons/dist/vue-github-buttons.css';

Vue.use(VueGitHubButtons);
// Or if your don't want to use cache
Vue.use(VueGitHubButtons, { useCache: false });

new Vue({
	el: '#app',
	render: h => h(App)
});
```

```vue
<template>
	<div id="app">
		<gh-btns-watch slug="vuejs/vue" show-count></gh-btns-watch>
		<gh-btns-star slug="vuejs/vue" show-count></gh-btns-star>
		<gh-btns-fork slug="vuejs/vue" show-count></gh-btns-fork>
		<gh-btns-follow user="yyx990803" show-count></gh-btns-follow>
	</div>
</template>

<script>
// JavaScript ...
</script>

<style>
/* Style ... */
</style>
```

## Using with [Nuxt](https://nuxtjs.org/)

Add `vue-github-buttons/nuxt` to `modules` in **nuxt.config.js**.

```javascript
module.exports = {
	modules: [
		'vue-github-buttons/nuxt',
		// Or with options
		['vue-github-buttons/nuxt', {
			css: false, // Don't include CSS
			useCache: false // Don't use cache
		}]
	]
};
```

### Module options

#### `css`
Type: `Boolean`  
Default: `true`

Include **Vue GitHub Buttons**'s CSS.

#### `useCache`
Type: `Boolean`  
Default: `true`

Enable caching. (See below)

## Using with [VuePress](https://vuepress.vuejs.org/)

> Require **VuePress** v1.x

Add **Vue GitHub Buttons** to your `plugins` in `.vuepress/config.js`.

```javascript
module.exports = {
	plugins: [
		require('vue-github-buttons/plugins/vuepress'),

		/* Or using plugin with options */

		[
			require('vue-github-buttons/plugins/vuepress'),
			{
				useCache: false
			}
		]
	]
}
```

Plugin options are the same as [Vue plugin options](#plugin-options).

## API

### Plugin Options

#### `useCache`
Type: `Boolean`  
Default: `true`

Enable count number caching. (Use [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage))
> GitHub API has [limited requests](https://developer.github.com/v3/#rate-limiting). So, caching may be useful when user refresh the webpage.

```javascript
Vue.use(VueGitHubButtons, { useCache: false }); // Disable cache
```

### Components

#### `gh-btns-watch`
👁️ A watch button.
- `slug` - GitHub slug (username/repo).
- `show-count` - Enable displaying the count number.

#### `gh-btns-star`
⭐ A star button.
- `slug` - GitHub slug (username/repo).
- `show-count` - Enable displaying the count number.

#### `gh-btns-fork`
🍴 A fork button.
- `slug` - GitHub slug (username/repo).
- `show-count` - Enable displaying the count number.

#### `gh-btns-follow`
👤 A follow button.
- `user` - GitHub username.
- `show-count` - Enable displaying the count number.
