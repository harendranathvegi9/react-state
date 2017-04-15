import React from 'react'
import { configure, storiesOf } from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'
import Perf from 'react-addons-perf'

window.Perf = Perf

import './reset.css'
import './fonts.css'
import './layout.css'
import '../stories/utils/prism.css'
import 'github-markdown-css/github-markdown.css'
//
import Readme from '../README.md'
//
import Demo from '../stories/Demo.js'
//

setOptions({
  showDownPanel: false
})

configure(() => {
  storiesOf('1. Docs')
    .add('Readme', () => {
      const ReadmeCmp = React.createClass({
        render () {
          return <span className='markdown-body' dangerouslySetInnerHTML={{__html: Readme}} />
        },
        componentDidMount () {
          global.Prism && global.Prism.highlightAll()
        }
      })
      return <ReadmeCmp />
    })
  storiesOf('2. Demos')
    .add('Basic', Demo)
}, module)
