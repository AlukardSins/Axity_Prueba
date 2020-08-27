import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BaseList } from './bases/list/list.component'
import { BaseDetail } from './bases/detail/detail.component'
import { FlavorList } from './flavors/list/list.component'
import { FlavorDetail } from './flavors/detail/detail.component'
import { ProductList } from './products/list/list.component'
import { ProductDetail } from './products/detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseList,
    BaseDetail,
    FlavorList,
    FlavorDetail,
    ProductList,
    ProductDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
