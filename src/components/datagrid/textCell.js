import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import classNames from 'classnames'

const formatByThousand = (num)=>{
    if (isNaN(num)) { 
          return num
    } 
    return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");  
}

const replaceSpaceToNbsp = (text) =>{
    return Array.from(text).map(o=>{
       if(o=== ' '){
          return React.createElement('&nbsp;')
       }
       return o
    })
}

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
          transSpaceToNbsp,
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

      if(transSpaceToNbsp){
        value = replaceSpaceToNbsp(value)
      }

      if(format == 'thousand'){
        value = formatByThousand(value)
      }

      value = value + ''
      let ext = {}
      if (enableTooltip) {
        ext.title = value
      }

      if(enableEllipsis){
        innerStyle = { ...innerStyle, whiteSpace:'nowrap',overflow:'hidden', textOverflow:'ellipsis'}
        ext.title = value
        value = [value,'...']
      }

      return (
          <div {...other} className={cls} style={innerStyle} {...ext}>
              {value}
          </div>
      )
  }
}