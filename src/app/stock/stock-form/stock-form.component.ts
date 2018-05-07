import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, "第1只团队", 1.29, 3.2, "这是第1只实战创建", ["运维开发", "C#开发"])
  }

}
