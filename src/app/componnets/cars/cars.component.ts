import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent implements OnInit {

  @Input() title:any;
  @Input() run:any;
  @Input() allparent:any;
  @Output() ourers=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  speak(){
    console.log('我要fhalhgalkhgalkhglk');
  }
  xixi(){
    console.log(111);
    
    this.run()
    this.allparent.run()
    console.log(this.allparent.title);
    
  }
  hei(){
    console.log('111');
    
  }
  chunzhi(){
    this.ourers.emit("我是子组件传过来的值")
  }
}
