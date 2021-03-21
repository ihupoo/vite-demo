import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import moduleName from './remark'

import path from 'path';
import fs from 'fs';

const table = require('remark-gfm')
const frontmatter = require('remark-frontmatter')
const parseFrontmatter = require('remark-parse-yaml');
const slug = require('remark-slug');

export default {
  plugins: [
	  
	reactRefresh(),
	
	{
		name: 'vite-plugin-mdx-parse',
		transform(code, id, ssr){
			if(/\.mdx?$/.test(id)){


				let x = new RegExp('(<API[^>]*src=[\'\"])(.*?)([\'\"][^>]*>)', 'i')

				let ttt = code.match(x)

				if(ttt){
					let [,,apiSrc] = ttt

						if(apiSrc){

						
						code = code.replace(x, "$1"+ path.join(id, '..',apiSrc) + "_$_$_$_"+  id +"$3")

					}
				}
				
			}


				// fs.createReadStream('E:/learn_demo/vite/vite-plugin-mdx/examples/react/src/Hello.mdx')
				// .pipe(fs.WriteStream('E:/learn_demo/vite/vite-plugin-mdx/examples/react/src/Hello.mdx'));



			
			return code
		}
	},
	
	mdx({
		// See https://mdxjs.com/advanced/plugins
		remarkPlugins: [frontmatter,parseFrontmatter,slug,moduleName,table],
		// remarkPlugins: [,moduleName],
		rehypePlugins: [],
	}
)
],
define:{
	global:{}
}
}
