import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;
  private nameFilter: FormControl = new FormControl();
  private keywork: string;

  constructor(public router:Router,private stockService:StockService) {
  }

  ngOnInit() {  //页面初始化的时候调用的方法
    //初始化数据
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges  //监听响应式编程input变化
      .debounceTime(500)
      .subscribe(value => this.keywork = value);
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/' + stock.id);
  }
}


