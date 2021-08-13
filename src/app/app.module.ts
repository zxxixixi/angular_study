import { NgModule } from '@angular/core'; //核心模块
import { BrowserModule } from '@angular/platform-browser'; //浏览器解析模块

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './componnets/cars/cars.component';

import {ServemyService} from './serves/servemy.service'
@NgModule({
  // 放组件
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent
  ],
  //放模块
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //放服务
  providers: [ServemyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
