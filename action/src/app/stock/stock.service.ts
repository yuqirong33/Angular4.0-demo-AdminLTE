import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  private stocks:Stock[] = [
    new Stock(1, "第1只团队", 1.29, 3.2, "这是第1只实战创建", ["运维开发", "C#开发"]),
    new Stock(2, "第2只团队", 1.59, 2.4, "这是第2只实战创建", ["架构开发"]),
    new Stock(3, "第3只团队", 1.99, 4.9, "这是第3只实战创建", ["全栈开发"]),
    new Stock(4, "第4只团队", 2.09, 3.5, "这是第4只实战创建", ["前端开发"]),
    new Stock(5, "第5只团队", 0.99, 2.1, "这是第5只实战创建", ["计算机硬件"]),
    new Stock(6, "第6只团队", 1.09, 1.4, "这是第6只实战创建", ["大数据开发"]),
    new Stock(7, "第7只团队", 3.59, 3.0, "这是第7只实战创建", ["安卓开发"]),
    new Stock(8, "第8只团队", 1.88, 4.2, "这是第8只实战创建", ["IOS开发"])
  ];

  getStocks():Stock[]{
    return this.stocks;
  }

  getStock(id:number):Stock{
    let stock = this.stocks.find(stock => stock.id == id);
    if(!stock){
        stock = new Stock(0, "", 0, 0, "", []);
        return stock;
    }
  }

}


//创建一个股票的table
export class Stock{

  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}
