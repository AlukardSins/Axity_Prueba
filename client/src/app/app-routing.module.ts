import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProductList } from './products/list/list.component'
import { FlavorList } from './flavors/list/list.component'
import { BaseList } from './bases/list/list.component'

const routes: Routes = [
  { path: 'products', component: ProductList },
  { path: 'flavors', component: FlavorList },
  { path: 'bases', component: BaseList }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
