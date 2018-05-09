import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Array<Menu>;  //初始化的时候需要一个公有属性它是一个数组   把下面的菜单类给初始化到组件中

  currentMenuId:number;

  constructor(public router:Router) {  //注入路由器

  }

  ngOnInit() {
    this.menus = [
      new Menu(1,'首页','dashboard'),
      new Menu(2,'Table管理','stock')
    ]
  }

  nav(menu:Menu){
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }

}

//创建个菜单类 点击导航时候显示高亮
export class  Menu {

  constructor(
    public id:number,
    public name:string,
    public link:string
  ){}

}
