import visit from 'unist-util-visit'
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

import parser from './parser';

import {Watcher, cacheWatch} from './watcher';


const trans = () => (tree, file) => {


	visit(tree, 'yaml', function visitor(node) {
	//  console.log('node :>> ', node);


		fs.writeFileSync(path.join(__dirname, './src/x.json'), `{"mm":${node.data.parsedValue.a}}`)

	  })
	  
	  visit(tree, 'code', function visitor(node) {

	 const [, comments = '', content = ''] = node.value
      // clear head break lines
      .replace(/^\n\s*/, '')
      // split head comments & remaining code
      .match(/^(\/\*\*[^]*?\n\s*\*\/)?(?:\s|\n)*([^]+)?$/);

    const frontmatter = comments
      // clear / from head & foot for comment
      .replace(/^\/|\/$/g, '')
      // remove * from comments
      .replace(/(^|\n)\s*\*+/g, '$1');


	//   console.log('comments, for :>> ', comments, yaml.load(frontmatter));


	//   console.log('node :>> ', node);


	
	  })

	visit(tree, 'mdxJsxFlowElement', function visitor(node) {
		// console.log('node :>> ', node);
   
		if(node.name === 'API'){

			let item = node.attributes.find(x => x.name === 'src')

			let path = item.value.split('_$_$_$_')

			console.log('path :>> ', path);

			Watcher(path[0])
			cacheWatch[path[0]] = path[1]

			let x = parser(path[0])


			node.name = 'Api'
			node.attributes = []
			node.children = x.Column.map(m => {

				let _identifier = m.identifier.replace(/"/g, '`')
				let _description = m.description.replace(/"/g, '`')
				let _type = m.type.replace(/"/g, '`')
				let _required = (`${m.required}`).replace(/"/g, '`')

				return  {
					type: 'mdxJsxFlowElement',
					name: 'Apis',
					attributes: [ { type: 'mdxJsxAttribute', name: 'identifier', value: _identifier },
					{ type: 'mdxJsxAttribute', name: 'description', value: _description } ,
					{ type: 'mdxJsxAttribute', name: 'type', value:_type } ,
					{ type: 'mdxJsxAttribute', name: 'required', value: _required}  ],
					children: [],
					
				}
			})



		}
   
		 
   
		 })

}
export default trans
