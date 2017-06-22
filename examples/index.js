import {
	config,
	start
} from 'xr-app-loader'

import _src_apps_about from './src/apps/about/index.app'
import _src_apps_affix from './src/apps/affix/index.app'
import _src_apps_alert from './src/apps/alert/index.app'
import _src_apps_anchor from './src/apps/anchor/index.app'
import _src_apps_backTop from './src/apps/backTop/index.app'
import _src_apps_badge from './src/apps/badge/index.app'
import _src_apps_breadcrumb from './src/apps/breadcrumb/index.app'
import _src_apps_button from './src/apps/button/index.app'
import _src_apps_card from './src/apps/card/index.app'
import _src_apps_carousel from './src/apps/carousel/index.app'
import _src_apps_cascader from './src/apps/cascader/index.app'
import _src_apps_checkbox from './src/apps/checkbox/index.app'
import _src_apps_collapse from './src/apps/collapse/index.app'
import _src_apps_datagrid from './src/apps/datagrid/index.app'
import _src_apps_datePicker from './src/apps/datePicker/index.app'
import _src_apps_dropdown from './src/apps/dropdown/index.app'
import _src_apps_echarts from './src/apps/echarts/index.app'
import _src_apps_form from './src/apps/form/index.app'
import _src_apps_icon from './src/apps/icon/index.app'
import _src_apps_input from './src/apps/input/index.app'
import _src_apps_layout from './src/apps/layout/index.app'
import _src_apps_link from './src/apps/link/index.app'
import _src_apps_menu from './src/apps/menu/index.app'
import _src_apps_modal from './src/apps/modal/index.app'
import _src_apps_notification from './src/apps/notification/index.app'
import _src_apps_pagination from './src/apps/pagination/index.app'
import _src_apps_popconfirm from './src/apps/popconfirm/index.app'
import _src_apps_popover from './src/apps/popover/index.app'
import _src_apps_progress from './src/apps/progress/index.app'
import _src_apps_radio from './src/apps/radio/index.app'
import _src_apps_rate from './src/apps/rate/index.app'
import _src_apps_root from './src/apps/root/index.app'
import _src_apps_select from './src/apps/select/index.app'
import _src_apps_slider from './src/apps/slider/index.app'
import _src_apps_spin from './src/apps/spin/index.app'
import _src_apps_start from './src/apps/start/index.app'
import _src_apps_steps from './src/apps/steps/index.app'
import _src_apps_switch from './src/apps/switch/index.app'
import _src_apps_table from './src/apps/table/index.app'
import _src_apps_tabs from './src/apps/tabs/index.app'
import _src_apps_timeline from './src/apps/timeline/index.app'
import _src_apps_toast from './src/apps/toast/index.app'
import _src_apps_tooltip from './src/apps/tooltip/index.app'
import _src_apps_transfer from './src/apps/transfer/index.app'
import _src_apps_tree from './src/apps/tree/index.app'
import _src_apps_treeSelect from './src/apps/treeSelect/index.app'
import _src_apps_upload from './src/apps/upload/index.app'

config({
	apps: {
		[_src_apps_about.name]: _src_apps_about,
		[_src_apps_affix.name]: _src_apps_affix,
		[_src_apps_alert.name]: _src_apps_alert,
		[_src_apps_anchor.name]: _src_apps_anchor,
		[_src_apps_backTop.name]: _src_apps_backTop,
		[_src_apps_badge.name]: _src_apps_badge,
		[_src_apps_breadcrumb.name]: _src_apps_breadcrumb,
		[_src_apps_button.name]: _src_apps_button,
		[_src_apps_card.name]: _src_apps_card,
		[_src_apps_carousel.name]: _src_apps_carousel,
		[_src_apps_cascader.name]: _src_apps_cascader,
		[_src_apps_checkbox.name]: _src_apps_checkbox,
		[_src_apps_collapse.name]: _src_apps_collapse,
		[_src_apps_datagrid.name]: _src_apps_datagrid,
		[_src_apps_datePicker.name]: _src_apps_datePicker,
		[_src_apps_dropdown.name]: _src_apps_dropdown,
		[_src_apps_echarts.name]: _src_apps_echarts,
		[_src_apps_form.name]: _src_apps_form,
		[_src_apps_icon.name]: _src_apps_icon,
		[_src_apps_input.name]: _src_apps_input,
		[_src_apps_layout.name]: _src_apps_layout,
		[_src_apps_link.name]: _src_apps_link,
		[_src_apps_menu.name]: _src_apps_menu,
		[_src_apps_modal.name]: _src_apps_modal,
		[_src_apps_notification.name]: _src_apps_notification,
		[_src_apps_pagination.name]: _src_apps_pagination,
		[_src_apps_popconfirm.name]: _src_apps_popconfirm,
		[_src_apps_popover.name]: _src_apps_popover,
		[_src_apps_progress.name]: _src_apps_progress,
		[_src_apps_radio.name]: _src_apps_radio,
		[_src_apps_rate.name]: _src_apps_rate,
		[_src_apps_root.name]: _src_apps_root,
		[_src_apps_select.name]: _src_apps_select,
		[_src_apps_slider.name]: _src_apps_slider,
		[_src_apps_spin.name]: _src_apps_spin,
		[_src_apps_start.name]: _src_apps_start,
		[_src_apps_steps.name]: _src_apps_steps,
		[_src_apps_switch.name]: _src_apps_switch,
		[_src_apps_table.name]: _src_apps_table,
		[_src_apps_tabs.name]: _src_apps_tabs,
		[_src_apps_timeline.name]: _src_apps_timeline,
		[_src_apps_toast.name]: _src_apps_toast,
		[_src_apps_tooltip.name]: _src_apps_tooltip,
		[_src_apps_transfer.name]: _src_apps_transfer,
		[_src_apps_tree.name]: _src_apps_tree,
		[_src_apps_treeSelect.name]: _src_apps_treeSelect,
		[_src_apps_upload.name]: _src_apps_upload
	}
})

start('app', null, 'apps/root')