import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import {mdx} from '@mdx-js/react'
import { Counter } from './Counter.jsx';

export default ({children, className, live, ...res}) => {
  const language = className?.replace(/language-/, '')

  console.log('language :>> ', res);

  if (live) {
    return (
      <div style={{marginTop: '40px'}}>
        <LiveProvider code={children} 
  scope={{ mdx, Counter }}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
