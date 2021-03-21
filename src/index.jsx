import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Hello from './Hello.mdx'
import D from './D.mdx'
import { Counter } from './Counter.jsx';
import CodeBlock from './CodeBlock';
import {Api} from './Api';
import {Apis} from './Apis';
import {Cb} from './Cb';
import { MDXProvider } from '@mdx-js/react'


const components = {
	Counter : Counter,
	code: CodeBlock,
	Api: Api,
	Apis: Apis,
}

ReactDOM.render(
  <React.StrictMode>
	<Cb />
	<MDXProvider  components={components} >

    <D/>
    <Hello/>
	</MDXProvider>
  </React.StrictMode>,
  document.getElementById('react-root')
)
