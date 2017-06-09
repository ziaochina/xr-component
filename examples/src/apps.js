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

  	else if(path === 'apps/link'){
    	cb(require('./apps/link/index'))
    }

  	else if(path === 'apps/tabs'){
    	cb(require('./apps/tabs/index'))
    }

  	else if(path === 'apps/tree'){
    	cb(require('./apps/tree/index'))
    }

  	else if(path === 'apps/treeSelect'){
    	cb(require('./apps/treeSelect/index'))
    }

    else if(path === 'apps/affix'){
    	cb(require('./apps/affix/index'))
    }

    else if(path === 'apps/anchor'){
    	cb(require('./apps/anchor/index'))
    }

    else if(path === 'apps/backTop'){
    	cb(require('./apps/backTop/index'))
    }

    else if(path === 'apps/breadcrumb'){
    	cb(require('./apps/breadcrumb/index'))
    }

    else if(path === 'apps/badge'){
    	cb(require('./apps/badge/index'))
    }

    else if(path === 'apps/carousel'){
    	cb(require('./apps/carousel/index'))
    }

    else if(path === 'apps/cascader'){
    	cb(require('./apps/cascader/index'))
    }

    else if(path === 'apps/toast'){
    	cb(require('./apps/toast/index'))
    }

    else if(path === 'apps/modal'){
    	cb(require('./apps/modal/index'))
    }

    else if(path === 'apps/alert'){
    	cb(require('./apps/alert/index'))
    }

    else if(path === 'apps/notification'){
    	cb(require('./apps/notification/index'))
    }

    else if(path === 'apps/popconfirm'){
    	cb(require('./apps/popconfirm/index'))
    }

}