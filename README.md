# Docz pug integration example
Documenting pug code blocks with docz

## Running the example

```bash
yarn docz dev
```

## What do I need to do in my project to add pug support?

Install the plugin:

```bash
yarn add babel-plugin-transform-react-pug
```

Add the plugin to your `doczrc.js` config:

```js
export default {
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [...babelrc.plugins, 'transform-react-pug']
  })
}
```

or

```js
export default {
  modifyBabelRc: babelrc => {
    babelrc.plugins.push('transform-react-pug')
    return babelrc
  }
}
```

Now you're free to go!

## Caveats

Passing pug definitions inside the Playground component will create a dark overlay and hide the actual component output:

```js
<Playground>
  {pug`
    h1 This is sad :(
  `}
</Playground>
```

![Dark overlay](https://github.com/Yurickh/docz-pug-example/raw/master/dark-overlay.png)
