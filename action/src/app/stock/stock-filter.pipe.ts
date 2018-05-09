import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword:string): any {

    if(!field || !keyword){  //如果没有指定的字段或者用户没有输入关键字那么就返回列表
        return list;
    }

    return list.filter(item =>{
      let itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0 ;
    });
  }

}
