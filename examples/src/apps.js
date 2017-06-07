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

    else if(path === 'apps/card'){
    	cb(require('./apps/card/index'))
    }

    else if(path === 'apps/icon'){
    	cb(require('./apps/icon/index'))
    }

    else if(path === 'apps/collapse'){
    	cb(require('./apps/collapse/index'))
    }

    else if(path === 'apps/layout'){
    	cb(require('./apps/layout/index'))
    }

    else if(path === 'apps/button'){
    	cb(require('./apps/button/index'))
    }

    else if(path === 'apps/datePicker'){
    	cb(require('./apps/datePicker/index'))
    }

  	else if(path === 'apps/checkbox'){
    	cb(require('./apps/checkbox/index'))
    }

  	else if(path === 'apps/radio'){
    	cb(require('./apps/radio/index'))
    }

  	else if(path === 'apps/switch'){
    	cb(require('./apps/switch/index'))
    }
}