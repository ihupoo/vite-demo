import chokidar from 'chokidar'
import fs from 'fs';

let watcher = null



export let cacheWatch = {}

export const Watcher = (file) => {

	if(watcher) {

		watcher.add(file);

		return watcher
	}


	watcher = chokidar.watch(file, 
		{
	//   ignored,
	//   cwd: paths.root,
	//   persistent: true,
	}
	)
  
	watcher.setMaxListeners(Infinity)

	

	watcher.on('change', (path, stats) => {
		let url = cacheWatch[path]

		console.log('cacheWatch :>> ', cacheWatch);

		let a = fs.readFileSync(url)

		fs.writeFileSync(url, a)

	})
	return watcher
  }
