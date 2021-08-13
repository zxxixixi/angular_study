import { Component, OnInit, ViewChild } from '@angular/core';
import {ServemyService} from '../../serves/servemy.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild('homes') homes:any;
  @ViewChild('tom') tom:any;
  constructor(public servemy:ServemyService) { }
  list=[{
    name:'111',
    id:1
  },
  {
    name:'222',
    id:2
  },
  {
    name:'333',
    id:3
  }
  ]
  title = '我是父组件的值'
  //数据和标签指令初始化完成
  ngOnInit(): void {
  }
  //dom挂载完成
  ngAfterViewInit(){
    this.homes.nativeElement.style.width = '100px';
    this.homes.nativeElement.style.background = 'red';
    console.log(this.tom);
    this.tom.speak()
  }
  run(){
    
    alert("我是父组件的run方法")
  }
  xixhafio(e:any){
    console.log(e);
  }
}
