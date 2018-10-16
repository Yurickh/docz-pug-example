export default {
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [...babelrc.plugins, 'transform-react-pug']
  })
}
