import React from 'react'

const list = [
  'The first item on a list',
  'A second item',
  'The third time is the charm'
]

export default () => pug`
  h1 Welcome to pug!

  ul.list
    each item in list
      li(key=item) Item text: #{item}
`
