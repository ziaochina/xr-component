export default function requireApp(path, cb) {
    
    if(path === 'apps/root'){
        cb( require('./apps/root/index'),
            require('./apps/root/action'),
            require('./apps/root/reducer'))
    }

    else if(path === 'apps/about'){
    	cb(require('./apps/about/index'))
    }

    else if(path === 'apps/menu'){
    	cb(require('./apps/menu/index'))
    }
}