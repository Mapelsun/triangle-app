# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Project details below

Triangle problem
By starting at the top of the triangle and moving only to one of the two adjacent numbers on the row below, the maximum total from top to bottom is 30.

```js
        5
      9  6
    4   6  8
  0   7  1   5
8  3   1   1   2

i.e. 5 + 9 + 6 + 7 + 3 = 30
```

Write a web app to calculate the maximum total from top to bottom in triangle.txt, a text file containing a triangle with 100 rows. The following requirements should be met:
Must be written in ReactJS/NextJS
Must have a UX to accept any arbitrary triangle file (like the one linked above)
Once the file is loaded, the solution should be visualized in the render of the triangle on the screen.
Extra points for making the solution animated as the solution is formed.
Include a GitHub Actions workflow to build and run the unit tests every time a Pull Request is submitted on the main branch
