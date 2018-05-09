import { Component } from '@angular/core';

@Component({  //组件元数据装饰器
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //定义组件控制器  包含这个组件所有的属性和方法
  title = '俞其容';
}
