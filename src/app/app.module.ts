import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StarsComponent } from './stars/stars.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';

//路由配置
const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'stock', component: StockManageComponent },
  {path: 'stock/:id', component: StockFormComponent }
]

@NgModule({
  declarations: [  //只能声明组件
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StarsComponent,
    StockManageComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    AppComponent
  ],
  imports: [  //框架模块依赖
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],  //声明模块里的服务
  bootstrap: [AppComponent]  //根组件
})
export class AppModule { }
