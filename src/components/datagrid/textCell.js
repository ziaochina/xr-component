import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import classNames from 'classnames'


export default class textCellComponent extends Component{
  render(){
      let {
          height,
          width,
          style,
          className,
          align,
          format,
          value,
          dataType,
          precision,
          enableTooltip,
          enableEllipsis,
          ...other
      } = this.props

      let cls = classNames({
          'xr-datagrid-cellContent':true,
          [`xr-datagrid-cellContent-${align}`]: !!align,
          [className] : !!className
      })

      let innerStyle = {
          height,
          width,
          ...style,
      }

      switch(dataType){
          case 'bool':
            value = (value == undefined || value==false)? '否':'是'
          break
          case 'float':
            if(precision && ( !!value )){
              value = parseFloat(value).toFixed(precision)
            }
          break
      }

      if(value == null || value == undefined){
        value = ''
      }

      value = value + ''

      if(format){
        value = format(value)
      }

      let ext = {}
      if (enableTooltip) {
        ext.title = value
      }


      if(enableEllipsis){
          ext.title = value
          value = [<span style={{ whiteSpace:'nowrap',overflow:'hidden', textOverflow:'ellipsis'}}>{value}</span>]
      }



      return (
          <div {...other} className={cls} style={innerStyle} {...ext}>
              {value}
          </div>
      )
  }
}