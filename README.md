# Key-Pair Tree Viewer

![image]()

This is a Tree Viewer application that dynamically adjusts its structure based on user input. You can explore a live demo of the application [here](https://key-pair-tree-viewer.netlify.app/).

The application is built using the Vite build tool and leverages Vue 3 with the Composition API as its primary framework. The tech stack includes:

- [**Tailwind**](https://tailwindcss.com/): Utilized for sleek and efficient CSS styling.
- **Pug**: Simplifying HTML syntax for enhanced readability and maintainability.
- [**Pinia**](https://pinia.vuejs.org/): Empowering the application to efficiently manage and store key-value pairs.

## Project Setup

```
$ git clone https://github.com/maychang7331/key-pair-treeViewer
$ npm install
```

Where `npm install` reaches into the package.json file, and install the all dependencies needed. (See "Start from scratch" if you want to set up each dependency individually.)

#### Compile and development

```
$ npm run dev
```

#### Production

```
$ npm run build
```

#### Preview the build locally

```
$ npm run preview
```

#### Deploy

This application is deployed using [Netlify](https://www.netlify.com/):

1. Add new site, select Deploy manually
2. Create a file named `netlify.toml` in the "dist folder" and the "root folder" with following content:
   ```
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```
3. Drag-n-drop the dist folder for deployment

## Start From Scratch

#### Environment

1. [Install Tailwind CSS with Vite using Vue](https://tailwindcss.com/docs/guides/vite#vue)
2. Install Pug `npm install pug --save-dev`
3. Install [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) and change the file extension from `prettier.config.js` to prettier.config.cjs if needed.
4. `npm install -D @vue/language-plugin-pug` and add `jsconfig.json` (Vscode issue [ref](https://www.npmjs.com/package/@vue/language-plugin-pug))
5. `npm install pinia`

## How I plan the project
