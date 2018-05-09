import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating:number = 0;

  stars:boolean[];  //布尔的数组

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }

}

//痔疮  低血糖
