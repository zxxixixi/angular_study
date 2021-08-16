# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



<!-- 通过viewchild调用子组件的方法  父子组件传值 传方法 this可以获取怎么父组件-->
<app-cars #tom [title]='title' [run]='run' [allparent]='this'></app-cars>
<div *ngFor='let item of list;let key=index' [hidden]='key==2'>
  <p *ngIf='key==1'>{{item.name}}</p>
</div>

<!-- 
    子组件获取父组件的值或者方法
        ---------[XXX]="XXX"  @Input
        ---------@OutPut EventEmitter
    父组件获取子组件的子或者方法---------#names  @ViewChild
 -->
<app-cars (ourers)="xixhafio($event)"></app-cars>

<!-- 生命周期函数---按执行顺序写的,在执行生命周期之前最早执行构造器函数-->
ngOnChanges()----父组件给子组件传值完成,有父子组件传值时才触发
ngOnInint()----数据和元素指令初始化完成,一般可以用于发送请求 ****
ngDoCheck----做自定义操作
ngAfterContentInint----内容投影到组件之后
ngAfterContentChecked----跟第三个差不多可以在内容投影到组件之后做自定义操作
ngAfterViewInit----视图加载完成,在这里可以获取到组件的dom元素 ****
ngAfterViewChecked------ 视图加载完成之后做自定义操作
ngOnDestroy----组件销毁后做一些操作 *****

<!-- 双向数据绑定时需要引入模块FormsModule -->
import FormsModule from '@angular/forms'
<!-- 服务  -->
创建  ng g service serves/servemy 
引入 在app.module.ts中引入,注入
然后在需要使用服务的地方 申明constructor(public serve:xxxxx)

<!-- Rxjs 异步 angular中自己集成了,无需安装-->
import {Observable} from 'rxjs
let stream =new Observable(observer =>{
   setTimeout(()=>{
       observer.next('glajhglsa')
   },2000)
})
stream.subscribe(value=> console.log(value))
<!--es6语法 promise -->
let promi =new Promise(resolve =>{
   setTimeout(()=>{
       resolve('glajhglsa')
   },2000)
})
promi.then(value=> console.log(value))

rxjs相比与promise有更强大的功能:
1.中途可以撤回
   ---------
   let d=stream.subscribe(value=> console.log(value))
   d.unsubscribe();//取消订阅
2.可以发射多个值
3.提供了多种工具函数
//filter方法
stream.pipe(
    filter((value)=>{
       if(value%2==0){
         return true
       }
    })
).subscribe(value=> console.log(value))
//map方法
stream.pipe(
    map((value)=>{
       return value*3
    })
).subscribe(value=> console.log(value))
//多种工具一起使用
stream.pipe(
    filter((value)=>{
       if(value%2==0){
         return true
       }
    }),
    map((value)=>{
       return value*3
    })
).subscribe(value=> console.log(value))
4.可以多次执行,拿到多次结果,promise即使设置了定时器也只会拿到一次结果
let stream =new Observable(observer =>{
   setInterval(()=>{
       observer.next('glajhglsa')
   },2000)
})

<!-- http -->
1.在app.module.ts中引入
import {HttpClientModule} from '@angular/common/http'
2.依赖注入
3.在要使用的地方引入
import {HttpClient} from '@angular/common/http'
4.然后在需要使用服务的地方 申明constructor(public http:HttpClient)
5.使用
this.http.get(api).subscribe((res)=>{
    console.log(res)
})

<!-- 路由 -->
const routes: Routes = [
     {
        path: 'home', component: HomeComponent}
     },
     //动态路由
     {
        path: 'new:id', component: NewComponent}
     }
     //任意路由
     {
        path: '**',
        redirectTo: '/home'
     }
]
//路由跳转
<a [routerLink]="[ '/home' ]" routerLinkActive="actice">跳转</a>
.active{
    color: red
}

//第一种路由传参方式
<a [routerLink]="[ '/home' ]" [queryParams]="{aid:key}" routerLinkActive="actice">跳转</a>
获取：
1.import {ActivatedRoute} from '@angular/router';
2.constructor(public routeL:ActivatedRoute)
3.this.route.queryParams.subscribe((data)=>{
  console.log(data)
})  //路由拿到的也是rxjs格式的

//第二种路由传参方式
<a [routerLink]="[ '/home'，key ]" routerLinkActive="actice">跳转</a>
获取：
1.import {ActivatedRoute} from '@angular/router';
2.constructor(public routeL:ActivatedRoute)
3.this.route.params.subscribe((data)=>{
  console.log(data)
})  //路由拿到的也是rxjs格式的

//js跳转 适合普通路由和动态路由
1.import {Router} from '@angular/router';
2.constructor(public router:Router)
3.this.router.navigate(['/new',2343])

//js跳转 传值路由
1.import {Router,NavigationExtras} from '@angular/router';
2.let navigationExtras: NavigationExtras = {
    queryParams: {'id':'23'}
    fragment: 'anchor'
}
this.router.navigate(['/news'], navigationExtras);

<!-- 父子路由 -->
{
        path: 'home', component: HomeComponent,
        children: [
            {
               path: 'name', component: NameComponent,
            },{
               path: '**',redirectTo:'/home'
            }
        ]

}
